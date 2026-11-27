import type { Language } from "@/lib/navigation";
import { pageHref } from "@/lib/navigation";
import { tx } from "@/lib/company";
import { products, productPath, productQuoteHref } from "@/lib/products";
import { LinkButton, PageFrame, Reveal, SectionHeading } from "./shared";

export function ProductGrid({ language }: { language: Language }) {
  return <div className="product-grid">{products.map((product, index) => <Reveal key={product.id} delay={(index % 2) * 0.08} className="catalogue-card">
    <a href={pageHref(language, productPath(product))} className="catalogue-photo" aria-label={product.name[language]}><img src={product.image} alt={product.imageAlt[language]} width={1000} height={667} loading="lazy" /></a>
    <div className="catalogue-copy"><p className="site-eyebrow">{product.category[language]}</p><h3><a href={pageHref(language, productPath(product))}>{product.name[language]}</a></h3><p>{product.description[language]}</p><div className="site-actions"><LinkButton href={pageHref(language, productPath(product))} outline icon={false}>{tx(language, "View product", "ಉತ್ಪನ್ನವನ್ನು ನೋಡಿ")}</LinkButton><LinkButton href={productQuoteHref(language, product)} icon={false}>{tx(language, "Ask for price", "ದರಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ")}</LinkButton></div></div>
  </Reveal>)}</div>;
}
export function HomeProducts({ language }: { language: Language }) {
  return <PageFrame><section className="site-section" aria-labelledby="home-products-heading"><div className="page-shell"><div id="home-products-heading"><SectionHeading eyebrow={tx(language,"OUR PRODUCTS","ನಮ್ಮ ಉತ್ಪನ್ನಗಳು")} title={tx(language,"Base oil and industrial fuels for your business.","ನಿಮ್ಮ ಉದ್ಯಮಕ್ಕಾಗಿ ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಇಂಧನಗಳು.")} body={tx(language,"Explore RRBO, furnace oil, LDO and DFO. Choose a product to discuss its application, specifications and supply.","RRBO, ಫರ್ನೇಸ್ ಆಯಿಲ್, LDO ಮತ್ತು DFO ಬಗ್ಗೆ ತಿಳಿಯಿರಿ. ಬಳಕೆ, ವಿಶೇಷಣಗಳು ಮತ್ತು ಪೂರೈಕೆಯನ್ನು ಚರ್ಚಿಸಲು ಉತ್ಪನ್ನವನ್ನು ಆರಿಸಿ.")}/></div><ProductGrid language={language}/></div></section></PageFrame>;
}
export function ProductNavigation({ language, activeSlug }: { language: Language; activeSlug?: string }) {
  return <nav className="product-navigation page-shell" aria-label={tx(language,"Product navigation","ಉತ್ಪನ್ನಗಳ ನ್ಯಾವಿಗೇಷನ್")}><a href={pageHref(language,"products")} aria-current={!activeSlug?"page":undefined}>{tx(language,"All products","ಎಲ್ಲ ಉತ್ಪನ್ನಗಳು")}</a>{products.map(product=><a key={product.id} href={pageHref(language,productPath(product))} aria-current={activeSlug===product.slug?"page":undefined}>{product.shortName[language]}</a>)}</nav>;
}
