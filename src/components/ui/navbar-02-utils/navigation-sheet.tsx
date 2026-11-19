import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { labels, pages, pageHref, type Language } from "@/lib/navigation";
import { cn } from "@/lib/utils";
export function NavigationSheet({ language, currentPage }: { language: Language; currentPage: string }) {
 const [open, setOpen] = useState(false);
 const copy = labels[language];
 useEffect(() => { const query = matchMedia("(min-width: 1280px)"); const close = () => { if (query.matches) setOpen(false); }; query.addEventListener("change", close); return () => query.removeEventListener("change", close); }, []);
 return <Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild><Button size="icon" variant="outline" aria-label={copy.menu}><MenuIcon aria-hidden="true" /></Button></SheetTrigger>
  <SheetContent closeLabel={copy.close} className="w-[min(90vw,380px)] overflow-y-auto">
   <SheetHeader className="mt-6 text-left"><SheetTitle><img src="/brand/rvp-logo.png" alt="RVP Refinery" width={486} height={512} className="h-20 w-[76px] object-contain" /></SheetTitle><SheetDescription>{copy.description}</SheetDescription></SheetHeader>
   <nav aria-label={copy.navigation} className="mt-8 flex flex-col gap-2">{pages.map(page => <SheetClose asChild key={page.slug}><a href={pageHref(language, page.slug)} aria-current={currentPage === page.slug ? "page" : undefined} className={cn("rounded-md px-4 py-3 text-base font-medium hover:bg-accent focus-visible:outline-ring", currentPage === page.slug && "bg-accent text-brand")}>{page[language]}</a></SheetClose>)}</nav>
   <SheetClose asChild><Button asChild className="mt-8 w-full"><a href={pageHref(language, "used-oil-collection")}>{copy.sell}</a></Button></SheetClose>
  </SheetContent>
 </Sheet>;
}
