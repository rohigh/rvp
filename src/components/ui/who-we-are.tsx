import { ArrowRight, MapPin } from "lucide-react";
import { pageHref, type Language } from "@/lib/navigation";

const content = {
  en: {
    eyebrow: "ROOTED IN TUMAKURU", heading: "Who We Are",
    intro: "Used oil. Renewed purpose.",
    body: "RVP Refinery is in Vasanthanarasapura Industrial Area, Tumakuru. We collect used engine oil and machine oil. We clean it at our plant and make base oil. This oil is used again, so it does not go to waste.",
    link: "Read more about us", since: "Working since", location: "Tumakuru, Karnataka",
    plant: "Our own plant", place: "Vasanthanarasapura Industrial Area",
    steps: ["Used oil", "Re-refining", "Base oil"],
    caption: "Stock image · For illustration",
    imageAlt: "Industrial refinery towers and pipework beneath a blue sky",
  },
  kn: {
    eyebrow: "ತುಮಕೂರಿನಲ್ಲಿ ನಮ್ಮ ನೆಲೆ", heading: "ನಾವು ಯಾರು",
    intro: "ಬಳಸಿದ ತೈಲಕ್ಕೆ ಹೊಸ ಉಪಯೋಗ.",
    body: "ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ತುಮಕೂರಿನ ವಸಂತನರಸಾಪುರ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶದಲ್ಲಿದೆ. ನಾವು ಬಳಸಿದ ಎಂಜಿನ್ ತೈಲ ಮತ್ತು ಯಂತ್ರದ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. ನಮ್ಮ ಘಟಕದಲ್ಲಿ ಅದನ್ನು ಶುದ್ಧೀಕರಿಸಿ ಬೇಸ್ ಆಯಿಲ್ ತಯಾರಿಸುತ್ತೇವೆ. ಈ ತೈಲ ಮತ್ತೆ ಬಳಕೆಯಾಗುತ್ತದೆ, ವ್ಯರ್ಥವಾಗುವುದಿಲ್ಲ.",
    link: "ನಮ್ಮ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ", since: "ಕಾರ್ಯಾರಂಭ", location: "ತುಮಕೂರು, ಕರ್ನಾಟಕ",
    plant: "ನಮ್ಮ ಸ್ವಂತ ಘಟಕ", place: "ವಸಂತನರಸಾಪುರ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ",
    steps: ["ಬಳಸಿದ ತೈಲ", "ಮರುಶುದ್ಧೀಕರಣ", "ಬೇಸ್ ಆಯಿಲ್"],
    caption: "ಪ್ರಾತಿನಿಧಿಕ ಚಿತ್ರ",
    imageAlt: "ನೀಲಿ ಆಕಾಶದ ಅಡಿಯಲ್ಲಿ ಕೈಗಾರಿಕಾ ಶುದ್ಧೀಕರಣ ಘಟಕದ ಗೋಪುರಗಳು ಮತ್ತು ಕೊಳವೆಗಳು",
  },
} as const;

export default function WhoWeAre({ language }: { language: Language }) {
  const copy = content[language];
  return (
    <section aria-labelledby="about-heading" className="border-t border-border/60 bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-14 lg:py-28">
        <figure className="min-w-0 overflow-hidden rounded-[24px] bg-[#092243] sm:rounded-[32px]">
          <div className="relative">
            <img
              src="/images/refinery-stock-1400.webp"
              srcSet="/images/refinery-stock-700.webp 700w, /images/refinery-stock-1400.webp 1400w"
              sizes="(min-width: 1440px) 624px, (min-width: 1024px) 45vw, 100vw"
              alt={copy.imageAlt}
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-[65%_center] lg:aspect-[5/4]"
            />
          </div>
        </figure>
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.12em] text-brand"><span aria-hidden="true" className="h-px w-8 bg-brand" />{copy.eyebrow}</p>
          <h2 id="about-heading" className="mt-5 text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">{copy.heading}</h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#092243] sm:text-lg sm:leading-9">{copy.body}</p>
          <div className="mt-8 flex items-start gap-4 rounded-xl bg-[#F4F7FA] p-5">
            <MapPin className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
            <div><p className="text-sm font-semibold text-foreground">{copy.location}</p><p className="mt-1 text-sm leading-7 text-[#092243]">{copy.plant} · {copy.place}</p></div>
          </div>
          <a href={pageHref(language, "about")} className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-md py-2 text-base font-semibold text-brand underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">{copy.link}<ArrowRight className="size-5 shrink-0" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
