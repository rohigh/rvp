import type { Language } from "@/lib/navigation";
import type { Product } from "@/lib/products";
import { tx } from "@/lib/company";
import { productSpecifications, type SpecificationTableData } from "@/lib/product-specifications";
import { Reveal } from "./shared";
import "./technical-specifications.css";

export function SpecificationTable({ data, language }: { data: SpecificationTableData; language: Language }) {
  const hintId = `${data.id}-scroll-hint`;
  return <div className={`technical-table-block technical-table--${data.layout}`} data-specification={data.id}>
    <p id={hintId} className="technical-scroll-hint">{tx(language,"Scroll horizontally to view all columns.","ಎಲ್ಲ ಅಂಕಣಗಳನ್ನು ನೋಡಲು ಅಡ್ಡವಾಗಿ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ.")}</p>
    <div className="technical-table-scroll" role="region" aria-label={data.caption[language]} aria-describedby={hintId} tabIndex={0}>
      <table className="technical-table">
        <caption>{data.caption[language]}</caption>
        <thead><tr>{data.columns.map((column,index)=><th key={index} scope="col">{column[language]}</th>)}</tr></thead>
        <tbody>{data.rows.map(row=><tr key={row.property.en}><th scope="row">{row.property[language]}</th>{row.values.map((value,index)=><td key={index}>{value[language]}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <div className="technical-table-notes">{data.notes.map((note,index)=><p key={index}>{note[language]}</p>)}</div>
  </div>;
}

export default function TechnicalSpecifications({ product, language }: { product: Product; language: Language }) {
  const data=productSpecifications[product.id];
  return <section id="specifications" className="site-section technical-specifications" aria-labelledby="specifications-heading">
    <div className="page-shell">
      <Reveal className="section-heading"><p className="site-eyebrow">{product.shortName[language]}</p><h2 id="specifications-heading">{tx(language,"Technical specifications","ತಾಂತ್ರಿಕ ವಿಶೇಷಣಗಳು")}</h2><p className="section-intro">{data.introduction[language]}</p></Reveal>
      {data.tables.map(table=><SpecificationTable key={table.id} data={table} language={language}/>)}
    </div>
  </section>;
}
