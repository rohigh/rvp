import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { labels, pages, pageHref, type Language } from "@/lib/navigation";
import { products, productPath } from "@/lib/products";
import { cn } from "@/lib/utils";
export function NavigationSheet({ language, currentPage, productSlug }: { language: Language; currentPage: string; productSlug?: string }) {
 const [open,setOpen]=useState(false);
 const copy=labels[language];
 useEffect(()=>{const query=matchMedia("(min-width: 1280px)");const close=()=>{if(query.matches)setOpen(false);};query.addEventListener("change",close);return()=>query.removeEventListener("change",close);},[]);
 useEffect(()=>{setOpen(false);},[language,currentPage,productSlug]);
 return <Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild><Button size="icon" variant="outline" aria-label={copy.menu}><MenuIcon aria-hidden="true"/></Button></SheetTrigger>
  <SheetContent closeLabel={copy.close} className="w-[min(90vw,380px)] overflow-y-auto">
   <SheetHeader className="mt-6 text-left"><SheetTitle><img src="/brand/rvp-logo.png" alt="RVP Refinery" width={486} height={512} className="h-20 w-[76px] object-contain"/></SheetTitle><SheetDescription>{copy.description}</SheetDescription></SheetHeader>
   <nav aria-label={copy.navigation} className="mt-8 flex flex-col gap-2">{pages.map(page=><div key={page.slug}>
    <SheetClose asChild><a href={pageHref(language,page.slug)} aria-current={currentPage===page.slug&&!productSlug?"page":undefined} className={cn("block rounded-md px-4 py-3 text-base font-medium hover:bg-accent focus-visible:outline-ring",currentPage===page.slug&&"bg-accent text-brand")}>{page[language]}</a></SheetClose>
    {page.slug==="products"&&<ul className="ml-4 border-l border-border pl-2">{products.map(product=><li key={product.id}><SheetClose asChild><a href={pageHref(language,productPath(product))} aria-current={productSlug===product.slug?"page":undefined} className={cn("block rounded-md px-4 py-3 text-sm leading-7 hover:bg-accent focus-visible:outline-ring",productSlug===product.slug&&"bg-accent text-brand")}>{product.name[language]}</a></SheetClose></li>)}</ul>}
   </div>)}</nav>
   <SheetClose asChild><Button asChild className="mt-8 w-full"><a href={pageHref(language,"used-oil-collection")}>{copy.sell}</a></Button></SheetClose>
  </SheetContent>
 </Sheet>;
}
