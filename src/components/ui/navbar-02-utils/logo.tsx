import { pageHref, type Language } from "@/lib/navigation";
export function Logo({ language }: { language: Language }) {
 return <a href={pageHref(language, "")} aria-label={language === "en" ? "RVP Refinery home" : "ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಮುಖಪುಟ"} className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"><img src="/brand/rvp-logo.png" alt="RVP Refinery" width="486" height="512" className="h-[72px] w-[70px] object-contain sm:h-[80px] sm:w-[78px]" /></a>;
}
