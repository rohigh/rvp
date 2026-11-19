import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { ArrowUpRight, ChevronDown, MapPin, Check, type LucideIcon } from "lucide-react";
import { pageHref, type Language } from "@/lib/navigation";
import { tx } from "@/lib/company";
import { cn } from "@/lib/utils";
import "./site-pages.css";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <LazyMotion features={domAnimation}><m.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</m.div></LazyMotion>;
}
export function PageFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("site-pages", className)}>{children}</div>;
}
export function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <Reveal className={cn("section-heading", light && "is-light")}><p className="site-eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="section-intro">{body}</p>}</Reveal>;
}
export function LinkButton({ href, children, outline = false, light = false, icon = true }: { href: string; children: ReactNode; outline?: boolean; light?: boolean; icon?: boolean }) {
  return <a className={cn("site-button", outline && "is-outline", light && "on-dark")} href={href} onClick={() => { if (location.hash === href && href.includes("?section=")) document.getElementById(new URLSearchParams(href.split("?")[1]).get("section") || "")?.scrollIntoView({ behavior: "smooth" }); }}>{children}{icon && <ArrowUpRight aria-hidden="true" size={18} />}</a>;
}
export function PageHero({ language, eyebrow, title, body, image, imageAlt, children, dark = false, tag }: { language: Language; eyebrow: string; title: string; body: string; image: string; imageAlt: string; children?: ReactNode; dark?: boolean; tag?: string }) {
  return <section className={cn("page-hero", dark && "is-dark")}>
    <div className="page-shell">
      <div className="page-breadcrumb"><a href={pageHref(language, "")}>{tx(language, "Home", "ಮುಖಪುಟ")}</a><span>/</span><span>{eyebrow}</span></div>
      <div className="page-hero-grid">
        <Reveal className="page-hero-copy"><p className="site-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-description">{body}</p><div className="site-actions">{children}</div><p className="hero-location"><MapPin size={17} aria-hidden="true" />{tx(language, "Tumakuru, Karnataka · Since 2018", "ತುಮಕೂರು, ಕರ್ನಾಟಕ · 2018ರಿಂದ")}</p></Reveal>
        <Reveal className="page-hero-photo" delay={0.12}><img src={image} alt={imageAlt} width={1000} height={800} fetchPriority="high" />{tag && <div className="photo-label"><img src="/brand/rvp-symbol.png" alt="" width={40} height={40} /><span>{tag}</span></div>}</Reveal>
      </div>
    </div>
  </section>;
}
export function FeatureCard({ icon: Icon, title, children, className }: { icon: LucideIcon; title: string; children: ReactNode; className?: string }) {
  return <Reveal className={cn("feature-tile", className)}><span className="tile-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3>{title}</h3><p>{children}</p></Reveal>;
}
export function Steps({ items, language }: { items: { title: string; body: string; icon: LucideIcon }[]; language: Language }) {
  return <ol className="site-steps" aria-label={tx(language, "The process", "ಪ್ರಕ್ರಿಯೆ")}>{items.map(({ title, body, icon: Icon }, index) => <li key={title}><Reveal delay={index * 0.07}><span className="step-symbol"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><span className="sr-only">{index + 1}.</span></span><h3>{title}</h3><p>{body}</p></Reveal></li>)}</ol>;
}
export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map(item => <details key={item.question} className="faq-item"><summary>{item.question}<ChevronDown size={20} aria-hidden="true" /></summary><div><p>{item.answer}</p></div></details>)}</div>;
}
export function CheckList({ items }: { items: string[] }) {
  return <ul className="site-checklist">{items.map(item => <li key={item}><Check size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}
export function PhotoCard({ src, alt, title, children }: { src: string; alt: string; title: string; children?: ReactNode }) {
  return <Reveal className="site-photo-card"><div><img src={src} alt={alt} width={900} height={650} loading="lazy" /></div><h3>{title}</h3>{children && <p>{children}</p>}</Reveal>;
}
