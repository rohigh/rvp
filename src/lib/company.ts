import type { Language } from "./navigation";

export const company = {
  name: "RVP Refinery",
  founder: "Ravi Varun Prasad",
  founded: "2018",
  gstin: "29AXEPV1672Q1ZI",
  address: "Sy. No. 26, Shed No. 2, Plot No. 97-B, Vasanthanarasapura Industrial Area, Nagenahalli, Kora Hobli, Tumakuru Taluk, Tumakuru, Karnataka – 572128",
  phone: "+919176642399",
  phoneDisplay: "+91 91766 42399",
  whatsapp: "919176642399",
  email: "rvp.tumkur@gmail.com",
  mapUrl: "",
  enquiryEndpoint: "",
};
export const tx = (language: Language, en: string, kn: string) => language === "en" ? en : kn;
export const addressText = (language: Language) => tx(language, company.address, "ಸರ್ವೆ ನಂ. 26, ಶೆಡ್ ನಂ. 2, ಪ್ಲಾಟ್ ನಂ. 97-B, ವಸಂತನರಸಾಪುರ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ, ನಾಗೇನಹಳ್ಳಿ, ಕೋರ ಹೋಬಳಿ, ತುಮಕೂರು ತಾಲ್ಲೂಕು, ತುಮಕೂರು, ಕರ್ನಾಟಕ – 572128");
export const mapsHref = () => company.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;
export const whatsappHref = (message = "") => `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
export const metadata: Record<string, { en: [string, string]; kn: [string, string] }> = {
  "": { en: ["RVP Refinery – Used Oil Buyer in Tumakuru", "Used oil collection and re-refining in Tumakuru since 2018. Explore RRBO, furnace oil, LDO and DFO for your business."], kn: ["ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ – ತುಮಕೂರಿನಲ್ಲಿ ಬಳಸಿದ ತೈಲ ಖರೀದಿ", "2018ರಿಂದ ತುಮಕೂರಿನಲ್ಲಿ ಬಳಸಿದ ತೈಲ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಮರುಶುದ್ಧೀಕರಣ. ನಿಮ್ಮ ಉದ್ಯಮಕ್ಕಾಗಿ RRBO, ಫರ್ನೇಸ್ ಆಯಿಲ್, LDO ಮತ್ತು DFO."] },
  "used-oil-collection": { en: ["Sell Used Engine Oil in Tumakuru – RVP Refinery", "We buy used engine and machine oil from garages, transport companies and factories. Discuss price, pickup and a GST bill."], kn: ["ತುಮಕೂರಿನಲ್ಲಿ ಬಳಸಿದ ತೈಲ ಮಾರಾಟ – ಆರ್‌ವಿಪಿ", "ಗ್ಯಾರೇಜುಗಳು, ಸಾರಿಗೆ ಕಂಪನಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಂದ ಬಳಸಿದ ತೈಲ ಖರೀದಿ. ಸಂಗ್ರಹಣೆಗಾಗಿ ವಿಚಾರಿಸಿ."] },
  products: { en: ["Base Oil & Industrial Fuels — RVP Refinery", "Explore RRBO, furnace oil, light diesel oil and distilled fuel oil. Discuss your application, product specifications, quantity and delivery."], kn: ["ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಇಂಧನಗಳು — ಆರ್‌ವಿಪಿ", "RRBO, ಫರ್ನೇಸ್ ಆಯಿಲ್, LDO ಮತ್ತು DFO ಬಗ್ಗೆ ತಿಳಿಯಿರಿ. ಬಳಕೆ, ಉತ್ಪನ್ನದ ವಿಶೇಷಣಗಳು, ಪ್ರಮಾಣ ಮತ್ತು ವಿತರಣೆಯನ್ನು ಚರ್ಚಿಸಿ."] },
  about: { en: ["About RVP Refinery – Tumakuru, Since 2018", "RVP Refinery buys and cleans used oil in Tumakuru, Karnataka. Read our story and learn about our work."], kn: ["ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಬಗ್ಗೆ – 2018ರಿಂದ ತುಮಕೂರಿನಲ್ಲಿ", "ನಮ್ಮ ಕಥೆ, ಸ್ವಂತ ಘಟಕ ಮತ್ತು ಬಳಸಿದ ತೈಲದ ಮರುಬಳಕೆಯ ಕೆಲಸದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ."] },
  contact: { en: ["Contact RVP Refinery – Tumakuru, Karnataka", "Sell used oil or enquire about RRBO, furnace oil, LDO and DFO. Find RVP Refinery’s contact details and discuss your requirement."], kn: ["ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಸಂಪರ್ಕ – ತುಮಕೂರು", "ಬಳಸಿದ ತೈಲ ಮಾರಾಟ ಅಥವಾ RRBO, ಫರ್ನೇಸ್ ಆಯಿಲ್, LDO ಮತ್ತು DFO ಖರೀದಿಗಾಗಿ ವಿಚಾರಿಸಿ. ನಮ್ಮ ಸಂಪರ್ಕ ವಿವರಗಳು ಮತ್ತು ವಿಳಾಸವನ್ನು ನೋಡಿ."] },
  blogs: { en: ["Used Oil Guides – RVP Refinery Blog", "Easy guides to storing, selling and reusing used oil, and understanding re-refined base oil."], kn: ["ಬಳಸಿದ ತೈಲದ ಮಾರ್ಗದರ್ಶಿಗಳು – ಆರ್‌ವಿಪಿ ಬ್ಲಾಗ್", "ಬಳಸಿದ ತೈಲದ ಸಂಗ್ರಹಣೆ, ಮಾರಾಟ, ಮರುಬಳಕೆ ಮತ್ತು ಬೇಸ್ ಆಯಿಲ್ ಬಗ್ಗೆ ಸರಳ ಲೇಖನಗಳು."] },
};
export function setPageMeta(title: string, description: string) {
  document.title = title;
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.append(meta); }
  meta.content = description;
}
