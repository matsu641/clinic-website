import type { Metadata } from "next";
import Image from "next/image";
import { AlertTriangle, Bath, CircleHelp, Hand, Phone, ShieldAlert, Sparkles, Undo2 } from "lucide-react";

export const metadata: Metadata = {
  title: "ギプス固定中の過ごし方 | くわばら整形外科",
  description:
    "ギプス固定中の注意事項、入浴方法、日常生活での過ごし方についてご案内します。",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/cast-care",
  },
};

const careImages = {
  footUp: "/cast-care/image1.png",
  handUp: "/cast-care/image2.JPG",
  icing: "/cast-care/image3.png",
  cotton: "/cast-care/image4.png",
  itching: "/cast-care/image5.png",
};

function CareBlock({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "warning";
}) {
  return (
    <section
      className={`soft-card p-6 sm:p-8 ${
        tone === "warning" ? "border-amber-200 bg-amber-50/80" : ""
      }`}
    >
      <h2
        className={`mb-5 flex items-center gap-3 text-2xl font-semibold leading-tight sm:text-3xl ${
          tone === "warning" ? "text-amber-800" : "text-clinic-700"
        }`}
      >
        {tone === "warning" && <AlertTriangle className="h-7 w-7 shrink-0" aria-hidden="true" />}
        {title}
      </h2>
      <div className="space-y-5 text-base font-medium leading-8 text-slate-700 sm:text-lg sm:leading-9">
        {children}
      </div>
    </section>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-[8px] border-l-4 border-clinic-300 bg-clinic-50 px-5 py-4 text-clinic-800">
      {children}
    </p>
  );
}

function CastImage({
  src,
  alt,
  crossed = false,
}: {
  src: string;
  alt: string;
  crossed?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-clinic-100 bg-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={520}
        className="h-auto w-full object-cover"
        sizes="(min-width: 768px) 45vw, 100vw"
      />
      {crossed && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/10">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-red-600/90 text-6xl font-bold leading-none text-white shadow-lg">
            ×
          </span>
        </div>
      )}
    </div>
  );
}

export default function CastCarePage() {
  return (
    <main>
      <section className="container-pad py-12 sm:py-16">
        <div className="mb-10 rounded-[8px] border border-clinic-100 bg-white/90 p-6 shadow-card sm:p-8">
          <p className="mb-3 text-sm font-bold tracking-[0.14em] text-clinic-500">
            CAST CARE
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-clinic-800 sm:text-5xl">
            ギプス固定中の過ごし方
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
            固定中の腫れ・痛みを強くしないための過ごし方と、受診が必要な症状についてご案内します。
          </p>
        </div>

        <div className="grid gap-7">
          <CareBlock title="ギプス固定当日">
            <div>
              <p>
                <strong>患肢（ギプスを固定している腕や足）を上げます。</strong>
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <CastImage src={careImages.footUp} alt="足を上げる" />
                <CastImage src={careImages.handUp} alt="手を上げる" />
              </div>
              <Note>手足を下げたままにすると、腫れや痛みが強くなることがあります。</Note>
            </div>

            <div className="grid gap-4 rounded-[8px] bg-white/80 p-5">
              <p>
                <strong>指先・足先はこまめに動かしてください。</strong>
              </p>
              <Note>指を動かすことで血行障害の予防になります。</Note>
            </div>

            <div>
              <p>
                <strong>
                  腫れや痛みが強い場合は、ギプスの上から冷却（アイシング）を行うと症状が和らぐことがあります。
                </strong>
              </p>
              <div className="mt-4 max-w-2xl">
                <CastImage src={careImages.icing} alt="ギプスの上からアイシング" />
              </div>
            </div>

            <p>
              <strong>医師から処方された鎮痛薬は指示どおり服用してください。</strong>
            </p>
          </CareBlock>

          <CareBlock title="注意事項" tone="warning">
            <div className="rounded-[8px] border border-amber-200 bg-white p-5">
              <p className="mb-3 font-bold text-amber-900">
                以下の症状がみられる場合は、早めに来院または当院までご連絡ください。
              </p>
              <ul className="grid gap-2 pl-5">
                <li className="list-disc">強いしびれが続く</li>
                <li className="list-disc">指先・足先の色が悪い（暗紫色になる）</li>
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[8px] bg-white p-5">
                <p>
                  <strong>固定当日の入浴はお控えください。</strong>
                </p>
                <p className="mt-2 text-slate-600">腫れや痛みが強くなる可能性があります。</p>
              </div>
              <div className="rounded-[8px] bg-white p-5">
                <p>
                  <strong>足にギプスを固定されている方へ</strong>
                </p>
                <p className="mt-2">
                  大きめの靴、またはギプスシューズ（当院にて販売）を着用してください。
                </p>
                <p className="mt-2 text-slate-600">
                  ギプスのまま直接歩行すると滑りやすく、転倒の原因となります。
                </p>
              </div>
            </div>
          </CareBlock>

          <CareBlock title="ギプス内部の綿について">
            <p>
              <strong>ギプスの中の綿は絶対に抜き取らないでください。</strong>
            </p>
            <div className="max-w-2xl">
              <CastImage src={careImages.cotton} alt="ギプス内部の綿" crossed />
            </div>
            <Note>
              固定が不十分になるほか、皮膚にギプスが直接当たり、傷や皮膚トラブルの原因となります。
            </Note>
          </CareBlock>

          <CareBlock title="ギプス内のかゆみについて">
            <p>
              <strong>
                ギプスの中がかゆくても、棒などを差し込んで掻くことはおやめください。
              </strong>
            </p>
            <div className="max-w-2xl">
              <CastImage src={careImages.itching} alt="ギプスの中を掻いてはいけない" crossed />
            </div>
            <Note>皮膚を傷つけ、感染や炎症の原因になります。</Note>
            <p>ギプスの上から冷却すると、かゆみが軽減する場合があります。</p>
            <Note>かゆみが強く続く場合は、医師にご相談ください。</Note>
          </CareBlock>

          <CareBlock title="ギプス固定2日目以降">
            <h3 className="flex items-center gap-3 text-xl font-semibold text-clinic-700">
              <Bath className="h-6 w-6" aria-hidden="true" />
              入浴について
            </h3>
            <p>
              <strong>入浴は可能ですが、ギプスは濡らさないよう十分ご注意ください。</strong>
            </p>
            <ul className="grid gap-3 rounded-[8px] bg-clinic-50 p-5">
              <li className="flex gap-3">
                <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-clinic-600" aria-hidden="true" />
                ビニール袋などで患部を覆うと濡れにくくなります
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-clinic-600" aria-hidden="true" />
                万一濡れた場合は、タオルで水分を吸い取り自然乾燥させてください
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                <strong>温風のドライヤーは使用しないでください</strong>（変形の原因となります）
              </li>
            </ul>
          </CareBlock>

          <CareBlock title="日常生活での注意点">
            <h3 className="flex items-center gap-3 text-xl font-semibold text-clinic-700">
              <Hand className="h-6 w-6" aria-hidden="true" />
              手のギプスの場合
            </h3>
            <div className="rounded-[8px] bg-white p-5">
              <p>痛みが強くならない範囲で、茶碗などの軽い物を持つことは可能です。</p>
              <p className="mt-2 font-bold text-clinic-800">
                重い物を持つ場合は、必ず医師の許可を得てください。
              </p>
            </div>

            <h3 className="flex items-center gap-3 text-xl font-semibold text-clinic-700">
              <Undo2 className="h-6 w-6" aria-hidden="true" />
              足のギプスの場合
            </h3>
            <div className="rounded-[8px] bg-white p-5">
              <p>
                <strong>体重をかけて歩く（荷重歩行）かどうかは、医師の指示に従ってください。</strong>
              </p>
            </div>

            <div className="rounded-[8px] border border-clinic-200 bg-clinic-50 p-5">
              <h3 className="mb-2 flex items-center gap-3 text-xl font-semibold text-clinic-700">
                <CircleHelp className="h-6 w-6" aria-hidden="true" />
                松葉杖の返却について
              </h3>
              <p>不要になった松葉杖は、受付・事務までご返却ください。</p>
              <p className="mt-2 text-slate-600">（返金手続きがございます）</p>
            </div>
          </CareBlock>

          <section className="rounded-[8px] border border-clinic-200 bg-clinic-700 p-6 text-white shadow-card sm:p-8">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold">
              <Phone className="h-6 w-6" aria-hidden="true" />
              症状が心配な場合
            </h2>
            <p className="text-lg leading-8 text-white/95">
              強い痛み、しびれ、指先・足先の色の変化などがある場合は、早めに当院までご連絡ください。
            </p>
            <a
              href="tel:+81-279-25-8855"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-[8px] bg-white px-6 py-4 text-base font-bold text-clinic-700 shadow-sm transition hover:bg-clinic-50"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              0279-25-8855
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
