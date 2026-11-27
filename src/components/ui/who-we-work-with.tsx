import { ArrowRight, Cog, Factory, FlaskConical, Truck, Warehouse, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { products } from "@/lib/products";
import { BentoGridShowcase } from "@/components/ui/bento-grid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pageHref, type Language } from "@/lib/navigation";

const content = {
 en: {
  eyebrow:"SUPPLIERS & BUYERS", heading:"Who We Work With", introduction:"From businesses with used oil to buyers of base oil and industrial heating fuels.",
  buy:"We Buy From", buyLabel:"USED OIL", sell:"We Sell To", sellLabel:"BASE OIL & FUELS",
  suppliers:["Garages and service centres","Transport companies and lorry owners","Factories and workshops","Machine owners"],
  buyers:["Lubricant oil makers","Oil traders and dealers","Factories with industrial heating equipment"],
  supplierPrompt:"Have used oil to sell?", supplierBody:"Tell us the oil type and quantity. We’ll discuss collection with you.", supplierLink:"Sell Used Oil", buyerLink:"Explore Products",
  buyerBody:"RRBO for lubricant oil makers. Furnace oil, LDO and DFO for compatible industrial heating equipment.",
  packing:"OUR PRODUCT RANGE", drum:"RRBO", tanker:"Furnace Oil · LDO · DFO", product:"Discuss the product, application, quantity and delivery location.",
  visualTitle:"Keeping oil in use.", visualCaption:"Collection. Re-refining. Reuse.", imageAlt:"Industrial metal pipes and processing equipment",
 },
 kn: {
  eyebrow:"ಪೂರೈಕೆದಾರರು ಮತ್ತು ಖರೀದಿದಾರರು", heading:"ನಾವು ಯಾರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ", introduction:"ಬಳಸಿದ ತೈಲವಿರುವ ಉದ್ಯಮಗಳಿಂದ ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ತಾಪನ ಇಂಧನಗಳ ಖರೀದಿದಾರರವರೆಗೆ.",
  buy:"ನಮ್ಮ ಪೂರೈಕೆದಾರರು", buyLabel:"ಬಳಸಿದ ತೈಲ", sell:"ನಮ್ಮ ಖರೀದಿದಾರರು", sellLabel:"ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತು ಇಂಧನಗಳು",
  suppliers:["ಗ್ಯಾರೇಜುಗಳು ಮತ್ತು ಸೇವಾ ಕೇಂದ್ರಗಳು","ಸಾರಿಗೆ ಕಂಪನಿಗಳು ಮತ್ತು ಲಾರಿ ಮಾಲೀಕರು","ಕಾರ್ಖಾನೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು","ಯಂತ್ರಗಳ ಮಾಲೀಕರು"],
  buyers:["ಲೂಬ್ರಿಕಂಟ್ ತೈಲ ತಯಾರಕರು","ತೈಲ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ವಿತರಕರು","ಕೈಗಾರಿಕಾ ತಾಪನ ಉಪಕರಣಗಳಿರುವ ಕಾರ್ಖಾನೆಗಳು"],
  supplierPrompt:"ಬಳಸಿದ ತೈಲ ಮಾರಾಟ ಮಾಡಬೇಕೇ?", supplierBody:"ತೈಲದ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ತಿಳಿಸಿ. ಸಂಗ್ರಹಣೆಯ ಬಗ್ಗೆ ನಿಮ್ಮೊಂದಿಗೆ ಚರ್ಚಿಸುತ್ತೇವೆ.", supplierLink:"ಬಳಸಿದ ತೈಲ ಮಾರಾಟ", buyerLink:"ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
  buyerBody:"ಲೂಬ್ರಿಕಂಟ್ ತೈಲ ತಯಾರಕರಿಗೆ RRBO. ಹೊಂದುವ ಕೈಗಾರಿಕಾ ತಾಪನ ಉಪಕರಣಗಳಿಗೆ ಫರ್ನೇಸ್ ಆಯಿಲ್, LDO ಮತ್ತು DFO.",
  packing:"ನಮ್ಮ ಉತ್ಪನ್ನಗಳ ಶ್ರೇಣಿ", drum:"RRBO", tanker:"ಫರ್ನೇಸ್ ಆಯಿಲ್ · LDO · DFO", product:"ಉತ್ಪನ್ನ, ಬಳಕೆ, ಪ್ರಮಾಣ ಮತ್ತು ವಿತರಣೆಯ ಸ್ಥಳವನ್ನು ಚರ್ಚಿಸಿ.",
  visualTitle:"ತೈಲದ ನಿರಂತರ ಮರುಬಳಕೆ.", visualCaption:"ಸಂಗ್ರಹಣೆ. ಮರುಶುದ್ಧೀಕರಣ. ಮರುಬಳಕೆ.", imageAlt:"ಕೈಗಾರಿಕಾ ಲೋಹದ ಕೊಳವೆಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಉಪಕರಣಗಳು",
 },
} as const;

function AudienceList({ items }: { items: readonly { label: string; icon: LucideIcon }[] }) {
  return <ul className="space-y-5">{items.map(({ label, icon: Icon }) => <li key={label} className="flex items-start gap-3 text-sm leading-7 text-[#092243]"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#F4F7FA]"><Icon className="size-[18px] text-brand" strokeWidth={1.6} aria-hidden="true" /></span><span className="min-w-0 pt-1">{label}</span></li>)}</ul>;
}

const cardClass = "h-full rounded-[24px] border-[#C8D7EA] bg-white shadow-none";

export default function WhoWeWorkWith({ language }: { language: Language }) {
  const copy = content[language];
  const supplierIcons = [Wrench, Truck, Factory, Cog];
  const supplierItems = copy.suppliers.map((label, index) => ({ label, icon: supplierIcons[index] }));
  const buyerIcons = [FlaskConical, Warehouse, Factory];

  return (
    <section aria-labelledby="audience-heading" className="bg-[#F4F7FA]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mb-10 max-w-3xl lg:mb-12">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.12em] text-brand"><span aria-hidden="true" className="h-px w-8 shrink-0 bg-brand" />{copy.eyebrow}</p>
          <h2 id="audience-heading" className="mt-5 text-4xl font-medium leading-snug tracking-tight text-foreground sm:text-5xl">{copy.heading}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#092243]">{copy.introduction}</p>
        </div>
        <BentoGridShowcase
          integrations={
            <Card className={cardClass}>
              <CardHeader className="gap-2"><p className="text-xs font-semibold tracking-[0.1em] text-brand">{copy.buyLabel}</p><CardTitle className="text-2xl font-medium leading-relaxed">{copy.buy}</CardTitle></CardHeader>
              <CardContent><AudienceList items={supplierItems.slice(0, 2)} /></CardContent>
            </Card>
          }
          secondaryFeature={
            <Card className={cardClass}><CardContent className="flex h-full items-center p-6"><AudienceList items={supplierItems.slice(2)} /></CardContent></Card>
          }
          journey={
            <Card className="flex h-full flex-col rounded-[24px] border-[#092243] bg-[#092243] p-6 text-white shadow-none">
              <h3 className="text-xl font-medium leading-relaxed">{copy.supplierPrompt}</h3>
              <p className="mb-6 mt-3 text-sm leading-7 text-[#C8D7EA]">{copy.supplierBody}</p>
              <Button asChild className="mt-auto h-auto min-h-11 w-fit max-w-full gap-3 whitespace-normal py-3 text-left leading-6"><a href={pageHref(language, "used-oil-collection")}>{copy.supplierLink}<ArrowRight aria-hidden="true" className="size-4 shrink-0" /></a></Button>
            </Card>
          }
          mainFeature={
            <Card className="relative min-h-[420px] overflow-hidden rounded-[24px] border-0 bg-[#092243] text-white shadow-none lg:h-full">
              <img src="/images/processing-stock.webp" alt={copy.imageAlt} width={1000} height={667} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#092243] via-[#092243]/10 to-[#092243]/30" />
              <div className="relative flex min-h-[420px] flex-col justify-between gap-32 p-7 lg:h-full">
                <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em]"><img src="/brand/rvp-symbol.png" alt="" aria-hidden="true" width={256} height={249} className="size-8 object-contain" />RVP REFINERY</span>
                <div><p className="text-3xl font-medium leading-snug">{copy.visualTitle}</p><p className="mt-4 text-sm leading-7 text-[#C8D7EA]">{copy.visualCaption}</p></div>
              </div>
            </Card>
          }
          featureTags={
            <Card className={cardClass}>
              <CardHeader className="gap-2"><p className="text-xs font-semibold tracking-[0.1em] text-brand">{copy.sellLabel}</p><CardTitle className="text-2xl font-medium leading-relaxed">{copy.sell}</CardTitle><CardDescription className="text-sm leading-7">{copy.buyerBody}</CardDescription></CardHeader>
              <CardContent className="flex flex-wrap gap-2">{products.map(product=><Badge key={product.id} variant="outline" className="border-[#C8D7EA] bg-[#F4F7FA] px-3 py-1.5 text-brand">{product.shortName[language]}</Badge>)}</CardContent>
            </Card>
          }
          statistic={
            <Card className={cardClass}>
              <CardContent className="flex h-full flex-col p-6">
                <AudienceList items={copy.buyers.map((label, index) => ({ label, icon: buyerIcons[index] }))} />
                <div className="mt-auto pt-8"><div className="border-t border-[#C8D7EA] pt-6"><p className="text-xs font-semibold tracking-[0.1em] text-brand">{copy.packing}</p><div className="mt-3 flex flex-wrap gap-2"><Badge variant="outline" className="border-[#C8D7EA] px-3 py-1.5 font-medium">{copy.drum}</Badge><Badge variant="outline" className="border-[#C8D7EA] px-3 py-1.5 font-medium">{copy.tanker}</Badge></div><p className="mt-5 text-sm leading-7 text-[#092243]">{copy.product}</p><a href={pageHref(language, "products")} className="mt-5 flex min-h-11 items-center justify-between gap-3 rounded-md text-sm font-semibold leading-7 text-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">{copy.buyerLink}<ArrowRight aria-hidden="true" className="size-5 shrink-0" /></a></div></div>
              </CardContent>
            </Card>
          }
        />
      </div>
    </section>
  );
}
