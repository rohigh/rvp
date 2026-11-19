import { ArrowRight, Droplets, Factory, Truck } from "lucide-react";
import { pageHref, type Language } from "@/lib/navigation";

const content = {
  en: {
    eyebrow: "OUR WORK",
    heading: "What We Do",
    description: "From collecting used oil to making it useful again. One journey, handled at our own plant in Tumakuru.",
    cards: [
      {
        category: "COLLECTION",
        title: "We Buy Used Oil",
        body: "We buy used oil from garages, transport companies and factories. We come and pick it up.",
        link: "Sell your used oil",
        alt: "Mechanic working on a vehicle engine in a workshop",
      },
      {
        category: "RE-REFINING",
        title: "We Clean It",
        body: "At our plant, we remove water, dirt and waste from the oil, turning it into base oil that can be used again.",
        link: "See our plant",
        alt: "Metal pipework and processing equipment inside an industrial facility",
      },
      {
        category: "BASE OIL",
        title: "We Sell Base Oil",
        body: "We sell the clean oil to oil makers, traders and factories, in drums or tankers.",
        link: "See our products",
        alt: "Large industrial oil storage tanks beneath a clear sky",
      },
    ],
  },
  kn: {
    eyebrow: "ನಮ್ಮ ಕೆಲಸ",
    heading: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
    description: "ಬಳಸಿದ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸುವುದರಿಂದ ಹಿಡಿದು ಮತ್ತೆ ಉಪಯುಕ್ತವಾಗಿಸುವವರೆಗೆ. ತುಮಕೂರಿನ ನಮ್ಮ ಸ್ವಂತ ಘಟಕದಲ್ಲಿ ನಡೆಯುವ ಪ್ರಕ್ರಿಯೆ.",
    cards: [
      {
        category: "ಸಂಗ್ರಹಣೆ",
        title: "ಬಳಸಿದ ತೈಲ ಖರೀದಿ",
        body: "ನಾವು ಗ್ಯಾರೇಜುಗಳು, ಸಾರಿಗೆ ಕಂಪನಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಂದ ಬಳಸಿದ ತೈಲವನ್ನು ಖರೀದಿಸುತ್ತೇವೆ. ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಬಂದು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.",
        link: "ನಿಮ್ಮ ಬಳಸಿದ ತೈಲವನ್ನು ಮಾರಿ",
        alt: "ಕಾರ್ಯಾಗಾರದಲ್ಲಿ ವಾಹನದ ಎಂಜಿನ್ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಮೆಕ್ಯಾನಿಕ್",
      },
      {
        category: "ಮರುಶುದ್ಧೀಕರಣ",
        title: "ತೈಲ ಶುದ್ಧೀಕರಣ",
        body: "ನಮ್ಮ ಘಟಕದಲ್ಲಿ ತೈಲದಲ್ಲಿರುವ ನೀರು, ಕೊಳಕು ಮತ್ತು ತ್ಯಾಜ್ಯವನ್ನು ತೆಗೆದುಹಾಕುತ್ತೇವೆ. ಅದನ್ನು ಮತ್ತೆ ಬಳಸಬಹುದಾದ ಬೇಸ್ ಆಯಿಲ್ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತೇವೆ.",
        link: "ನಮ್ಮ ಘಟಕದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
        alt: "ಕೈಗಾರಿಕಾ ಘಟಕದ ಒಳಗಿನ ಲೋಹದ ಕೊಳವೆಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಉಪಕರಣಗಳು",
      },
      {
        category: "ಬೇಸ್ ಆಯಿಲ್",
        title: "ಬೇಸ್ ಆಯಿಲ್ ಮಾರಾಟ",
        body: "ಶುದ್ಧೀಕರಿಸಿದ ತೈಲವನ್ನು ತೈಲ ತಯಾರಕರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಗೆ ಡ್ರಮ್‌ಗಳು ಅಥವಾ ಟ್ಯಾಂಕರ್‌ಗಳಲ್ಲಿ ಮಾರಾಟ ಮಾಡುತ್ತೇವೆ.",
        link: "ನಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
        alt: "ನಿರ್ಮಲ ಆಕಾಶದ ಕೆಳಗೆ ದೊಡ್ಡ ಕೈಗಾರಿಕಾ ತೈಲ ಸಂಗ್ರಹ ಟ್ಯಾಂಕ್‌ಗಳು",
      },
    ],
  },
} as const;

const services = [
  { image: "/images/workshop-stock.jpg", icon: Truck, page: "used-oil-collection" },
  { image: "/images/processing-stock.webp", icon: Factory, page: "about" },
  { image: "/images/storage-stock.webp", icon: Droplets, page: "products" },
] as const;

export default function WhatWeDo({ language }: { language: Language }) {
  const copy = content[language];

  return (
    <section aria-labelledby="services-heading" className="border-t border-border/60 bg-[#F4F7FA]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.12em] text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              {copy.eyebrow}
            </p>
            <h2 id="services-heading" className="mt-5 text-4xl font-medium leading-snug tracking-tight text-foreground sm:text-5xl">
              {copy.heading}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-[#092243]">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
          {copy.cards.map((card, index) => {
            const service = services[index];
            const Icon = service.icon;

            return (
              <article key={service.page} className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#C8D7EA] bg-white">
                <div className="relative overflow-hidden bg-[#C8D7EA]">
                  <img
                    src={service.image}
                    alt={card.alt}
                    width={1000}
                    height={667}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white px-3 py-1.5 text-xs font-semibold leading-6 tracking-wide text-[#092243]">
                    {String(index + 1).padStart(2, "0")} / {card.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-7 lg:px-7 lg:pb-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-medium leading-relaxed text-foreground">{card.title}</h3>
                    <Icon aria-hidden="true" className="mt-2 size-6 shrink-0 text-brand" strokeWidth={1.5} />
                  </div>
                  <p className="mb-6 mt-4 text-base leading-8 text-[#092243]">{card.body}</p>
                  <a
                    href={pageHref(language, service.page)}
                    className="mt-auto flex min-h-12 items-center justify-between gap-3 rounded-md border-t border-border pt-5 text-sm font-semibold leading-7 text-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {card.link}
                    <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
