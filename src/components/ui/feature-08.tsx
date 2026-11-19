import { useState } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pageHref, type Language } from "@/lib/navigation";

const content = {
  en: {
    eyebrow: "WHY RVP",
    heading: "Why Choose Us",
    introduction: "A local plant, clear dealings and a quick reply when you need us.",
    features: [
      { title: "Since 2018", description: "We have been doing this work since 2018." },
      { title: "Our Own Plant", description: "We collect and clean oil at our own plant in Tumakuru." },
      { title: "Fair and Clear", description: "Good rates and a GST bill for every deal." },
      { title: "Quick Reply", description: "Call or WhatsApp us. We reply fast." },
    ],
  },
  kn: {
    eyebrow: "ಆರ್‌ವಿಪಿ ಆಯ್ಕೆ",
    heading: "ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು",
    introduction: "ತುಮಕೂರಿನಲ್ಲಿ ನಮ್ಮ ಸ್ವಂತ ಘಟಕ, ಪಾರದರ್ಶಕ ವ್ಯವಹಾರ ಮತ್ತು ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ.",
    features: [
      { title: "2018ರಿಂದ", description: "ನಾವು 2018ರಿಂದ ಬಳಸಿದ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸಿ ಮರುಬಳಕೆಗೆ ತರುತ್ತಿದ್ದೇವೆ." },
      { title: "ನಮ್ಮ ಸ್ವಂತ ಘಟಕ", description: "ತುಮಕೂರಿನ ನಮ್ಮ ಸ್ವಂತ ಘಟಕದಲ್ಲಿ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸಿ ಶುದ್ಧೀಕರಿಸುತ್ತೇವೆ." },
      { title: "ನ್ಯಾಯಸಮ್ಮತ ವ್ಯವಹಾರ", description: "ನ್ಯಾಯವಾದ ದರಗಳು ಮತ್ತು ಪ್ರತಿ ವ್ಯವಹಾರಕ್ಕೂ ಜಿಎಸ್‌ಟಿ ಬಿಲ್.", },
      { title: "ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ", description: "ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ. ನಾವು ಶೀಘ್ರವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ." },
    ],
  },
} as const;

const cards = [
  { image: "/images/refinery-detail-stock.webp", position: "50% 50%", page: "about", frame: "#092243", surface: "#14509E", ink: "#FFFFFF", muted: "#FFFFFF" },
  { image: "/images/refinery-stock-700.webp", position: "60% 60%", page: "about", frame: "#C8D7EA", surface: "#F4F7FA", ink: "#121B26", muted: "#092243" },
  { image: "/images/clear-dealings-stock.jpg", position: "50% 55%", page: "used-oil-collection", frame: "#121B26", surface: "#092243", ink: "#FFFFFF", muted: "#C8D7EA" },
  { image: "/images/support-stock.jpg", position: "50% 50%", page: "contact", frame: "#C8D7EA", surface: "#FFFFFF", ink: "#121B26", muted: "#092243" },
] as const;

function RaisedTab({ fill }: { fill: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 360 64" preserveAspectRatio="none" className="pointer-events-none absolute -top-12 left-0 h-16 w-full">
      <path d="M0 64V26C0 11.64 11.64 0 26 0H74C92 0 97 26 119 26H334C348.36 26 360 37.64 360 52V64Z" fill={fill} />
    </svg>
  );
}

function FolderCard({ feature, index, language }: { feature: { readonly title: string; readonly description: string }; index: number; language: Language }) {
  const card = cards[index];
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const open = hovered || keyboardFocused;

  return (
    <a
      href={pageHref(language, card.page)}
      data-slot="reason-card"
      onPointerEnter={event => { if (event.pointerType === "mouse" || event.pointerType === "pen") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocus={event => setKeyboardFocused(event.currentTarget.matches(":focus-visible"))}
      onBlur={() => setKeyboardFocused(false)}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[32px] p-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      style={{ backgroundColor: card.frame, color: card.ink }}
    >
      <div className="relative flex min-h-[428px] flex-1 flex-col overflow-hidden rounded-[23px]" style={{ backgroundColor: card.surface }}>
        <div className="absolute inset-x-0 top-0 h-60 overflow-hidden">
          <img src={card.image} alt="" width={900} height={600} loading="lazy" decoding="async" className="size-full object-cover" style={{ objectPosition: card.position }} />
          <div aria-hidden="true" className="absolute inset-0 bg-[#092243]/10" />
        </div>
        <m.div
          data-slot="folder-front"
          className="absolute -bottom-28 left-0 right-0 top-28 z-10"
          style={{ backgroundColor: card.surface }}
          initial={false}
          animate={{ y: open ? 112 : 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 25, mass: 0.85 }}
        >
          <RaisedTab fill={card.surface} />
          <div className="absolute -top-6 left-5 right-5 flex items-center justify-between gap-4">
            <span aria-hidden="true" className="text-[52px] font-normal leading-none tracking-tight">{String(index + 1).padStart(2, "0")}</span>
            <ArrowUpRight aria-hidden="true" className="size-6 shrink-0" strokeWidth={1.7} />
          </div>
        </m.div>
        <div data-slot="reason-copy" className="relative z-20 mt-auto px-5 pb-6 pt-[320px]">
          <h3 className="text-lg font-medium leading-7">{feature.title}</h3>
          <p className="mt-2 text-sm leading-6" style={{ color: card.muted }}>{feature.description}</p>
        </div>
      </div>
    </a>
  );
}

export default function WhyChooseUs({ language }: { language: Language }) {
  const copy = content[language];
  return (
    <LazyMotion features={domAnimation}>
      <section aria-labelledby="why-rvp-heading" className="border-t border-[#C8D7EA]/60 bg-[#F4F7FA]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <p className="text-xs font-semibold leading-6 tracking-[0.12em] text-brand">{copy.eyebrow}</p>
            <h2 id="why-rvp-heading" className="mt-5 text-4xl font-medium leading-snug tracking-tight text-foreground sm:text-5xl">{copy.heading}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#092243] sm:text-lg">{copy.introduction}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {copy.features.map((feature, index) => <FolderCard key={index} feature={feature} index={index} language={language} />)}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
