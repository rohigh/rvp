import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import FooterInverse from "@/components/ui/footer-inverse";
import ContactCta from "@/components/ui/contact-cta";
import WhyChooseUs from "@/components/ui/feature-08";
import CoreHero from "@/components/ui/syntra-hero";
import HowItWorks from "@/components/ui/svg-follow-scroll";
import WhatWeDo from "@/components/ui/what-we-do";
import WhoWeWorkWith from "@/components/ui/who-we-work-with";
import WhoWeAre from "@/components/ui/who-we-are";
import Navbar from "@/components/ui/navbar-02";
import { HomeProducts } from "@/components/site/product-cards";
import { pages, type Language } from "@/lib/navigation";
import { findProductBySlug, isProductId } from "@/lib/products";
import { metadata, setPageMeta, tx } from "@/lib/company";
import "./index.css";

const CollectionPage=lazy(()=>import("./pages/collection"));
const ProductsPage=lazy(()=>import("./pages/products"));
const ProductDetailPage=lazy(()=>import("./pages/product-detail"));
const AboutPage=lazy(()=>import("./pages/about"));
const ContactPage=lazy(()=>import("./pages/contact"));
const BlogsPage=lazy(()=>import("./pages/blogs"));
function readRoute(){
 const [path,query=""]=location.hash.slice(1).split("?");
 const [,language,slug="",detailSlug]=path.split("/");
 const params=new URLSearchParams(query);
 const selectedProduct=params.get("product");
 return {
  language:(language==="kn"?"kn":"en") as Language,
  currentPage:pages.find(page=>page.slug===slug)?.slug??"",
  articleSlug:slug==="blogs"?detailSlug:undefined,
  productSlug:slug==="products"?findProductBySlug(detailSlug)?.slug:undefined,
  selectedProduct:isProductId(selectedProduct)?selectedProduct:undefined,
  section:params.get("section")||undefined,
 };
}
function HomePage({language}:{language:Language}){
 return <><CoreHero language={language}/><WhoWeAre language={language}/><WhatWeDo language={language}/><HomeProducts language={language}/><HowItWorks language={language}/><WhoWeWorkWith language={language}/><WhyChooseUs language={language}/><ContactCta language={language}/></>;
}
function App(){
 const [route,setRoute]=useState(readRoute);
 const product=findProductBySlug(route.productSlug);
 useEffect(()=>{const update=()=>{if(location.hash!=="#main-content")setRoute(readRoute());};window.addEventListener("hashchange",update);return()=>window.removeEventListener("hashchange",update);},[]);
 useEffect(()=>{
  document.documentElement.lang=route.language;
  if(route.currentPage==="blogs"&&route.articleSlug)return;
  if(product){setPageMeta(`${product.name[route.language]} — RVP Refinery`,product.description[route.language]);return;}
  const [title,description]=(metadata[route.currentPage]||metadata[""])[route.language];
  setPageMeta(title,description);
 },[route.language,route.currentPage,route.articleSlug,product]);
 useEffect(()=>{
  const main=document.getElementById("main-content");
  if(!route.section){window.scrollTo({top:0,behavior:"instant"});main?.focus({preventScroll:true});return;}
  function scrollToSection(){
   const element=document.getElementById(route.section!);
   if(!element)return false;
   element.scrollIntoView({block:"start",behavior:"instant"});
   element.tabIndex=-1;element.focus({preventScroll:true});
   return true;
  }
  if(scrollToSection()||!main)return;
  const observer=new MutationObserver(()=>{if(scrollToSection())observer.disconnect();});
  observer.observe(main,{childList:true,subtree:true});
  return()=>observer.disconnect();
 },[route.currentPage,route.articleSlug,route.productSlug,route.selectedProduct,route.section,route.language]);
 let content:React.ReactNode;
 switch(route.currentPage){
  case "used-oil-collection":content=<CollectionPage language={route.language}/>;break;
  case "products":content=product?<ProductDetailPage language={route.language} product={product}/>:<ProductsPage language={route.language} selectedProduct={route.selectedProduct}/>;break;
  case "about":content=<AboutPage language={route.language}/>;break;
  case "contact":content=<ContactPage language={route.language} selectedProduct={route.selectedProduct}/>;break;
  case "blogs":content=<BlogsPage language={route.language} articleSlug={route.articleSlug}/>;break;
  default:content=<HomePage language={route.language}/>;
 }
 return <><Navbar {...route}/><main id="main-content" tabIndex={-1}><Suspense fallback={<div className="mx-auto min-h-[70vh] max-w-7xl px-6 py-24" role="status">{tx(route.language,"Loading page…","ಪುಟ ಲೋಡ್ ಆಗುತ್ತಿದೆ…")}</div>}><React.Fragment key={route.currentPage+"/"+(route.articleSlug||route.productSlug||"")}>{content}</React.Fragment></Suspense></main><FooterInverse {...route}/></>;
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
