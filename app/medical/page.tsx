import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { symptoms } from "@/lib/content";

export default function MedicalPage() {
  return (
    <main>
      <PageHero
        title="症状別案内"
        image="/images/clinic2.jpg"
        imageAlt="くわばら整形外科の診療室 - 体の再生と機能回復をサポート"
      />

      <section className="container-pad grid gap-7 py-16">
        {symptoms.map((symptom) => (
          <article
            key={symptom.title}
            className="soft-card grid gap-6 p-7 md:grid-cols-[210px_1fr] md:p-9"
          >
            <div className="flex flex-col items-center justify-center border-clinic-100 text-center md:border-r">
              <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-clinic-200 bg-white text-6xl shadow-sm">
                {symptom.icon}
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-clinic-700">
                {symptom.title}
              </h2>
            </div>
            <div>
              <p className="mb-6 rounded-[8px] bg-clinic-50 px-7 py-5 text-lg font-bold leading-9 text-slate-700">
                {symptom.quote}
              </p>
              <div className="space-y-5 text-base font-medium leading-9 text-slate-700">
                {symptom.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-pad">
        <div className="soft-card bg-gradient-to-r from-white to-clinic-50 p-8">
          <h2 className="mb-5 text-3xl font-semibold text-clinic-700">
            症状でお悩みの方へ
          </h2>
          <p className="text-lg leading-9 text-slate-700">
            上記の症状に心当たりがある方は、お気軽にご相談ください。早期の診断・治療が、症状の改善につながります。
          </p>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
