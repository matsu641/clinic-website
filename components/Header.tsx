import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "当院について" },
  { href: "/medical", label: "診療案内" },
  { href: "/rehab", label: "リハビリ治療" },
  { href: "/access", label: "アクセス" },
];

const mobilePrimaryNavItems = navItems.slice(0, 3);
const mobileSecondaryNavItems = navItems.slice(3);

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-clinic-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-pad flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="ホーム">
          <Image
            src="/images/logo.jpg"
            alt="くわばら整形外科 ロゴ"
            width={54}
            height={54}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="text-xl font-bold text-clinic-700 sm:text-2xl">
              くわばら整形外科
            </p>
            <p className="hidden text-sm font-semibold text-clinic-800 sm:block">
              TEL: 0279-25-8855
            </p>
          </div>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-bold text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="border-b-2 border-transparent pb-2 transition hover:border-clinic-400 hover:text-clinic-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+81-279-25-8855"
          className="hidden items-center gap-2 rounded-[8px] bg-clinic-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-clinic-600/20 transition hover:bg-clinic-700 sm:flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>TEL: 0279-25-8855</span>
        </a>
      </div>
      <nav
        aria-label="モバイルナビゲーション"
        className="border-t border-clinic-50 bg-white lg:hidden"
      >
        <div className="container-pad py-2.5 text-sm font-bold text-slate-700">
          <ul className="grid grid-cols-3 gap-2">
            {mobilePrimaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-10 items-center justify-center rounded-[8px] px-2 text-center leading-snug transition hover:bg-clinic-50 hover:text-clinic-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            {mobileSecondaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-10 items-center justify-center rounded-[8px] px-2 text-center leading-snug transition hover:bg-clinic-50 hover:text-clinic-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
