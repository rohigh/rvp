import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from "motion/react";
import { pageHref, pages, type Language } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { company } from "@/lib/company";
import "./footer-inverse.css";

const content = {
  en: {
    home: "RVP Refinery home", navigation: "Footer navigation", menu: "Menu",
    eyebrow: "A new life for used oil", headline: "Let’s talk", contact: "Talk to RVP Refinery",
    aboutLabel: "About RVP",
    about: "We buy used oil, clean it and sell it again as base oil. Tumakuru, Karnataka. Since 2018.",
    addressLabel: "Our plant",
    address: ["Sy. No. 26, Shed No. 2, Plot No. 97-B,", "Vasanthanarasapura Industrial Area,", "Nagenahalli, Kora Hobli, Tumakuru Taluk,", "Tumakuru, Karnataka – 572128"],
    enquiry: "Work with us", sell: "Sell Used Oil", buy: "Buy Base Oil", getInTouch: "Get in touch",
    rights: "All rights reserved.", top: "Back to top",
  },
  kn: {
    home: "ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಮುಖಪುಟ", navigation: "ಅಡಿಭಾಗದ ನ್ಯಾವಿಗೇಷನ್", menu: "ಮೆನು",
    eyebrow: "ಬಳಸಿದ ತೈಲಕ್ಕೆ ಹೊಸ ಜೀವ", headline: "ಮಾತನಾಡೋಣ", contact: "ಆರ್‌ವಿಪಿ ರಿಫೈನರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
    aboutLabel: "ಆರ್‌ವಿಪಿ ಬಗ್ಗೆ",
    about: "ನಾವು ಬಳಸಿದ ತೈಲವನ್ನು ಖರೀದಿಸಿ, ಶುದ್ಧೀಕರಿಸಿ, ಬೇಸ್ ಆಯಿಲ್ ಆಗಿ ಮಾರಾಟ ಮಾಡುತ್ತೇವೆ. ತುಮಕೂರು, ಕರ್ನಾಟಕ. 2018ರಿಂದ.",
    addressLabel: "ನಮ್ಮ ಘಟಕ",
    address: ["ಸರ್ವೆ ನಂ. 26, ಶೆಡ್ ನಂ. 2, ಪ್ಲಾಟ್ ನಂ. 97-B,", "ವಸಂತನರಸಾಪುರ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ,", "ನಾಗೇನಹಳ್ಳಿ, ಕೋರ ಹೋಬಳಿ, ತುಮಕೂರು ತಾಲ್ಲೂಕು,", "ತುಮಕೂರು, ಕರ್ನಾಟಕ – 572128"],
    enquiry: "ನಮ್ಮೊಂದಿಗೆ ವ್ಯವಹರಿಸಿ", sell: "ಬಳಸಿದ ತೈಲ ಮಾರಾಟ", buy: "ಬೇಸ್ ಆಯಿಲ್ ಖರೀದಿ", getInTouch: "ಸಂಪರ್ಕಿಸಿ",
    rights: "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.", top: "ಮೇಲಕ್ಕೆ ಹೋಗಿ",
  },
} as const;

const revealEase = [0.22, 1, 0.36, 1] as const;
const imageEase = [0.16, 1, 0.3, 1] as const;
const swapEase = [0.65, 0, 0.35, 1] as const;
const lineVariants = { hidden: { y: "110%" }, shown: { y: "0%" } };
const view = { once: true, amount: 0.1 };

type FooterLayout = "phone" | "tablet" | "desktop";
function readLayout(): FooterLayout {
  return matchMedia("(min-width: 1200px)").matches ? "desktop" : matchMedia("(min-width: 810px)").matches ? "tablet" : "phone";
}
function subscribeLayout(update: () => void) {
  const queries = [matchMedia("(min-width: 810px)"), matchMedia("(min-width: 1200px)")];
  queries.forEach(query => query.addEventListener("change", update));
  return () => queries.forEach(query => query.removeEventListener("change", update));
}

function FooterReveal({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <m.span className={cn("footer-mask", className)} initial="hidden" whileInView="shown" viewport={view}>
      <m.span data-slot="footer-line" className="footer-line" variants={lineVariants} transition={{ duration: 1, delay, ease: revealEase }}>{children}</m.span>
    </m.span>
  );
}

function FooterLines({ text, delay = 0.75 }: { text: string; delay?: number }) {
  const container = useRef<HTMLSpanElement>(null);
  const measureText = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const words = text.match(/\S+\s*/gu) ?? [text];

  useLayoutEffect(() => {
    const element = container.current;
    const measurement = measureText.current;
    if (!element || !measurement) return;
    let active = true;
    function measure() {
      if (!active || !measurement) return;
      const next: string[] = [];
      let top = -Infinity;
      for (const word of Array.from(measurement.children) as HTMLElement[]) {
        if (Math.abs(word.offsetTop - top) > 2) {
          next.push(word.textContent ?? "");
          top = word.offsetTop;
        } else next[next.length - 1] += word.textContent ?? "";
      }
      const trimmed = next.map(line => line.trimEnd());
      setLines(previous => previous.join("\n") === trimmed.join("\n") ? previous : trimmed);
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    document.fonts.ready.then(measure);
    return () => { active = false; observer.disconnect(); };
  }, [text]);

  return (
    <span ref={container} className="footer-split-lines">
      <span className="sr-only">{text}</span>
      <span ref={measureText} aria-hidden="true" className="footer-measure">{words.map((word, index) => <span key={index}>{word}</span>)}</span>
      <span aria-hidden="true">{lines.length ? lines.map((line, index) => <FooterReveal key={index} delay={delay + index * 0.08}>{line}</FooterReveal>) : <span className="invisible">{text}</span>}</span>
    </span>
  );
}

function SwapArrow({ direction = "diagonal", className }: { direction?: "diagonal" | "up"; className?: string }) {
  const up = direction === "up";
  const variants = {
    current: { rest: { x: "0%", y: "0%" }, hover: { x: up ? "0%" : "110%", y: "-110%" } },
    next: { rest: { x: up ? "0%" : "-110%", y: "110%" }, hover: { x: "0%", y: "0%" } },
  };
  return (
    <span aria-hidden="true" className={cn("footer-arrow-window", className)}>
      {(["current", "next"] as const).map(kind => (
        <m.span key={kind} data-slot={`footer-arrow-${kind}`} className="footer-arrow-glyph" variants={variants[kind]} transition={{ duration: 0.6, ease: swapEase }}>
          <svg viewBox="0 0 102 102" fill="none" className="h-full w-full">
            <path d={up ? "M51 100.7V1.3M13.4 38.9 51 1.3l37.6 37.6" : "M1.3 100.7 100.7 1.3M25.5 1.3h75.2v75.2"} stroke="currentColor" strokeWidth="2.55" />
          </svg>
        </m.span>
      ))}
    </span>
  );
}

export default function FooterInverse({ language, currentPage }: { language: Language; currentPage: string }) {
  const copy = content[language];
  const layout = useSyncExternalStore(subscribeLayout, readLayout, () => "desktop" as const);
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);
  const headlineOffset = layout === "desktop" ? 190 : layout === "tablet" ? 155 : 100;
  const arrowOffset = layout === "desktop" ? 32 : layout === "tablet" ? 26 : 20;
  const characters = Array.from(new Intl.Segmenter(language, { granularity: "grapheme" }).segment(copy.headline), part => part.segment);

  useEffect(() => { setMenuOpen(false); }, [language, currentPage, layout]);

  function backToTop() {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }

  function navigation(mobile = false) {
    return pages.map((page, index) => (
      <FooterReveal key={page.slug} delay={mobile ? index * 0.04 : 0.15 + index * 0.05}>
        <m.a
          href={pageHref(language, page.slug)}
          aria-current={currentPage === page.slug ? "page" : undefined}
          className="footer-nav-link"
          initial={{ color: currentPage === page.slug ? "#FFFFFF" : "#C8D7EA" }}
          animate={{ color: currentPage === page.slug ? "#FFFFFF" : "#C8D7EA" }}
          whileHover={{ color: "#FFFFFF" }}
          whileFocus={{ color: "#FFFFFF" }}
          transition={{ duration: 0.4, ease: revealEase }}
          onClick={() => setMenuOpen(false)}
        >{page[language]}</m.a>
      </FooterReveal>
    ));
  }

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="never">
        <footer data-slot="site-footer" aria-labelledby="footer-heading" className="rvp-footer" data-language={language} key={language}>
          <m.img
            data-slot="footer-photo" src="/images/refinery-stock-1400.webp" alt="" aria-hidden="true" loading="lazy" width={1400} height={933}
            initial={{ opacity: 0, scale: 1.18 }} whileInView={{ opacity: 1, scale: 1 }} viewport={view}
            transition={{ duration: 1.6, ease: imageEase }} className="footer-photo"
          />
          <div aria-hidden="true" className="footer-shade" />
          <div className="footer-top">
            <a href={pageHref(language, "")} aria-label={copy.home} className="footer-brand">
              <FooterReveal delay={0.1}>
                <span className="footer-brand-art">
                  <img src="/brand/rvp-symbol.png" alt="" aria-hidden="true" width={256} height={248} className="footer-brand-symbol" />
                  <img src="/brand/rvp-wordmark.png" alt="RVP Refinery" width={512} height={193} className="footer-brand-wordmark" />
                </span>
              </FooterReveal>
            </a>
            <nav aria-label={copy.navigation} className="footer-desktop-nav">{navigation()}</nav>
            <FooterReveal delay={0.4} className="footer-mobile-menu-control">
              <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls={menuId} onClick={() => setMenuOpen(open => !open)} className="footer-menu-button">
                {copy.menu}<m.span aria-hidden="true" animate={{ rotate: menuOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: revealEase }} className="footer-menu-plus">+</m.span>
              </button>
            </FooterReveal>
          </div>
          <AnimatePresence initial={false}>
            {menuOpen && layout === "phone" && (
              <m.nav
                key="footer-mobile-menu" id={menuId} aria-label={copy.navigation} className="footer-mobile-nav"
                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: revealEase }}
                onKeyDown={event => { if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } }}
              >
                <div className="footer-mobile-nav-links">{navigation(true)}</div>
              </m.nav>
            )}
          </AnimatePresence>

          <div className="footer-content">
            <div className="footer-heading-block">
              <p className="footer-eyebrow"><FooterReveal delay={0.25}>{copy.eyebrow}</FooterReveal></p>
              <div className="footer-headline-row">
                <m.h2 id="footer-heading" aria-label={copy.headline} className="footer-headline" initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.2 }}>
                  {characters.map((character, index) => (
                    <m.span
                      aria-hidden="true" key={index} data-slot="footer-character" className="footer-character"
                      variants={{ hidden: { y: headlineOffset }, shown: { y: 0 } }}
                      transition={{ duration: 1.1, delay: 0.35 + index * 0.035, ease: revealEase }}
                    >{character}</m.span>
                  ))}
                </m.h2>
                <m.div className="footer-main-arrow" initial={{ opacity: 0, x: -arrowOffset, y: arrowOffset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={view} transition={{ duration: 1.2, delay: 0.8, ease: revealEase }}>
                  <m.a href={pageHref(language, "contact")} aria-label={copy.contact} className="footer-contact-arrow" initial="rest" animate="rest" whileHover="hover" whileFocus="hover" variants={{ rest: { color: "#FFFFFF" }, hover: { color: "#E59833" } }} transition={{ duration: 0.4, ease: revealEase }}>
                    <SwapArrow />
                  </m.a>
                </m.div>
              </div>
            </div>

            <m.div data-slot="footer-divider" className="footer-divider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 1.4, delay: 0.9, ease: imageEase }} />

            <div className="footer-info">
              <div className="footer-about">
                <h3 className="footer-info-label"><FooterReveal delay={0.7}>{copy.aboutLabel}</FooterReveal></h3>
                <p><FooterLines text={copy.about} delay={0.75} /></p>
                <p className="footer-gstin"><FooterReveal delay={1.05}>GSTIN: <span className="whitespace-nowrap">{company.gstin}</span></FooterReveal></p>
                <div className="footer-contact-links">
                  {[
                    { href: company.phone ? `tel:${company.phone}` : "", label: company.phoneDisplay },
                    { href: company.email ? `mailto:${company.email}` : "", label: company.email },
                  ].filter(link => link.href).map((link, index) => (
                    <FooterReveal key={link.href} delay={1.1 + index * 0.08}>
                      <m.a href={link.href} className="footer-text-link" initial="rest" animate="rest" whileHover="hover" whileFocus="hover" variants={{ rest: { color: "#FFFFFF" }, hover: { color: "#E59833" } }} transition={{ duration: 0.4, ease: revealEase }}>{link.label}</m.a>
                    </FooterReveal>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="footer-info-label"><FooterReveal delay={0.8}>{copy.addressLabel}</FooterReveal></h3>
                <address className="footer-address">{copy.address.map((line, index) => <FooterLines key={line} text={line} delay={0.85 + index * 0.08} />)}</address>
              </div>
              <div>
                <h3 className="footer-info-label"><FooterReveal delay={0.9}>{copy.enquiry}</FooterReveal></h3>
                <div className="footer-enquiry-links">
                  {[
                    { slug: "used-oil-collection", label: copy.sell },
                    { slug: "products", label: copy.buy },
                    { slug: "contact", label: copy.getInTouch },
                  ].map((link, index) => (
                    <FooterReveal key={link.slug} delay={0.95 + index * 0.08}>
                      <m.a href={pageHref(language, link.slug)} className="footer-text-link" initial="rest" animate="rest" whileHover="hover" whileFocus="hover" variants={{ rest: { color: "#FFFFFF" }, hover: { color: "#E59833" } }} transition={{ duration: 0.4, ease: revealEase }}>
                        {link.label}<SwapArrow className="footer-small-arrow" />
                      </m.a>
                    </FooterReveal>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="footer-copyright"><FooterLines text={`© ${new Date().getFullYear()} RVP Refinery. ${copy.rights}`} delay={1} /></p>
              <FooterReveal delay={1.15} className="footer-top-control">
                <m.button type="button" onClick={backToTop} className="footer-back-top footer-text-link" initial="rest" animate="rest" whileHover="hover" whileFocus="hover" variants={{ rest: { color: "#C8D7EA" }, hover: { color: "#FFFFFF" } }} transition={{ duration: 0.4, ease: revealEase }}>
                  {copy.top}<SwapArrow direction="up" className="footer-small-arrow" />
                </m.button>
              </FooterReveal>
            </div>
          </div>
        </footer>
      </MotionConfig>
    </LazyMotion>
  );
}
