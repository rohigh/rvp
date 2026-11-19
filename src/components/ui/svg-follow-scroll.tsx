"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowDown, Droplets, MessageCircle, Recycle, Truck } from "lucide-react";
import { LazyMotion, domAnimation, m, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/navigation";

const content = {
  en: {
    eyebrow: "THE OIL JOURNEY",
    title: "How It Works",
    introduction: "Four steps to give used oil a new life.",
    scroll: "Follow the journey",
    steps: [
      { title: "Tell us", description: "Call, WhatsApp or fill the form. Tell us the oil type and how much you have." },
      { title: "We pick up", description: "We come to your place and collect the oil." },
      { title: "We clean it", description: "We clean the oil at our plant, removing water, dirt and waste." },
      { title: "It is used again", description: "The clean base oil goes to oil makers and factories to be used again." },
    ],
  },
  kn: {
    eyebrow: "ತೈಲದ ಮರುಬಳಕೆಯ ಪಯಣ",
    title: "ಇದು ಹೇಗೆ ನಡೆಯುತ್ತದೆ",
    introduction: "ಬಳಸಿದ ತೈಲಕ್ಕೆ ಹೊಸ ಜೀವ ನೀಡುವ ನಾಲ್ಕು ಹಂತಗಳು.",
    scroll: "ಮರುಬಳಕೆಯ ಹಂತಗಳನ್ನು ನೋಡಿ",
    steps: [
      { title: "ನಮಗೆ ತಿಳಿಸಿ", description: "ಕರೆ ಮಾಡಿ, ವಾಟ್ಸಾಪ್ ಮಾಡಿ ಅಥವಾ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ. ತೈಲದ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ತಿಳಿಸಿ." },
      { title: "ನಾವು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ", description: "ನಾವು ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಬಂದು ಬಳಸಿದ ತೈಲವನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ." },
      { title: "ನಾವು ಶುದ್ಧೀಕರಿಸುತ್ತೇವೆ", description: "ನಮ್ಮ ಘಟಕದಲ್ಲಿ ತೈಲವನ್ನು ಶುದ್ಧೀಕರಿಸಿ, ನೀರು, ಕೊಳಕು ಮತ್ತು ತ್ಯಾಜ್ಯವನ್ನು ತೆಗೆದುಹಾಕುತ್ತೇವೆ." },
      { title: "ಮತ್ತೆ ಬಳಕೆಯಾಗುತ್ತದೆ", description: "ಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತೆ ಬಳಕೆಯಾಗಲು ತೈಲ ತಯಾರಕರು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಗೆ ತಲುಪುತ್ತದೆ." },
    ],
  },
} as const;

const icons = [MessageCircle, Truck, Droplets, Recycle];
type Point = { x: number; y: number };
type ConnectorGeometry = { width: number; height: number; path: string; thresholds: number[] };

function connectorPath(points: Point[], curved: boolean) {
  if (!points.length) return "";
  let path = `M${points[0].x} ${points[0].y}`;
  for (let index = 1; index < points.length; index++) {
    const from = points[index - 1];
    const to = points[index];
    if (!curved) {
      path += ` L${to.x} ${to.y}`;
      continue;
    }
    const distance = to.y - from.y;
    const bendX = from.x + (index % 2 === 1 ? 1 : -1) * 54;
    const middleY = (from.y + to.y) / 2;
    path += ` C${from.x} ${from.y + distance * 0.3} ${bendX} ${from.y + distance * 0.3} ${bendX} ${middleY}`;
    path += ` C${bendX} ${from.y + distance * 0.7} ${to.x} ${from.y + distance * 0.7} ${to.x} ${to.y}`;
  }
  return path;
}

function LinePath({ scrollYProgress, geometry }: { scrollYProgress: MotionValue<number>; geometry: ConnectorGeometry }) {
  return (
    <svg
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full"
    >
      <path d={geometry.path} stroke="#C8D7EA" strokeOpacity="0.2" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      <m.path
        d={geometry.path}
        stroke="#E59833"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
}

type ProcessStepProps = {
  step: { readonly title: string; readonly description: string };
  index: number;
  threshold: number;
  scrollYProgress: MotionValue<number>;
};

function ProcessStep({ step, index, threshold, scrollYProgress }: ProcessStepProps) {
  const Icon = icons[index];
  const opacity = useTransform(scrollYProgress, [Math.max(0, threshold - 0.12), Math.max(0.03, threshold)], [0, 1]);
  const number = String(index + 1).padStart(2, "0");

  const contentColumn = index % 2 === 0
    ? "md:col-start-1 md:text-right"
    : "md:col-start-3";

  return (
    <li className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 gap-y-3 pb-12 last:pb-0 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 md:pb-16">
      <span data-process-marker className="relative z-10 col-start-1 row-start-1 grid size-14 place-items-center self-center rounded-full border border-[#C8D7EA]/30 bg-[#092243] text-base font-medium text-white md:col-start-2 md:size-20 md:text-xl">
        <span>{number}</span>
        <m.span aria-hidden="true" style={{ opacity }} className="absolute inset-0 grid place-items-center rounded-full border border-[#E59833] bg-[#E59833] text-[#121B26]">{number}</m.span>
      </span>
      <div data-process-heading className={cn(
        "relative z-10 col-start-2 row-start-1 flex min-w-0 items-center gap-3",
        contentColumn,
        index % 2 === 0 && "md:justify-end",
      )}>
        <Icon aria-hidden="true" className="size-6 shrink-0 text-[#C8D7EA]" strokeWidth={1.5} />
        <h3 className="text-2xl font-medium leading-relaxed text-white sm:text-3xl">{step.title}</h3>
      </div>
      <p className={cn(
        "relative z-10 col-start-2 row-start-2 min-w-0 text-base leading-8 text-[#C8D7EA]",
        contentColumn,
      )}>{step.description}</p>
    </li>
  );
}

export default function HowItWorks({ language }: { language: Language }) {
  const copy = content[language];
  const ref = useRef<HTMLDivElement>(null);
  const [geometry, setGeometry] = useState<ConnectorGeometry>({ width: 1, height: 1, path: "", thresholds: [] });

  useLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;
    let disposed = false;
    const measure = () => {
      if (disposed) return;
      const bounds = container.getBoundingClientRect();
      const points = Array.from(container.querySelectorAll<HTMLElement>("[data-process-marker]")).map(marker => {
        const box = marker.getBoundingClientRect();
        return { x: box.left - bounds.left + box.width / 2, y: box.top - bounds.top + box.height / 2 };
      });
      const span = points.length > 1 ? points[points.length - 1].y - points[0].y : 1;
      setGeometry({
        width: Math.max(1, bounds.width), height: Math.max(1, bounds.height),
        path: connectorPath(points, window.matchMedia("(min-width: 768px)").matches),
        thresholds: points.map(point => (point.y - points[0].y) / span),
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    container.querySelectorAll("li").forEach(item => observer.observe(item));
    measure();
    document.fonts.ready.then(measure);
    return () => { disposed = true; observer.disconnect(); };
  }, [language]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end end"] });

  return (
    <LazyMotion features={domAnimation}>
      <section id="how-it-works" aria-labelledby="process-heading" className="overflow-hidden bg-[#092243] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#C8D7EA]">{copy.eyebrow}</p>
            <h2 id="process-heading" className="mt-5 text-4xl font-medium leading-snug tracking-tight sm:text-5xl">{copy.title}</h2>
            <p className="mt-5 text-base leading-8 text-[#C8D7EA] sm:text-lg">{copy.introduction}</p>
            <p className="mt-7 inline-flex items-center gap-2 text-xs text-[#C8D7EA]">{copy.scroll}<ArrowDown aria-hidden="true" className="size-4" /></p>
          </div>
          <div ref={ref} className="relative mx-auto mt-10 md:mt-14 md:max-w-6xl">
            <LinePath scrollYProgress={scrollYProgress} geometry={geometry} />
            <ol>{copy.steps.map((step, index) => <ProcessStep key={index} step={step} index={index} threshold={geometry.thresholds[index] ?? index / 3} scrollYProgress={scrollYProgress} />)}</ol>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export { HowItWorks as Skiper19 };
