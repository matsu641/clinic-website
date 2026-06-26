import Image from "next/image";

type PageHeroProps = {
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ title, lead, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
      <div className="container-pad relative grid min-h-[360px] items-center gap-8 py-12 md:grid-cols-[0.85fr_1.15fr]">
        <div className="z-10">
          <h1 className="mb-6 text-5xl font-semibold leading-tight text-clinic-700 md:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="max-w-xl whitespace-pre-line text-lg font-medium leading-9 text-slate-700">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-bl-[90px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
