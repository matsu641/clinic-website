import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollAnimator } from "@/components/ScrollAnimator";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuwabara-ortho.jp"),
  title: "くわばら整形外科 | 群馬県吉岡町の整形外科・リハビリ・リウマチ科",
  description:
    "群馬県吉岡町のくわばら整形外科では、整形外科・リウマチ科・リハビリ科を中心に、地域に根ざした安心・丁寧な医療を提供します。診療時間：平日8:00-12:00、14:50-19:00、土曜8:00-12:00、14:00-17:00。TEL:0279-25-8855",
  keywords: [
    "くわばら整形外科",
    "整形外科 吉岡町",
    "リハビリ 吉岡町",
    "群馬県 整形外科",
    "リウマチ科",
    "整形クリニック",
    "くわばら医院",
    "体外衝撃波治療",
    "干渉波治療",
    "北群馬郡",
  ],
  alternates: {
    canonical: "https://kuwabara-ortho.jp/",
  },
  openGraph: {
    title: "くわばら整形外科 | 群馬県吉岡町の整形外科・リハビリ・リウマチ科",
    description:
      "群馬県吉岡町の整形外科・リウマチ科・リハビリ科。体外衝撃波治療など最新機器を導入。地域に根ざした安心・丁寧な医療を提供します。",
    url: "https://kuwabara-ortho.jp",
    siteName: "くわばら整形外科",
    locale: "ja_JP",
    type: "website",
    images: ["/images/clinic.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "くわばら整形外科 | 群馬県吉岡町の整形外科・リハビリ・リウマチ科",
    description:
      "群馬県吉岡町の整形外科・リウマチ科・リハビリ科。体外衝撃波治療など最新機器を導入。",
    images: ["/images/clinic.jpg"],
  },
  icons: {
    icon: "/images/fabicon.jpg",
    apple: "/images/fabicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "くわばら整形外科",
    alternateName: "kuwabara orthopedic clinic",
    image: [
      "https://kuwabara-ortho.jp/images/clinic.jpg",
      "https://kuwabara-ortho.jp/images/clinic2.jpg",
      "https://kuwabara-ortho.jp/images/clinic3.png",
    ],
    url: "https://kuwabara-ortho.jp/",
    telephone: "+81-279-25-8855",
    faxNumber: "+81-279-25-8855",
    email: "info@kuwabara-clinic.jp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "漆原1179",
      addressLocality: "北群馬郡吉岡町",
      addressRegion: "群馬県",
      postalCode: "370-3601",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.44213971948205",
      longitude: "139.0195979662896",
    },
    medicalSpecialty: [
      "Orthopedic",
      "Rheumatology",
      "Physical Medicine and Rehabilitation",
    ],
    description:
      "群馬県吉岡町にある整形外科・リウマチ科・リハビリ科のくわばら整形外科です。体外衝撃波治療をはじめとした最新のリハビリ機器を導入し、地域に根ざした医療を提供しています。",
    priceRange: "$$",
    currenciesAccepted: "JPY",
    paymentAccepted: ["Cash", "Insurance"],
  };

  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollAnimator />
      </body>
    </html>
  );
}
