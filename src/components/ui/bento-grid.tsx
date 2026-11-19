"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface BentoGridShowcaseProps {
  integrations: ReactNode;
  featureTags: ReactNode;
  mainFeature: ReactNode;
  secondaryFeature: ReactNode;
  statistic: ReactNode;
  journey: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export function BentoGridShowcase({ integrations, featureTags, mainFeature, secondaryFeature, statistic, journey, className }: BentoGridShowcaseProps) {
  const reduce = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 22 } },
  };
  const slots = [
    { name: "integrations", content: integrations, placement: "lg:col-start-1 lg:row-start-1" },
    { name: "secondaryFeature", content: secondaryFeature, placement: "lg:col-start-1 lg:row-start-2" },
    { name: "journey", content: journey, placement: "lg:col-start-1 lg:row-start-3" },
    { name: "mainFeature", content: mainFeature, placement: "lg:col-start-2 lg:row-start-1 lg:row-span-3" },
    { name: "featureTags", content: featureTags, placement: "lg:col-start-3 lg:row-start-1" },
    { name: "statistic", content: statistic, placement: "lg:col-start-3 lg:row-start-2 lg:row-span-2" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <m.div variants={containerVariants} initial={reduce ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.08 }} className={cn("grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-3", className)}>
        {slots.map(slot => <m.div key={slot.name} variants={itemVariants} className={cn("min-w-0", slot.placement)}>{slot.content}</m.div>)}
      </m.div>
    </LazyMotion>
  );
}
