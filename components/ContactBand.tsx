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
          <div className="mb-5 flex items-center gap-4 text-clinic-600">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-clinic-100">
              <PhoneCall className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold">
              お問い合わせ・ご予約
            </h2>
          </div>
          <p className="mb-7 text-slate-700">
            お電話でのご予約・お問い合わせを承っております
          </p>
          <a
            href="tel:+81-279-25-8855"
            className="mb-7 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-clinic-600 px-8 py-4 font-bold text-white shadow-lg shadow-clinic-600/20 transition hover:bg-clinic-700"
            aria-label="電話でご予約・お問い合わせ"
          >
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
            お電話でご予約・お問い合わせ
          </a>
          <p className="text-3xl font-bold tracking-widest text-clinic-600 sm:text-4xl">
            <span className="mr-3 text-base tracking-normal text-slate-500">
              TEL:
            </span>
            0279-25-8855
          </p>
        </div>
        {!compact && (
          <div className="relative min-h-72">
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
