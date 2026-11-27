import type { Language } from "@/lib/navigation";
import { pageHref } from "@/lib/navigation";
import { tx } from "@/lib/company";
import { productEnquiryCopy, type ProductId } from "@/lib/products";
import { CheckList, LinkButton, PageFrame, PageHero, SectionHeading } from "@/components/site/shared";
import { ProductGrid, ProductNavigation } from "@/components/site/product-cards";
import EnquiryForm from "@/components/site/enquiry-form";

export default function ProductsPage({ language: l, selectedProduct }: { language: Language; selectedProduct?: ProductId }) {
  return <PageFrame>
    <PageHero language={l} dark eyebrow={tx(l,"OUR PRODUCTS","ನಮ್ಮ ಉತ್ಪನ್ನಗಳು")} title={tx(l,"Base oil and industrial fuels for your business.","ನಿಮ್ಮ ಉದ್ಯಮಕ್ಕಾಗಿ ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಇಂಧನಗಳು.")} body={tx(l,"Explore re-refined base oil, furnace oil, light diesel oil and distilled fuel oil. Tell us your application, required quantity and delivery location so we can discuss the right product and supply arrangement.","ಮರುಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್, ಫರ್ನೇಸ್ ಆಯಿಲ್, ಲೈಟ್ ಡೀಸೆಲ್ ಆಯಿಲ್ ಮತ್ತು ಡಿಸ್ಟಿಲ್ಡ್ ಫ್ಯೂಯಲ್ ಆಯಿಲ್ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ. ಸೂಕ್ತ ಉತ್ಪನ್ನ ಮತ್ತು ಪೂರೈಕೆಯ ವ್ಯವಸ್ಥೆಯನ್ನು ಚರ್ಚಿಸಲು ನಿಮ್ಮ ಬಳಕೆ, ಬೇಕಾದ ಪ್ರಮಾಣ ಮತ್ತು ವಿತರಣೆಯ ಸ್ಥಳವನ್ನು ತಿಳಿಸಿ.")} image="/images/storage-stock.webp" imageAlt={tx(l,"Large industrial oil storage tanks","ದೊಡ್ಡ ಕೈಗಾರಿಕಾ ತೈಲ ಸಂಗ್ರಹ ಟ್ಯಾಂಕ್‌ಗಳು")} tag={tx(l,"RRBO · Furnace Oil · LDO · DFO","RRBO · ಫರ್ನೇಸ್ ಆಯಿಲ್ · LDO · DFO")}>
      <LinkButton href={pageHref(l,"products","product-range")} icon={false}>{tx(l,"Explore the products","ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ")}</LinkButton><LinkButton href={pageHref(l,"products","quote-form",selectedProduct?{product:selectedProduct}:undefined)} outline light icon={false}>{tx(l,"Discuss your requirement","ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಚರ್ಚಿಸಿ")}</LinkButton>
    </PageHero>
    <ProductNavigation language={l}/>
    <section id="product-range" className="site-section"><div className="page-shell"><SectionHeading eyebrow={tx(l,"FIND YOUR PRODUCT","ನಿಮ್ಮ ಉತ್ಪನ್ನವನ್ನು ಆರಿಸಿ")} title={tx(l,"Four products. Your requirements first.","ನಾಲ್ಕು ಉತ್ಪನ್ನಗಳು. ನಿಮ್ಮ ಅಗತ್ಯವೇ ಮೊದಲ ಆದ್ಯತೆ.")} body={tx(l,"Explore each product’s intended uses and the properties to discuss before ordering.","ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಪ್ರತಿ ಉತ್ಪನ್ನದ ಉದ್ದೇಶಿತ ಬಳಕೆ ಮತ್ತು ಚರ್ಚಿಸಬೇಕಾದ ಗುಣಲಕ್ಷಣಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.")}/><ProductGrid language={l}/></div></section>
    <section id="quote-form" className="form-section"><div className="page-shell form-layout"><div className="form-aside"><SectionHeading eyebrow={tx(l,"LET’S DISCUSS YOUR ORDER","ನಿಮ್ಮ ಬೇಡಿಕೆಯನ್ನು ಚರ್ಚಿಸೋಣ")} title={tx(l,"Ask for a product price.","ಉತ್ಪನ್ನದ ದರಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ.")} body={productEnquiryCopy[l]}/><CheckList items={[tx(l,"Choose RRBO, furnace oil, LDO or DFO.","RRBO, ಫರ್ನೇಸ್ ಆಯಿಲ್, LDO ಅಥವಾ DFO ಆರಿಸಿ."),tx(l,"Share your application and required product properties.","ನಿಮ್ಮ ಬಳಕೆ ಮತ್ತು ಅಗತ್ಯ ಉತ್ಪನ್ನದ ಗುಣಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಸಿ."),tx(l,"Discuss quantity, delivery and the relevant test report.","ಪ್ರಮಾಣ, ವಿತರಣೆ ಮತ್ತು ಸಂಬಂಧಿತ ಪರೀಕ್ಷಾ ವರದಿಯನ್ನು ಚರ್ಚಿಸಿ.")]}/></div><EnquiryForm kind="quote" language={l} initialProduct={selectedProduct}/></div></section>
  </PageFrame>;
}
