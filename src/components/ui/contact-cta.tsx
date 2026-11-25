import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import DottedHoverBackground from "@/components/ui/dotted-hover-background";
import { Button } from "@/components/ui/button";
import { pageHref, type Language } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { company, tx, whatsappHref } from "@/lib/company";

const content = {
  en: {
    eyebrow: "TALK TO RVP",
    heading: ["Have Used Oil?", "Need Base Oil?"],
    body: "Tell us the oil type and quantity, or ask us for a base oil quote.",
    sell: "Sell Used Oil", buy: "Buy Base Oil",
  },
  kn: {
    eyebrow: "ಆರ್‌ವಿಪಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
    heading: ["ಬಳಸಿದ ತೈಲವಿದೆಯೇ?", "ಬೇಸ್ ಆಯಿಲ್ ಬೇಕೇ?"],
    body: "ತೈಲದ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ತಿಳಿಸಿ, ಅಥವಾ ಬೇಸ್ ಆಯಿಲ್ ದರಕ್ಕಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    sell: "ಬಳಸಿದ ತೈಲ ಮಾರಾಟ", buy: "ಬೇಸ್ ಆಯಿಲ್ ಖರೀದಿ",
  },
} as const;

export default function ContactCta({ language }: { language: Language }) {
  const copy = content[language];
  return (
    <section aria-labelledby="contact-cta-heading" className="bg-[#092243] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="relative mx-auto max-w-[1328px] overflow-hidden rounded-[28px] bg-white sm:rounded-[40px]">
        <DottedHoverBackground />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/60 md:via-white/65 md:to-transparent" />
        <div className="relative z-10 max-w-3xl px-7 py-12 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold leading-6 tracking-[0.14em] text-[#092243]">{copy.eyebrow}</p>
          <h2 id="contact-cta-heading" className={cn("mt-6 font-medium text-[#121B26]", language === "kn" ? "text-3xl leading-relaxed sm:text-4xl lg:text-5xl" : "text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-[64px]")}>
            {copy.heading.map(line => <span key={line} className="block">{line}</span>)}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[#092243] sm:text-lg">{copy.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-auto min-h-12 max-w-full gap-3 whitespace-normal rounded-full px-6 py-3 text-left leading-7"><a href={pageHref(language, "used-oil-collection")}>{copy.sell}<ArrowUpRight aria-hidden="true" className="size-5 shrink-0" /></a></Button>
            <Button asChild variant="outline" className="h-auto min-h-12 max-w-full gap-3 whitespace-normal rounded-full border-[#092243]/25 bg-white px-6 py-3 text-left leading-7 text-[#092243]"><a href={pageHref(language, "products")}>{copy.buy}<ArrowUpRight aria-hidden="true" className="size-5 shrink-0" /></a></Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#092243]">
            {company.phone && <a href={`tel:${company.phone}`} className="inline-flex min-h-11 items-center gap-2 underline decoration-[#092243]/30 underline-offset-4 transition-colors hover:text-[#14509E] focus-visible:outline-2 focus-visible:outline-offset-4"><Phone aria-hidden="true" className="size-4 shrink-0" />{tx(language, "Call", "ಕರೆ ಮಾಡಿ")} {company.phoneDisplay}</a>}
            {company.whatsapp && <a href={whatsappHref()} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 underline decoration-[#092243]/30 underline-offset-4 transition-colors hover:text-[#14509E] focus-visible:outline-2 focus-visible:outline-offset-4"><MessageCircle aria-hidden="true" className="size-4 shrink-0" />{tx(language, "WhatsApp us", "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ")}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
