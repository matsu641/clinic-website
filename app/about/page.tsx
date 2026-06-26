import Image from "next/image";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="院長紹介"
        image="/images/reception_room.jpg"
        imageAlt="くわばら整形外科の受付カウンター - 明るく清潔な受付エリア"
      />

      <section className="container-pad py-16">
        <h2 className="section-title">院長紹介</h2>
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.35fr]">
          <div className="text-center">
            <div className="soft-card overflow-hidden">
              <Image
                src="/images/doctor.jpg"
                alt="くわばら整形外科 院長の写真"
                width={520}
                height={680}
                className="h-[420px] w-full object-cover"
              />
            </div>
            <p className="mt-7 text-xl font-bold text-clinic-600">
              くわばら整形外科 院長 桑原純太
            </p>
            <p className="mt-5 text-sm text-slate-600">
              平成6年　金沢大学 医学部医学科 卒業
            </p>
          </div>

          <article className="soft-card p-8 md:p-10">
            <h3 className="mb-7 text-3xl font-semibold text-slate-700">
              院長から一言
            </h3>
            <div className="space-y-7 text-lg leading-10 text-slate-700">
              <p>「笑顔をクリエイトする」を目標に、2008年11月に開院いたしました。</p>
              <p>
                温かいお言葉をかけてくださった患者様のおかげで、今日まで診療を続けることができております。この場をお借りして、心より感謝申し上げます。
              </p>
              <p>
                病でお困りの方や苦しんでいる方のお力になり、笑顔で日々を過ごしていただけるよう、これからも粉骨砕身してまいります。
              </p>
              <p>今後とも何卒よろしくお願い申し上げます。</p>
            </div>
            <p className="mt-9 border-t border-clinic-100 pt-6 text-right text-lg font-bold text-clinic-600">
              くわばら整形外科 院長 桑原純太
            </p>
          </article>
        </div>
      </section>

      <section className="container-pad py-12">
        <h2 className="section-title">院内の紹介</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "受付",
              image: "/images/reception_room.jpg",
              alt: "くわばら整形外科の受付カウンター - 明るく清潔な受付エリア",
            },
            {
              title: "待合室",
              image: "/images/waiting_room.jpg",
              alt: "くわばら整形外科の待合室 - 患者様がくつろげる明るい待合スペース",
            },
          ].map((item) => (
            <article key={item.title} className="soft-card overflow-hidden p-5">
              <Image
                src={item.image}
                alt={item.alt}
                width={680}
                height={420}
                className="h-72 w-full rounded-[8px] object-cover"
              />
              <div className="p-4">
                <h3 className="mb-4 text-3xl font-bold text-clinic-600">
                  {item.title}
                </h3>
                <div className="mb-5 border-b border-dashed border-clinic-300" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
