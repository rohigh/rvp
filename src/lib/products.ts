import { pageHref, type Language } from "./navigation";

export type ProductId = "rrbo" | "furnace-oil" | "ldo" | "dfo";
export type ProductSlug = "re-refined-base-oil" | "furnace-oil" | "light-diesel-oil" | "distilled-fuel-oil";
type Localized = Record<Language, string>;
export interface Product {
  id: ProductId;
  slug: ProductSlug;
  name: Localized;
  shortName: Localized;
  category: Localized;
  description: Localized;
  heading: Localized;
  introduction: Localized;
  applications: readonly Localized[];
  supportingHeading: Localized;
  supportingBody: Localized;
  properties: readonly Localized[];
  primaryCta: Localized;
  secondaryCta: Localized;
  image: string;
  imageAlt: Localized;
}
const bi = (en: string, kn: string): Localized => ({ en, kn });
const density = bi("Density", "ಸಾಂದ್ರತೆ");
const viscosity = bi("Kinematic viscosity", "ಚಲನ ಸ್ನಿಗ್ಧತೆ");
const flashPoint = bi("Flash point", "ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್");
const water = bi("Water content", "ನೀರಿನ ಅಂಶ");
const sulphur = bi("Sulphur content", "ಗಂಧಕದ ಅಂಶ");
const heatValue = bi("Gross calorific value", "ಒಟ್ಟು ಉಷ್ಣ ಮೌಲ್ಯ");
const sediment = bi("Sediment", "ತಳಸೇಡು");

export const products: readonly Product[] = [
  {
    id: "rrbo", slug: "re-refined-base-oil",
    name: bi("Re-Refined Base Oil — RRBO", "ಮರುಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್ — RRBO"),
    shortName: bi("RRBO", "RRBO"),
    category: bi("BASE OIL", "ಬೇಸ್ ಆಯಿಲ್"),
    description: bi("Base oil made from used oil at our Tumakuru plant. For lubricant oil makers, traders and factories.", "ತುಮಕೂರಿನ ನಮ್ಮ ಘಟಕದಲ್ಲಿ ಬಳಸಿದ ತೈಲದಿಂದ ತಯಾರಿಸುವ ಬೇಸ್ ಆಯಿಲ್. ಲೂಬ್ರಿಕಂಟ್ ತೈಲ ತಯಾರಕರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ."),
    heading: bi("Re-Refined Base Oil", "ಮರುಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್"),
    introduction: bi("Re-refined base oil, made from used oil at our Tumakuru plant. For lubricant oil makers, traders and factories.", "ತುಮಕೂರಿನ ನಮ್ಮ ಘಟಕದಲ್ಲಿ ಬಳಸಿದ ತೈಲದಿಂದ ತಯಾರಿಸುವ ಮರುಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್. ಲೂಬ್ರಿಕಂಟ್ ತೈಲ ತಯಾರಕರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ."),
    applications: [bi("Lubricant oil makers", "ಲೂಬ್ರಿಕಂಟ್ ತೈಲ ತಯಾರಕರು"), bi("Oil traders and dealers", "ತೈಲ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ವಿತರಕರು"), bi("Factories that use base oil", "ಬೇಸ್ ಆಯಿಲ್ ಬಳಸುವ ಕಾರ್ಖಾನೆಗಳು")],
    supportingHeading: bi("The details behind your order.", "ನಿಮ್ಮ ಬೇಡಿಕೆಗೆ ಸೂಕ್ತ ವಿವರಗಳು."),
    supportingBody: bi("Tell us your application and required grade. Discuss the product properties and ask for the relevant batch test report before confirming your order.", "ನಿಮ್ಮ ಬಳಕೆ ಮತ್ತು ಅಗತ್ಯ ಗ್ರೇಡ್ ತಿಳಿಸಿ. ಆರ್ಡರ್ ಖಚಿತಪಡಿಸುವ ಮೊದಲು ಉತ್ಪನ್ನದ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಚರ್ಚಿಸಿ, ಸಂಬಂಧಿತ ಬ್ಯಾಚ್‌ನ ಪರೀಕ್ಷಾ ವರದಿಯನ್ನು ಕೇಳಿ."),
    properties: [bi("Kinematic viscosity at 40°C (cSt)", "40°C ನಲ್ಲಿ ಚಲನ ಸ್ನಿಗ್ಧತೆ (cSt)"), bi("Flash point (°C)", "ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್ (°C)"), bi("Colour", "ಬಣ್ಣ"), bi("Water content (%)", "ನೀರಿನ ಅಂಶ (%)"), bi("Total acid number (TAN, mg KOH/g)", "ಒಟ್ಟು ಆಮ್ಲ ಸಂಖ್ಯೆ (TAN, mg KOH/g)")],
    primaryCta: bi("Ask for base oil price", "ಬೇಸ್ ಆಯಿಲ್ ದರಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ"),
    secondaryCta: bi("Discuss your base oil requirement", "ನಿಮ್ಮ ಬೇಸ್ ಆಯಿಲ್ ಅಗತ್ಯವನ್ನು ಚರ್ಚಿಸಿ"),
    image: "/images/storage-stock.webp",
    imageAlt: bi("Large industrial oil storage tanks beneath a clear sky", "ನಿರ್ಮಲ ಆಕಾಶದ ಕೆಳಗೆ ದೊಡ್ಡ ಕೈಗಾರಿಕಾ ತೈಲ ಸಂಗ್ರಹ ಟ್ಯಾಂಕ್‌ಗಳು"),
  },
  {
    id: "furnace-oil", slug: "furnace-oil",
    name: bi("Furnace Oil", "ಫರ್ನೇಸ್ ಆಯಿಲ್"), shortName: bi("Furnace Oil", "ಫರ್ನೇಸ್ ಆಯಿಲ್"),
    category: bi("INDUSTRIAL FUEL", "ಕೈಗಾರಿಕಾ ಇಂಧನ"),
    description: bi("Industrial fuel for compatible boilers, furnaces and kilns. Discuss your heating requirement, quantity and delivery location.", "ಹೊಂದುವ ಬಾಯ್ಲರ್‌ಗಳು, ಫರ್ನೇಸ್‌ಗಳು ಮತ್ತು ಗೂಡುಗಳಿಗೆ ಕೈಗಾರಿಕಾ ಇಂಧನ. ನಿಮ್ಮ ತಾಪನದ ಅಗತ್ಯ, ಪ್ರಮಾಣ ಮತ್ತು ವಿತರಣೆಯ ಸ್ಥಳವನ್ನು ತಿಳಿಸಿ."),
    heading: bi("Furnace oil for industrial heating.", "ಕೈಗಾರಿಕಾ ತಾಪನಕ್ಕಾಗಿ ಫರ್ನೇಸ್ ಆಯಿಲ್."),
    introduction: bi("Furnace oil is used in industrial equipment that needs sustained process heat. Share your burner details, current fuel and operating requirements with RVP to discuss product suitability and supply.", "ನಿರಂತರ ಪ್ರಕ್ರಿಯಾ ತಾಪದ ಅಗತ್ಯವಿರುವ ಕೈಗಾರಿಕಾ ಉಪಕರಣಗಳಲ್ಲಿ ಫರ್ನೇಸ್ ಆಯಿಲ್ ಬಳಸಲಾಗುತ್ತದೆ. ಉತ್ಪನ್ನದ ಸೂಕ್ತತೆ ಮತ್ತು ಪೂರೈಕೆಯನ್ನು ಚರ್ಚಿಸಲು ನಿಮ್ಮ ಬರ್ನರ್‌ನ ವಿವರಗಳು, ಈಗ ಬಳಸುತ್ತಿರುವ ಇಂಧನ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಅಗತ್ಯಗಳನ್ನು ಆರ್‌ವಿಪಿಗೆ ತಿಳಿಸಿ."),
    applications: [bi("Steam boilers and industrial furnaces.", "ಉಗಿ ಬಾಯ್ಲರ್‌ಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಫರ್ನೇಸ್‌ಗಳು."), bi("Kilns and thermic fluid heaters.", "ಗೂಡುಗಳು ಮತ್ತು ಥರ್ಮಿಕ್ ಫ್ಲೂಯಿಡ್ ಹೀಟರ್‌ಗಳು."), bi("Drying, curing and other process-heating equipment.", "ಒಣಗಿಸುವ, ಕ್ಯೂರಿಂಗ್ ಮತ್ತು ಇತರ ಪ್ರಕ್ರಿಯಾ ತಾಪನ ಉಪಕರಣಗಳು.")],
    supportingHeading: bi("Choose the fuel around your equipment.", "ನಿಮ್ಮ ಉಪಕರಣಕ್ಕೆ ಹೊಂದುವ ಇಂಧನವನ್ನು ಆರಿಸಿ."),
    supportingBody: bi("Fuel selection depends on your burner, storage system and operating temperature. Before placing an order, discuss viscosity, handling requirements and the relevant batch test results.", "ಇಂಧನದ ಆಯ್ಕೆ ನಿಮ್ಮ ಬರ್ನರ್, ಸಂಗ್ರಹ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ತಾಪಮಾನವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಸ್ನಿಗ್ಧತೆ, ನಿರ್ವಹಣೆಯ ಅಗತ್ಯಗಳು ಮತ್ತು ಸಂಬಂಧಿತ ಬ್ಯಾಚ್‌ನ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳನ್ನು ಚರ್ಚಿಸಿ."),
    properties: [density, viscosity, flashPoint, water, sulphur, heatValue, bi("Pour point", "ಹರಿವು ಬಿಂದು")],
    primaryCta: bi("Ask for furnace oil price", "ಫರ್ನೇಸ್ ಆಯಿಲ್ ದರಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ"),
    secondaryCta: bi("Discuss your requirement", "ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಚರ್ಚಿಸಿ"),
    image: "/images/refinery-detail-stock.webp",
    imageAlt: bi("Industrial plant with towers and connected pipework", "ಗೋಪುರಗಳು ಮತ್ತು ಸಂಪರ್ಕಿತ ಕೊಳವೆಗಳಿರುವ ಕೈಗಾರಿಕಾ ಘಟಕ"),
  },
  {
    id: "ldo", slug: "light-diesel-oil",
    name: bi("Light Diesel Oil — LDO", "ಲೈಟ್ ಡೀಸೆಲ್ ಆಯಿಲ್ — LDO"), shortName: bi("LDO", "LDO"),
    category: bi("INDUSTRIAL FUEL", "ಕೈಗಾರಿಕಾ ಇಂಧನ"),
    description: bi("Industrial heating fuel for compatible burners, boilers and heaters. Discuss product requirements and current pricing.", "ಹೊಂದುವ ಬರ್ನರ್‌ಗಳು, ಬಾಯ್ಲರ್‌ಗಳು ಮತ್ತು ಹೀಟರ್‌ಗಳಿಗೆ ಕೈಗಾರಿಕಾ ತಾಪನ ಇಂಧನ. ಉತ್ಪನ್ನದ ಅಗತ್ಯಗಳು ಮತ್ತು ಪ್ರಸ್ತುತ ದರವನ್ನು ಚರ್ಚಿಸಿ."),
    heading: bi("LDO for your industrial heating needs.", "ನಿಮ್ಮ ಕೈಗಾರಿಕಾ ತಾಪನದ ಅಗತ್ಯಗಳಿಗೆ LDO."),
    introduction: bi("Light diesel oil is used in industrial heating applications with suitable fuel systems. Tell RVP about your equipment, current fuel and consumption so we can discuss the product requirements for your operation.", "ಸೂಕ್ತ ಇಂಧನ ವ್ಯವಸ್ಥೆಯಿರುವ ಕೈಗಾರಿಕಾ ತಾಪನ ಉಪಯೋಗಗಳಲ್ಲಿ ಲೈಟ್ ಡೀಸೆಲ್ ಆಯಿಲ್ ಬಳಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಕಾರ್ಯಾಚರಣೆಗೆ ಬೇಕಾದ ಉತ್ಪನ್ನದ ಅಗತ್ಯಗಳನ್ನು ಚರ್ಚಿಸಲು ಉಪಕರಣಗಳು, ಈಗಿನ ಇಂಧನ ಮತ್ತು ಬಳಕೆಯ ಪ್ರಮಾಣವನ್ನು ಆರ್‌ವಿಪಿಗೆ ತಿಳಿಸಿ."),
    applications: [bi("Compatible steam boilers and industrial burners.", "ಹೊಂದುವ ಉಗಿ ಬಾಯ್ಲರ್‌ಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಬರ್ನರ್‌ಗಳು."), bi("Thermic fluid heaters.", "ಥರ್ಮಿಕ್ ಫ್ಲೂಯಿಡ್ ಹೀಟರ್‌ಗಳು."), bi("Drying, curing and process-heating systems.", "ಒಣಗಿಸುವ, ಕ್ಯೂರಿಂಗ್ ಮತ್ತು ಪ್ರಕ್ರಿಯಾ ತಾಪನ ವ್ಯವಸ್ಥೆಗಳು.")],
    supportingHeading: bi("Compare more than the price per litre.", "ಪ್ರತಿ ಲೀಟರ್ ದರದ ಜೊತೆಗೆ ಇತರ ಅಂಶಗಳನ್ನೂ ಹೋಲಿಸಿ."),
    supportingBody: bi("Consider fuel consumption, heat value, burner settings and handling requirements alongside the delivered price. Ask about the relevant test report before confirming your order.", "ವಿತರಣೆಯ ದರದ ಜೊತೆಗೆ ಇಂಧನ ಬಳಕೆ, ಉಷ್ಣ ಮೌಲ್ಯ, ಬರ್ನರ್‌ನ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ನಿರ್ವಹಣೆಯ ಅಗತ್ಯಗಳನ್ನು ಪರಿಗಣಿಸಿ. ಆರ್ಡರ್ ಖಚಿತಪಡಿಸುವ ಮೊದಲು ಸಂಬಂಧಿತ ಪರೀಕ್ಷಾ ವರದಿಯನ್ನು ಕೇಳಿ."),
    properties: [density, viscosity, flashPoint, water, sulphur, heatValue, sediment],
    primaryCta: bi("Ask for LDO price", "LDO ದರಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ"),
    secondaryCta: bi("Compare your fuel requirement", "ನಿಮ್ಮ ಇಂಧನದ ಅಗತ್ಯಗಳನ್ನು ಹೋಲಿಸಿ"),
    image: "/images/processing-stock.webp",
    imageAlt: bi("Metal pipes and processing equipment inside an industrial facility", "ಕೈಗಾರಿಕಾ ಘಟಕದ ಒಳಗಿನ ಲೋಹದ ಕೊಳವೆಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಉಪಕರಣಗಳು"),
  },
  {
    id: "dfo", slug: "distilled-fuel-oil",
    name: bi("Distilled Fuel Oil — DFO", "ಡಿಸ್ಟಿಲ್ಡ್ ಫ್ಯೂಯಲ್ ಆಯಿಲ್ — DFO"), shortName: bi("DFO", "DFO"),
    category: bi("INDUSTRIAL FUEL", "ಕೈಗಾರಿಕಾ ಇಂಧನ"),
    description: bi("Distilled fuel oil for suitable industrial heating applications. Confirm the required properties and intended use before ordering.", "ಸೂಕ್ತ ಕೈಗಾರಿಕಾ ತಾಪನ ಉಪಯೋಗಗಳಿಗೆ ಡಿಸ್ಟಿಲ್ಡ್ ಫ್ಯೂಯಲ್ ಆಯಿಲ್. ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಅಗತ್ಯ ಗುಣಲಕ್ಷಣಗಳು ಮತ್ತು ಉದ್ದೇಶಿತ ಬಳಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."),
    heading: bi("DFO for compatible industrial burners.", "ಹೊಂದುವ ಕೈಗಾರಿಕಾ ಬರ್ನರ್‌ಗಳಿಗಾಗಿ DFO."),
    introduction: bi("Distilled fuel oil is an industrial fuel option whose properties depend on the supplied grade and batch. Share your burner type, heating requirement and required quantity with RVP to discuss suitability.", "ಡಿಸ್ಟಿಲ್ಡ್ ಫ್ಯೂಯಲ್ ಆಯಿಲ್‌ನ ಗುಣಲಕ್ಷಣಗಳು ಪೂರೈಸುವ ಗ್ರೇಡ್ ಮತ್ತು ಬ್ಯಾಚ್ ಅನ್ನು ಅವಲಂಬಿಸಿರುತ್ತವೆ. ಇದು ನಿಮ್ಮ ಉಪಕರಣಕ್ಕೆ ಸೂಕ್ತವೇ ಎಂಬುದನ್ನು ಚರ್ಚಿಸಲು ಬರ್ನರ್‌ನ ಪ್ರಕಾರ, ತಾಪನದ ಅಗತ್ಯ ಮತ್ತು ಬೇಕಾದ ಪ್ರಮಾಣವನ್ನು ಆರ್‌ವಿಪಿಗೆ ತಿಳಿಸಿ."),
    applications: [bi("Compatible industrial furnaces and burners.", "ಹೊಂದುವ ಕೈಗಾರಿಕಾ ಫರ್ನೇಸ್‌ಗಳು ಮತ್ತು ಬರ್ನರ್‌ಗಳು."), bi("Boilers and thermic fluid heaters, subject to equipment suitability.", "ಉಪಕರಣದ ಹೊಂದಾಣಿಕೆಗೆ ಅನುಗುಣವಾಗಿ ಬಾಯ್ಲರ್‌ಗಳು ಮತ್ತು ಥರ್ಮಿಕ್ ಫ್ಲೂಯಿಡ್ ಹೀಟರ್‌ಗಳು."), bi("Other industrial process-heating applications.", "ಇತರ ಕೈಗಾರಿಕಾ ಪ್ರಕ್ರಿಯಾ ತಾಪನ ಉಪಯೋಗಗಳು.")],
    supportingHeading: bi("Know the properties of the fuel you order.", "ಆರ್ಡರ್ ಮಾಡುವ ಇಂಧನದ ಗುಣಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಯಿರಿ."),
    supportingBody: bi("Confirm viscosity, flash point, water content and heat value against the relevant test report. DFO and furnace oil should be assessed separately against your equipment requirements.", "ಸಂಬಂಧಿತ ಪರೀಕ್ಷಾ ವರದಿಯಲ್ಲಿ ಸ್ನಿಗ್ಧತೆ, ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್, ನೀರಿನ ಅಂಶ ಮತ್ತು ಉಷ್ಣ ಮೌಲ್ಯವನ್ನು ಪರಿಶೀಲಿಸಿ. ನಿಮ್ಮ ಉಪಕರಣದ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ DFO ಮತ್ತು ಫರ್ನೇಸ್ ಆಯಿಲ್ ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ."),
    properties: [density, viscosity, flashPoint, water, sulphur, heatValue, sediment, bi("Ash content", "ಬೂದಿಯ ಅಂಶ")],
    primaryCta: bi("Ask for DFO price", "DFO ದರಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ"),
    secondaryCta: bi("Discuss product specifications", "ಉತ್ಪನ್ನದ ವಿಶೇಷಣಗಳನ್ನು ಚರ್ಚಿಸಿ"),
    image: "/images/refinery-stock-1400.webp",
    imageAlt: bi("Refinery towers and industrial pipes beneath a blue sky", "ನೀಲಿ ಆಕಾಶದ ಅಡಿಯಲ್ಲಿ ಶುದ್ಧೀಕರಣ ಗೋಪುರಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಕೊಳವೆಗಳು"),
  },
];
export const productEnquiryCopy = bi("Tell us the product, quantity, delivery location and intended application. Include any specifications your equipment or purchasing team requires.", "ಉತ್ಪನ್ನ, ಪ್ರಮಾಣ, ವಿತರಣೆಯ ಸ್ಥಳ ಮತ್ತು ಉದ್ದೇಶಿತ ಬಳಕೆಯನ್ನು ತಿಳಿಸಿ. ನಿಮ್ಮ ಉಪಕರಣ ಅಥವಾ ಖರೀದಿ ತಂಡಕ್ಕೆ ಅಗತ್ಯವಿರುವ ವಿಶೇಷಣಗಳನ್ನೂ ಸೇರಿಸಿ.");
export const productPath = (product: Product) => `products/${product.slug}`;
export const productQuoteHref = (language: Language, product: Product) => pageHref(language, productPath(product), "quote-form");
export const findProductBySlug = (slug?: string) => products.find(product => product.slug === slug);
export const isProductId = (id: string | null): id is ProductId => products.some(product => product.id === id);
