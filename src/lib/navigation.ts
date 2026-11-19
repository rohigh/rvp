export type Language = "en" | "kn";
export const pages = [
  { slug: "", en: "Home", kn: "ಮುಖಪುಟ" },
  { slug: "used-oil-collection", en: "Used Oil Collection", kn: "ಬಳಸಿದ ತೈಲ ಸಂಗ್ರಹಣೆ" },
  { slug: "products", en: "Products", kn: "ಉತ್ಪನ್ನಗಳು" },
  { slug: "about", en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
  { slug: "contact", en: "Contact", kn: "ಸಂಪರ್ಕ" },
  { slug: "blogs", en: "Blogs", kn: "ಬ್ಲಾಗ್‌ಗಳು" },
] as const;
export const labels = {
 en: { sell: "Sell Used Oil", menu: "Open menu", close: "Close menu", navigation: "Main navigation", description: "Explore RVP Refinery", skip: "Skip to content" },
 kn: { sell: "ಬಳಸಿದ ತೈಲ ಮಾರಾಟ", menu: "ಮೆನು ತೆರೆಯಿರಿ", close: "ಮೆನು ಮುಚ್ಚಿರಿ", navigation: "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಷನ್", description: "ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ", skip: "ವಿಷಯಕ್ಕೆ ಹೋಗಿ" },
};
export const pageHref = (language: Language, slug: string, section?: string) => `#/${language}/${slug}${section ? "?section=" + encodeURIComponent(section) : ""}`;
