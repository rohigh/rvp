import { Banknote, CheckCircle2, ClipboardList, Droplets, Factory, FileCheck2, MessageCircle, Recycle, Truck, Wrench } from "lucide-react";
import type { Language } from "@/lib/navigation";
import { pageHref } from "@/lib/navigation";
import { tx } from "@/lib/company";
import { CheckList, Faq, FeatureCard, LinkButton, PageFrame, PageHero, Reveal, SectionHeading, Steps } from "@/components/site/shared";
import EnquiryForm from "@/components/site/enquiry-form";

export default function CollectionPage({language:l}:{language:Language}){
 const formHref=pageHref(l,"used-oil-collection","pickup-form");
 return <PageFrame>
  <PageHero language={l} eyebrow={tx(l,"USED OIL COLLECTION","ಬಳಸಿದ ತೈಲ ಸಂಗ್ರಹಣೆ")} title={tx(l,"Sell Your Used Oil to Us","ನಿಮ್ಮ ಬಳಸಿದ ತೈಲವನ್ನು ನಮಗೆ ಮಾರಾಟ ಮಾಡಿ")} body={tx(l,"Garages, transport companies and factories — we buy your used oil and arrange collection with you.","ಗ್ಯಾರೇಜುಗಳು, ಸಾರಿಗೆ ಕಂಪನಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳು — ನಿಮ್ಮ ಬಳಸಿದ ತೈಲವನ್ನು ಖರೀದಿಸಿ, ಸಂಗ್ರಹಣೆಯ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿಮ್ಮೊಂದಿಗೆ ಚರ್ಚಿಸುತ್ತೇವೆ.")} image="/images/workshop-stock.jpg" imageAlt={tx(l,"Mechanic working on a vehicle in a workshop","ಕಾರ್ಯಾಗಾರದಲ್ಲಿ ವಾಹನದ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಮೆಕ್ಯಾನಿಕ್")} tag={tx(l,"From your workshop. Back into use.","ನಿಮ್ಮ ಕಾರ್ಯಾಗಾರದಿಂದ ಮರುಬಳಕೆಯತ್ತ.")}>
   <LinkButton href={formHref}>{tx(l,"Request Pickup","ಸಂಗ್ರಹಣೆಗಾಗಿ ವಿಚಾರಿಸಿ")}</LinkButton><LinkButton href={pageHref(l,"used-oil-collection","oil-types")} outline>{tx(l,"Tell us about your oil","ನಿಮ್ಮ ತೈಲದ ಬಗ್ಗೆ ತಿಳಿಸಿ")}</LinkButton>
  </PageHero>
  <section className="site-section navy"><div className="page-shell split-editorial">
   <SectionHeading light eyebrow={tx(l,"A BETTER NEXT STEP","ಉತ್ತಮ ಮುಂದಿನ ಹೆಜ್ಜೆ")} title={tx(l,"Your used oil still has a purpose.","ನಿಮ್ಮ ಬಳಸಿದ ತೈಲ ಇನ್ನೂ ಉಪಯುಕ್ತವಾಗಿದೆ.")} body={tx(l,"Do not throw it away or burn it. We collect used oil and clean it at our own plant, so it can become base oil again.","ತೈಲವನ್ನು ಎಸೆಯಬೇಡಿ ಅಥವಾ ಸುಡಬೇಡಿ. ಬಳಸಿದ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸಿ ನಮ್ಮ ಸ್ವಂತ ಘಟಕದಲ್ಲಿ ಶುದ್ಧೀಕರಿಸುತ್ತೇವೆ. ಅದು ಮತ್ತೆ ಬೇಸ್ ಆಯಿಲ್ ಆಗುತ್ತದೆ.")}/>
   <div className="detail-rows">{[
    {icon:Banknote,title:tx(l,"A price for your oil","ನಿಮ್ಮ ತೈಲಕ್ಕೆ ದರ"),body:tx(l,"The price depends on the oil type and quantity. Tell us what you have so we can discuss the rate.","ತೈಲದ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರಮಾಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ದರ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮಲ್ಲಿರುವ ತೈಲದ ವಿವರ ತಿಳಿಸಿ.")},
    {icon:Truck,title:tx(l,"Collection, agreed with you","ನಿಮ್ಮೊಂದಿಗೆ ಚರ್ಚಿಸಿ ಸಂಗ್ರಹಣೆ"),body:tx(l,"Share your pickup location. We will confirm availability and agree on a collection date.","ಸಂಗ್ರಹಣೆಯ ಸ್ಥಳವನ್ನು ತಿಳಿಸಿ. ಲಭ್ಯತೆಯನ್ನು ಖಚಿತಪಡಿಸಿ ದಿನಾಂಕವನ್ನು ನಿಮ್ಮೊಂದಿಗೆ ನಿರ್ಧರಿಸುತ್ತೇವೆ.")},
    {icon:FileCheck2,title:tx(l,"A proper GST bill","ಸರಿಯಾದ ಜಿಎಸ್‌ಟಿ ಬಿಲ್"),body:tx(l,"Clear dealings, with a GST bill for every transaction.","ಪಾರದರ್ಶಕ ವ್ಯವಹಾರ ಮತ್ತು ಪ್ರತಿ ವ್ಯವಹಾರಕ್ಕೂ ಜಿಎಸ್‌ಟಿ ಬಿಲ್.")},
    {icon:Recycle,title:tx(l,"Oil is put back to use","ತೈಲ ಮತ್ತೆ ಬಳಕೆಗೆ"),body:tx(l,"We remove water, dirt and waste to turn used oil into base oil.","ನೀರು, ಕೊಳಕು ಮತ್ತು ತ್ಯಾಜ್ಯವನ್ನು ತೆಗೆದುಹಾಕಿ ಬಳಸಿದ ತೈಲವನ್ನು ಬೇಸ್ ಆಯಿಲ್ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತೇವೆ.")},
   ].map(({icon:Icon,title,body})=><Reveal key={title} className="detail-row"><Icon size={30} strokeWidth={1.5} aria-hidden="true"/><div><h3>{title}</h3><p>{body}</p></div></Reveal>)}</div>
  </div></section>
  <section id="oil-types" className="site-section"><div className="page-shell">
   <SectionHeading eyebrow={tx(l,"TELL US WHAT YOU HAVE","ನಿಮ್ಮಲ್ಲಿರುವ ತೈಲದ ವಿವರ")} title={tx(l,"Used oil. A new starting point.","ಬಳಸಿದ ತೈಲಕ್ಕೆ ಹೊಸ ಆರಂಭ.")} body={tx(l,"We collect used engine oil and machine oil. Share the source and condition of your oil before arranging a pickup.","ನಾವು ಬಳಸಿದ ಎಂಜಿನ್ ತೈಲ ಮತ್ತು ಯಂತ್ರದ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. ಸಂಗ್ರಹಣೆಗೆ ಮೊದಲು ಅದರ ಮೂಲ ಮತ್ತು ಸ್ಥಿತಿಯನ್ನು ತಿಳಿಸಿ.")}/>
   <div className="grid-2"><Reveal className="oil-types"><Droplets aria-hidden="true"/><div><h3>{tx(l,"Engine oil","ಎಂಜಿನ್ ತೈಲ")}</h3><p>{tx(l,"From garages, vehicle service centres, transport fleets and lorry owners.","ಗ್ಯಾರೇಜುಗಳು, ವಾಹನ ಸೇವಾ ಕೇಂದ್ರಗಳು, ಸಾರಿಗೆ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಲಾರಿ ಮಾಲೀಕರಿಂದ.")}</p></div></Reveal><Reveal className="oil-types"><Factory aria-hidden="true"/><div><h3>{tx(l,"Machine oil","ಯಂತ್ರದ ತೈಲ")}</h3><p>{tx(l,"From factories, workshops and machine owners. Tell us the equipment and oil type.","ಕಾರ್ಖಾನೆಗಳು, ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಯಂತ್ರಗಳ ಮಾಲೀಕರಿಂದ. ಉಪಕರಣ ಮತ್ತು ತೈಲದ ಪ್ರಕಾರ ತಿಳಿಸಿ.")}</p></div></Reveal></div>
   <div className="site-note"><p>{tx(l,"Have gear, hydraulic, compressor, turbine or mixed oil? Ask us to confirm whether we can take it. Keep cooking oil, coolant, paint, thinner and mixed chemicals separate.","ಗೇರ್, ಹೈಡ್ರಾಲಿಕ್, ಕಂಪ್ರೆಸರ್, ಟರ್ಬೈನ್ ಅಥವಾ ಮಿಶ್ರ ತೈಲವಿದೆಯೇ? ಸ್ವೀಕರಿಸಬಹುದೇ ಎಂದು ಮೊದಲು ವಿಚಾರಿಸಿ. ಅಡುಗೆ ಎಣ್ಣೆ, ಕೂಲಂಟ್, ಬಣ್ಣ, ಥಿನ್ನರ್ ಮತ್ತು ಮಿಶ್ರ ರಾಸಾಯನಿಕಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಡಿ.")}</p></div>
  </div></section>
  <section className="site-section cloud"><div className="page-shell"><SectionHeading eyebrow={tx(l,"BUSINESSES WE BUY FROM","ನಮ್ಮ ಪೂರೈಕೆದಾರರು")} title={tx(l,"From a single workshop to a factory.","ಕಾರ್ಯಾಗಾರದಿಂದ ಕಾರ್ಖಾನೆಯವರೆಗೆ.")}/>
   <div className="grid-4">{[{icon:Wrench,title:tx(l,"Garages & service centres","ಗ್ಯಾರೇಜುಗಳು ಮತ್ತು ಸೇವಾ ಕೇಂದ್ರಗಳು"),body:tx(l,"Used oil from everyday vehicle servicing.","ವಾಹನ ಸೇವೆಯ ಬಳಿಕ ಉಳಿಯುವ ಬಳಸಿದ ತೈಲ.")},{icon:Truck,title:tx(l,"Transport & lorry owners","ಸಾರಿಗೆ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಲಾರಿ ಮಾಲೀಕರು"),body:tx(l,"Oil collected during fleet maintenance.","ವಾಹನ ನಿರ್ವಹಣೆಯ ಸಮಯದಲ್ಲಿ ಸಂಗ್ರಹವಾಗುವ ತೈಲ.")},{icon:Factory,title:tx(l,"Factories & workshops","ಕಾರ್ಖಾನೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು"),body:tx(l,"Used oil from your machines and operations.","ಯಂತ್ರಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳಿಂದ ಬಳಸಿದ ತೈಲ.")},{icon:Droplets,title:tx(l,"Machine owners","ಯಂತ್ರಗಳ ಮಾಲೀಕರು"),body:tx(l,"Tell us your oil type, quantity and location.","ತೈಲದ ಪ್ರಕಾರ, ಪ್ರಮಾಣ ಮತ್ತು ಸ್ಥಳವನ್ನು ತಿಳಿಸಿ.")}].map(item=><FeatureCard key={item.title} icon={item.icon} title={item.title}>{item.body}</FeatureCard>)}</div>
  </div></section>
  <section className="site-section"><div className="page-shell"><SectionHeading eyebrow={tx(l,"HOW COLLECTION WORKS","ಸಂಗ್ರಹಣೆ ಹೇಗೆ ನಡೆಯುತ್ತದೆ")} title={tx(l,"Simple steps. Clear dealings.","ಸರಳ ಹಂತಗಳು. ಪಾರದರ್ಶಕ ವ್ಯವಹಾರ.")}/>
   <Steps language={l} items={[
    {icon:MessageCircle,title:tx(l,"Tell us","ನಮಗೆ ತಿಳಿಸಿ"),body:tx(l,"Share the oil type, quantity and pickup location.","ತೈಲದ ಪ್ರಕಾರ, ಪ್ರಮಾಣ ಮತ್ತು ಸಂಗ್ರಹಣೆಯ ಸ್ಥಳ ತಿಳಿಸಿ.")},
    {icon:ClipboardList,title:tx(l,"Agree the details","ವಿವರಗಳನ್ನು ನಿರ್ಧರಿಸಿ"),body:tx(l,"Discuss the price, collection date and suitable handling arrangements.","ದರ, ಸಂಗ್ರಹಣೆಯ ದಿನಾಂಕ ಮತ್ತು ಸೂಕ್ತ ವ್ಯವಸ್ಥೆಯನ್ನು ಚರ್ಚಿಸಿ.")},
    {icon:Truck,title:tx(l,"We collect","ನಾವು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ"),body:tx(l,"Our vehicle comes to the agreed collection point.","ನಿಗದಿತ ಸಂಗ್ರಹಣೆಯ ಸ್ಥಳಕ್ಕೆ ನಮ್ಮ ವಾಹನ ಬರುತ್ತದೆ.")},
    {icon:CheckCircle2,title:tx(l,"Payment & GST bill","ಪಾವತಿ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ಬಿಲ್"),body:tx(l,"We pay you and provide a GST bill.","ನಾವು ಪಾವತಿಸಿ ಜಿಎಸ್‌ಟಿ ಬಿಲ್ ನೀಡುತ್ತೇವೆ.")},
   ]}/>
   <div className="site-note"><p>{tx(l,"Pickup quantity, service area and collection charges are confirmed when we discuss your enquiry. Share your district and estimated volume so we can advise.","ಕನಿಷ್ಠ ಪ್ರಮಾಣ, ಸಂಗ್ರಹಣೆಯ ಪ್ರದೇಶ ಮತ್ತು ಶುಲ್ಕವನ್ನು ವಿಚಾರಣೆಯ ವೇಳೆ ಖಚಿತಪಡಿಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಜಿಲ್ಲೆ ಮತ್ತು ಅಂದಾಜು ಪ್ರಮಾಣವನ್ನು ತಿಳಿಸಿ.")}</p></div>
  </div></section>
  <section id="pickup-form" className="form-section"><div className="page-shell form-layout"><div className="form-aside"><SectionHeading eyebrow={tx(l,"START HERE","ಇಲ್ಲಿಂದ ಆರಂಭಿಸಿ")} title={tx(l,"Sell your used oil.","ನಿಮ್ಮ ಬಳಸಿದ ತೈಲವನ್ನು ಮಾರಿ.")} body={tx(l,"A few details help us understand your oil and discuss collection.","ಕೆಲವು ವಿವರಗಳು ನಿಮ್ಮ ತೈಲದ ಬಗ್ಗೆ ತಿಳಿದು ಸಂಗ್ರಹಣೆಯನ್ನು ಚರ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.")}/><CheckList items={[tx(l,"Tell us the type and approximate quantity.","ಪ್ರಕಾರ ಮತ್ತು ಅಂದಾಜು ಪ್ರಮಾಣ ತಿಳಿಸಿ."),tx(l,"Include your town or district.","ನಿಮ್ಮ ಪಟ್ಟಣ ಅಥವಾ ಜಿಲ್ಲೆಯನ್ನು ತಿಳಿಸಿ."),tx(l,"Photos are helpful, but optional.","ಚಿತ್ರಗಳು ಸಹಾಯಕ; ಆದರೆ ಕಡ್ಡಾಯವಲ್ಲ.")]}/><img src="/images/refinery-detail-stock.webp" alt={tx(l,"Industrial refinery equipment","ಕೈಗಾರಿಕಾ ಶುದ್ಧೀಕರಣ ಉಪಕರಣಗಳು")} width={900} height={600} loading="lazy"/></div><EnquiryForm kind="pickup" language={l}/></div></section>
  <section className="site-section"><div className="page-shell"><SectionHeading eyebrow={tx(l,"COMMON QUESTIONS","ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು")} title={tx(l,"Before we pick up.","ಸಂಗ್ರಹಣೆಗೆ ಮೊದಲು.")}/><Faq items={[
   {question:tx(l,"Do you pay for used oil?","ಬಳಸಿದ ತೈಲಕ್ಕೆ ಹಣ ಕೊಡುತ್ತೀರಾ?"),answer:tx(l,"Yes. The price depends on the type, quantity and condition of the oil. Share the details so we can discuss a rate.","ಹೌದು. ತೈಲದ ಪ್ರಕಾರ, ಪ್ರಮಾಣ ಮತ್ತು ಸ್ಥಿತಿಗೆ ಅನುಗುಣವಾಗಿ ದರ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ. ದರ ಚರ್ಚಿಸಲು ವಿವರ ತಿಳಿಸಿ.")},
   {question:tx(l,"Is pickup free?","ಸಂಗ್ರಹಣೆ ಉಚಿತವೇ?"),answer:tx(l,"Collection arrangements and any charges need to be confirmed for your location and quantity before the pickup is agreed.","ನಿಮ್ಮ ಸ್ಥಳ ಮತ್ತು ಪ್ರಮಾಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಂಗ್ರಹಣೆಯ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಶುಲ್ಕವನ್ನು ಮೊದಲು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.")},
   {question:tx(l,"What is the smallest quantity you take?","ಕನಿಷ್ಠ ಎಷ್ಟು ತೈಲ ಸ್ವೀಕರಿಸುತ್ತೀರಿ?"),answer:tx(l,"Please tell us how much you have. The minimum pickup quantity is confirmed by the RVP team when discussing collection.","ನಿಮ್ಮಲ್ಲಿರುವ ಪ್ರಮಾಣವನ್ನು ತಿಳಿಸಿ. ಕನಿಷ್ಠ ಪ್ರಮಾಣವನ್ನು ಆರ್‌ವಿಪಿ ತಂಡದೊಂದಿಗೆ ಸಂಗ್ರಹಣೆ ಚರ್ಚಿಸುವಾಗ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.")},
   {question:tx(l,"Do you give a bill?","ಬಿಲ್ ನೀಡುತ್ತೀರಾ?"),answer:tx(l,"Yes. You receive a GST bill for every transaction.","ಹೌದು. ಪ್ರತಿ ವ್ಯವಹಾರಕ್ಕೂ ಜಿಎಸ್‌ಟಿ ಬಿಲ್ ನೀಡುತ್ತೇವೆ.")},
  ]}/></div></section>
 </PageFrame>;
}
