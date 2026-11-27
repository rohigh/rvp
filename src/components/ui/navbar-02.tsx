import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/navbar-02-utils/logo";
import { NavigationSheet } from "@/components/ui/navbar-02-utils/navigation-sheet";
import { labels, pages, pageHref, type Language } from "@/lib/navigation";
import { products, productPath, type ProductId } from "@/lib/products";
import { tx } from "@/lib/company";
import { cn } from "@/lib/utils";
type NavbarProps = { language: Language; currentPage: string; articleSlug?: string; productSlug?: string; selectedProduct?: ProductId; section?: string };
export const NavMenu = ({ language, currentPage, productSlug, ...props }: Pick<NavbarProps,"language"|"currentPage"|"productSlug"> & ComponentProps<typeof NavigationMenu>) => (
 <NavigationMenu aria-label={labels[language].navigation} {...props}>
  <NavigationMenuList>{pages.map(page => <NavigationMenuItem key={page.slug}>
   {page.slug==="products"?<><NavigationMenuTrigger className={cn("px-3 text-[13px]",currentPage==="products"&&"text-brand bg-accent/50")}>{page[language]}</NavigationMenuTrigger><NavigationMenuContent className="p-2 md:w-[360px]">
    <NavigationMenuLink asChild><a href={pageHref(language,"products")} aria-current={currentPage==="products"&&!productSlug?"page":undefined} className="block rounded-md px-4 py-3 text-base font-semibold text-brand hover:bg-accent focus:bg-accent">{tx(language,"All products","ಎಲ್ಲ ಉತ್ಪನ್ನಗಳು")}</a></NavigationMenuLink>
    {products.map(product=><NavigationMenuLink key={product.id} asChild><a href={pageHref(language,productPath(product))} aria-current={productSlug===product.slug?"page":undefined} className={cn("block rounded-md px-4 py-3 text-base leading-7 hover:bg-accent focus:bg-accent",productSlug===product.slug&&"bg-accent text-brand")}>{product.name[language]}</a></NavigationMenuLink>)}
   </NavigationMenuContent></>:<NavigationMenuLink asChild active={currentPage===page.slug} className={cn(navigationMenuTriggerStyle(),"px-3 text-[13px] data-[active]:text-brand")}><a href={pageHref(language,page.slug)} aria-current={currentPage===page.slug?"page":undefined}>{page[language]}</a></NavigationMenuLink>}
  </NavigationMenuItem>)}</NavigationMenuList>
 </NavigationMenu>
);
export default function Navbar({ language, currentPage, articleSlug, productSlug, selectedProduct, section }: NavbarProps) {
 const currentPath=currentPage==="blogs"&&articleSlug?"blogs/"+articleSlug:currentPage==="products"&&productSlug?"products/"+productSlug:currentPage;
 return <header className="border-b border-border bg-background">
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-white focus:p-3">{labels[language].skip}</a>
  <div className="mx-auto flex min-h-24 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
   <div className="flex items-center gap-8"><Logo language={language}/><NavMenu language={language} currentPage={currentPage} productSlug={productSlug} className="hidden xl:flex"/></div>
   <div className="flex shrink-0 items-center gap-2 sm:gap-3">
    <div aria-label="Language / ಭಾಷೆ" className="flex items-center rounded-md border border-border p-1">{(["en","kn"] as const).map(value=><a key={value} href={pageHref(value,currentPath,section,selectedProduct?{product:selectedProduct}:undefined)} lang={value} hrefLang={value} aria-current={language===value?"true":undefined} aria-label={value==="en"?"Read in English":"ಕನ್ನಡದಲ್ಲಿ ಓದಿ"} className={cn("rounded px-2 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-ring",language===value?"bg-brand text-white":"text-foreground hover:bg-accent")}>{value==="en"?"EN":"ಕನ್ನಡ"}</a>)}</div>
    <Button asChild className="hidden sm:inline-flex"><a href={pageHref(language,"used-oil-collection")}>{labels[language].sell}</a></Button>
    <div className="xl:hidden"><NavigationSheet language={language} currentPage={currentPage} productSlug={productSlug}/></div>
   </div>
  </div>
 </header>;
}
