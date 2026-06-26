import Image from "next/image";
import { CheckCircle2, Clock3 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  devices,
  rehabCharacteristics,
  staffFeatures,
} from "@/lib/content";

export default function RehabPage() {
  return (
    <main>
      <PageHero
        title="リハビリ治療"
        image="/images/rehab.jpg"
        imageAlt="くわばら整形外科のリハビリ室 - 最新のリハビリ機器を完備"
      />

      <section className="container-pad py-14">
        <h2 className="section-title">リハビリ室の概要</h2>
        <div className="space-y-5 text-base font-medium leading-9 text-slate-700">
          <p>
            リハビリ室では、日常生活・スポーツ中の怪我や障害、交通事故後の症状に対して運動療法を行い、状態の改善に努めています。
          </p>
          <p>
            当院では、<strong>理学療法士2名・柔道整復師1名、計3名</strong>
            のスタッフが在籍しており、専門スキルと技術で対応しています。
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {staffFeatures.map(({ icon: Icon, title, body }) => (
            <article key={title} className="soft-card p-8 text-center">
              <Icon className="mx-auto mb-5 h-14 w-14 text-clinic-500" />
              <h3 className="mb-4 text-xl font-bold text-clinic-600">{title}</h3>
              <p className="text-sm font-medium leading-8 text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad py-8">
        <h2 className="section-title">リハビリテーションの特徴</h2>
        <div className="space-y-4">
          {rehabCharacteristics.map((item) => (
            <p key={item} className="flex gap-3 text-base font-medium leading-8 text-slate-700">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-clinic-400" />
              {item}
            </p>
          ))}
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["/images/rehab1.png", "/images/rehab2.png", "/images/rehab3.png", "/images/rehab4.png"].map(
            (src) => (
              <Image
                key={src}
                src={src}
                alt="リハビリテーションの様子"
                width={360}
                height={220}
                className="h-44 w-full rounded-[8px] object-cover shadow-card"
              />
            ),
          )}
        </div>
      </section>

      <section className="container-pad py-10">
        <div className="rounded-[8px] bg-gradient-to-r from-clinic-500 to-clinic-400 p-8 text-white shadow-soft md:p-10">
          <div className="mb-5 flex items-center gap-4">
            <Clock3 className="h-10 w-10" />
            <h2 className="text-3xl font-bold">40分運動器療法</h2>
          </div>
          <p className="mb-5 font-medium leading-9">
            <strong>担当制のマンツーマン</strong>
            で実施し、痛みや痺れなどの原因を追究し根本治療を目的とした
            リハビリとなります。
          </p>
          <p className="rounded-[8px] bg-white/18 p-5 font-medium leading-8">
            <strong>※ 専門スタッフによる運動療法は予約制で行っています。</strong>
            <br />
            ご希望の方はスタッフまでお申しつけ下さい。
          </p>
        </div>
      </section>

      <section className="container-pad py-12">
        <h2 className="section-title">リハビリで使用する医療機器と適応症状</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {devices.map((device) => (
            <article key={device.title} className="soft-card overflow-hidden p-5">
              <h3 className="mb-4 text-center text-xl font-bold text-slate-700">
                {device.title}
              </h3>
              <Image
                src={device.image}
                alt={device.title}
                width={420}
                height={260}
                className="h-56 w-full rounded-[8px] bg-white object-contain sm:h-60"
              />
              <p className="mt-4 text-sm font-medium leading-7 text-slate-700">
                {device.body}
              </p>
              <div className="mt-5 rounded-[8px] bg-clinic-50 p-4">
                <p className="mb-2 font-bold text-clinic-700">適応症状:</p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                  {device.symptoms.map((symptom) => (
                    <li key={symptom}>{symptom}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad space-y-4">
        <p className="soft-card p-5 text-sm font-medium text-clinic-700">
          ※ どの治療が適しているかは、診察の上で決定します。気になる症状があればご相談ください。
        </p>
        <p className="soft-card p-5 text-sm font-medium text-clinic-700">
          ※ また当院では理学療法士学生の実習を受け入れております。患者様にはご理解とご協力をお願い申し上げます。
        </p>
      </section>
    </main>
  );
}
