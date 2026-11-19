import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/navbar-02-utils/logo";
import { NavigationSheet } from "@/components/ui/navbar-02-utils/navigation-sheet";
import { labels, pages, pageHref, type Language } from "@/lib/navigation";
import { cn } from "@/lib/utils";
type NavbarProps = { language: Language; currentPage: string; articleSlug?: string; section?: string };
export const NavMenu = ({ language, currentPage, ...props }: NavbarProps & ComponentProps<typeof NavigationMenu>) => (
 <NavigationMenu aria-label={labels[language].navigation} {...props}>
  <NavigationMenuList>{pages.map(page => <NavigationMenuItem key={page.slug}>
   <NavigationMenuLink asChild active={currentPage === page.slug} className={cn(navigationMenuTriggerStyle(), "px-3 text-[13px] data-[active]:text-brand")}><a href={pageHref(language, page.slug)} aria-current={currentPage === page.slug ? "page" : undefined}>{page[language]}</a></NavigationMenuLink>
  </NavigationMenuItem>)}</NavigationMenuList>
 </NavigationMenu>
);
export default function Navbar({ language, currentPage, articleSlug, section }: NavbarProps) {
 return <header className="border-b border-border bg-background">
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-white focus:p-3">{labels[language].skip}</a>
  <div className="mx-auto flex min-h-24 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
   <div className="flex items-center gap-8"><Logo language={language} /><NavMenu language={language} currentPage={currentPage} className="hidden xl:flex" /></div>
   <div className="flex shrink-0 items-center gap-2 sm:gap-3">
    <div aria-label="Language / ಭಾಷೆ" className="flex items-center rounded-md border border-border p-1">
     {(["en", "kn"] as const).map(value => <a key={value} href={pageHref(value, currentPage === "blogs" && articleSlug ? "blogs/" + articleSlug : currentPage, section)} lang={value} hrefLang={value} aria-current={language === value ? "true" : undefined} aria-label={value === "en" ? "Read in English" : "ಕನ್ನಡದಲ್ಲಿ ಓದಿ"} className={cn("rounded px-2 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-ring", language === value ? "bg-brand text-white" : "text-foreground hover:bg-accent")}>{value === "en" ? "EN" : "ಕನ್ನಡ"}</a>)}
    </div>
    <Button asChild className="hidden sm:inline-flex"><a href={pageHref(language, "used-oil-collection")}>{labels[language].sell}</a></Button>
    <div className="xl:hidden"><NavigationSheet language={language} currentPage={currentPage} /></div>
   </div>
  </div>
 </header>;
}
