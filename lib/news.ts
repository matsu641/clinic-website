import { parse } from "csv-parse/sync";

export type NewsItem = {
  date: string;
  title: string;
  body: string;
  pinned: boolean;
};

type NewsCsvRow = {
  published?: string;
  date?: string;
  title?: string;
  body?: string;
  pinned?: string;
};

const TRUE_VALUES = new Set(["1", "true", "yes", "y", "on", "published", "公開"]);

function isTruthy(value: string | undefined) {
  return TRUE_VALUES.has((value ?? "").trim().toLowerCase());
}

function normalizeGoogleCsvUrl(url: string) {
  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return "";
  }

  const parsedUrl = new URL(trimmedUrl);

  if (parsedUrl.searchParams.get("output") === "csv") {
    return parsedUrl.toString();
  }

  if (
    parsedUrl.pathname.includes("/export") &&
    parsedUrl.searchParams.get("format") === "csv"
  ) {
    return parsedUrl.toString();
  }

  const spreadsheetId = parsedUrl.pathname.match(/\/spreadsheets\/d\/([^/]+)/)?.[1];

  if (!spreadsheetId) {
    return parsedUrl.toString();
  }

  const gid = parsedUrl.searchParams.get("gid") ?? parsedUrl.hash.match(/gid=([^&]+)/)?.[1] ?? "0";

  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${gid}`;
}

function toTimestamp(date: string) {
  const timestamp = Date.parse(date);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const csvUrl = process.env.GOOGLE_NEWS_CSV_URL;

  if (!csvUrl) {
    return [];
  }

  try {
    const response = await fetch(normalizeGoogleCsvUrl(csvUrl), {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news CSV: ${response.status}`);
    }

    const csv = await response.text();
    const rows = parse(csv, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as NewsCsvRow[];

    return rows
      .filter((row) => isTruthy(row.published) && row.title?.trim())
      .map((row) => ({
        date: row.date?.trim() ?? "",
        title: row.title?.trim() ?? "",
        body: row.body?.trim() ?? "",
        pinned: isTruthy(row.pinned),
      }))
      .sort((a, b) => {
        if (a.pinned !== b.pinned) {
          return a.pinned ? -1 : 1;
        }

        return toTimestamp(b.date) - toTimestamp(a.date);
      });
  } catch (error) {
    console.error(error);
    return [];
  }
}
