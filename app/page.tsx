import Image from "next/image";
import {
  AlertTriangle,
  Bell,
  Clock,
  HeartHandshake,
  Home,
  Leaf,
  Stethoscope,
} from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { departments, hours, requests, visitCards } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="hero-home relative overflow-hidden bg-white">
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />
        <Image
          src="/images/clinic3.png"
          alt="くわばら整形外科のリハビリ室 - 患者さんに寄り添った回復プログラム"
          fill
          priority
          className="hero-bg-image object-cover object-center opacity-75"
          sizes="100vw"
        />
        <div className="hero-container container-pad relative min-h-[610px] py-20">
          <div className="hero-copy max-w-2xl pt-12">
            <p className="mb-4 text-3xl font-medium leading-tight text-slate-800 sm:text-4xl md:text-5xl">
              患者さんに寄り添った
            </p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight text-clinic-600 sm:text-5xl md:text-7xl">
              回復プログラム
            </h1>
            <p className="text-lg font-bold text-slate-700 sm:text-xl md:text-2xl">
              いつでもお気軽にご相談ください
            </p>
          </div>

          <div className="hero-cards absolute bottom-8 left-5 right-5 grid gap-3 md:grid-cols-4 lg:left-8 lg:right-8">
            {[
              { line1: "安心の医療で", line2: "皆様を支えます", icon: HeartHandshake },
              { line1: "地域に根差した", line2: "クリニック", icon: Home },
              { line1: "体の再生と", line2: "機能回復をサポート", icon: Stethoscope },
              { line1: "快適な診療環境を", line2: "提供します", icon: Leaf },
            ].map(({ line1, line2, icon: Icon }) => (
              <div
                key={`${line1}`}
                className="soft-card flex items-center gap-4 p-4"
              >
                <Icon className="h-9 w-9 text-clinic-400" aria-hidden="true" />
                <p className="text-sm font-bold leading-7 text-slate-700">
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad -mt-2 grid gap-5 py-14 md:grid-cols-[1fr_0.65fr_1.45fr]">
        <article className="soft-card p-7">
          <div className="mb-6 flex items-center gap-3 text-clinic-600">
            <Bell className="h-7 w-7" aria-hidden="true" />
            <h2 className="text-2xl font-bold">お知らせ</h2>
          </div>
          <div className="h-px bg-clinic-300" />
          <p className="mt-8 text-sm font-medium leading-8 text-slate-700">
            GW期間中は休診とさせていただいております。2026年5月8日（金）より診療を再開いたします。
          </p>
        </article>

        <article className="soft-card p-7">
          <div className="mb-6 flex items-center gap-3 text-clinic-600">
            <Stethoscope className="h-7 w-7" aria-hidden="true" />
            <h2 className="text-2xl font-bold">診療科目</h2>
          </div>
          <ul className="space-y-4 pt-2 text-sm font-medium text-slate-700">
            {departments.map((department) => (
              <li key={department} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                {department}
              </li>
            ))}
          </ul>
        </article>

        <article className="soft-card p-7">
          <div className="mb-6 flex items-center gap-3 text-clinic-600">
            <Clock className="h-7 w-7" aria-hidden="true" />
            <h2 className="text-2xl font-bold">診療時間</h2>
          </div>
          <table className="w-full overflow-hidden rounded-[8px] text-center text-sm">
            <caption className="sr-only">くわばら整形外科の診療時間表</caption>
            <thead className="bg-clinic-600 text-white">
              <tr>
                <th className="border border-clinic-500 px-3 py-3">曜日</th>
                <th className="border border-clinic-500 px-3 py-3">午前</th>
                <th className="border border-clinic-500 px-3 py-3">午後</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((row) => (
                <tr key={row[0]} className="bg-white">
                  <td className="border border-clinic-100 px-3 py-4 font-bold">
                    {row[0]}
                  </td>
                  {row.length === 3 ? (
                    <>
                      <td className="border border-clinic-100 px-3 py-4">
                        {row[1]}
                      </td>
                      <td className="border border-clinic-100 px-3 py-4">
                        {row[2]}
                      </td>
                    </>
                  ) : (
                    <td className="border border-clinic-100 px-3 py-4" colSpan={2}>
                      {row[1]}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>

      <section className="container-pad leaf-bg py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-700">
            当院を初めて受診される方へ
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {visitCards.map(({ icon: Icon, title, body }) => (
            <article key={title} className="soft-card p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-clinic-50 text-clinic-500">
                <Icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-clinic-600">{title}</h3>
              <p className="text-sm font-medium leading-8 text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad mt-10">
        <div className="soft-card bg-gradient-to-r from-white to-clinic-50 p-8 md:p-10">
          <div className="mb-6 flex items-center gap-4 text-clinic-600">
            <AlertTriangle className="h-10 w-10" aria-hidden="true" />
            <h2 className="text-3xl font-semibold">お願い</h2>
          </div>
          <ul className="space-y-4 text-sm font-medium leading-7 text-slate-700">
            {requests.map((request) => (
              <li key={request} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                {request}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
