import Image from "next/image";
import { Bus, Car, Footprints, PhoneCall } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";

export default function AccessPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/images/clinic.png"
          alt="くわばら整形外科の外観"
          fill
          priority
          className="object-cover opacity-75"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/20" />
        <div className="container-pad relative min-h-[360px] py-16 sm:min-h-[500px] sm:py-24">
          <h1 className="mb-8 text-4xl font-semibold leading-tight text-clinic-700 sm:text-6xl">
            アクセス
          </h1>
        </div>
      </section>

      <section className="container-pad grid gap-7 py-16 lg:grid-cols-[1fr_360px]">
        <div className="soft-card min-h-[560px] overflow-hidden bg-clinic-50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12838.551242218142!2d139.0195979662896!3d36.44213971948205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8b278cc10bf7%3A0x51343a32dd6ffb7f!2z44GP44KP44Gw44KJ5pW05b2i5aSW56eR!5e0!3m2!1sja!2sca!4v1740875199113!5m2!1sja!2sca"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 560 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="くわばら整形外科への地図"
          />
        </div>

        <div className="grid gap-5">
          {[
            {
              icon: Car,
              title: "車でお越しの方",
              lines: ["群馬総社駅から 約10分", "八木原駅から 約7分"],
            },
            {
              icon: Footprints,
              title: "徒歩でお越しの方",
              lines: ["吉岡温泉から 徒歩7分"],
            },
            {
              icon: Bus,
              title: "バスでお越しの方",
              lines: ["日本中央バス 「くわばら整形外科前」 下車"],
            },
          ].map(({ icon: Icon, title, lines }) => (
            <article key={title} className="soft-card p-7 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-clinic-50 text-clinic-500">
                <Icon className="h-9 w-9" />
              </div>
              <h2 className="mb-5 text-2xl font-bold text-clinic-600">{title}</h2>
              <div className="border-t border-dashed border-clinic-300 pt-5">
                {lines.map((line) => (
                  <p key={line} className="text-xl leading-10 text-slate-700">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
