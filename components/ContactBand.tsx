import Image from "next/image";
import { PhoneCall } from "lucide-react";

type ContactBandProps = {
  compact?: boolean;
};

export function ContactBand({ compact = false }: ContactBandProps) {
  return (
    <section className="container-pad mt-16">
      <div className="soft-card grid overflow-hidden border-clinic-200 bg-gradient-to-r from-white via-white to-clinic-50 md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <div className="mb-5 flex items-center gap-3 text-clinic-600 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clinic-100 sm:h-14 sm:w-14">
              <PhoneCall className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              <span className="block whitespace-nowrap">お問い合わせ</span>
              <span className="block whitespace-nowrap">ご予約</span>
            </h2>
          </div>
          <p className="mb-7 text-slate-700">
            お電話でのご予約・お問い合わせを承っております
          </p>
          <a
            href="tel:+81-279-25-8855"
            className="mb-7 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-clinic-600 px-6 py-4 text-center text-sm font-bold leading-snug text-white shadow-lg shadow-clinic-600/20 transition hover:bg-clinic-700 sm:px-8 sm:text-base"
            aria-label="電話でご予約・お問い合わせ"
          >
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
            お電話でご予約・お問い合わせ
          </a>
          <p className="flex flex-col items-start gap-1 font-bold text-clinic-600 sm:block">
            <span className="text-base tracking-normal text-slate-500 sm:mr-3">
              TEL:
            </span>
            <span className="whitespace-nowrap text-[clamp(2rem,10vw,2.5rem)] leading-none tracking-[0.08em] sm:text-4xl sm:tracking-widest">
              0279-25-8855
            </span>
          </p>
        </div>
        {!compact && (
          <div className="image-bright-layer relative min-h-72">
            <Image
              src="/images/reception.png"
              alt="お電話でのご予約・お問い合わせ"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
