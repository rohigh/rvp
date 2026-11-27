import type { Language } from "./navigation";
import type { ProductId } from "./products";

export type SpecificationText = Readonly<Record<Language, string>>;
export interface SpecificationRow {
  property: SpecificationText;
  values: readonly SpecificationText[];
}
export interface SpecificationTableData {
  id: string;
  layout: "grades" | "comparison" | "performance" | "screening" | "coa";
  caption: SpecificationText;
  columns: readonly SpecificationText[];
  rows: readonly SpecificationRow[];
  notes: readonly SpecificationText[];
}
export interface ProductSpecificationData {
  introduction: SpecificationText;
  tables: readonly SpecificationTableData[];
}
const bi = (en: string, kn: string): SpecificationText => ({ en, kn });
const same = (value: string): SpecificationText => bi(value, value);
const propertyColumn = bi("Property", "ಗುಣಲಕ್ಷಣ");
const methodColumn = bi("Test method", "ಪರೀಕ್ಷಾ ವಿಧಾನ");

export const productSpecifications: Record<ProductId, ProductSpecificationData> = {
  rrbo: {
    introduction: bi("Reference viscosity-grade targets for comparison. Confirm the actual supplied grade and results against its batch Certificate of Analysis (COA).", "ಹೋಲಿಕೆಗಾಗಿ ನೀಡಿರುವ ಸ್ನಿಗ್ಧತಾ ಗ್ರೇಡ್‌ಗಳ ಉಲ್ಲೇಖ ಗುರಿಗಳು. ಪೂರೈಸುವ ನಿಜವಾದ ಗ್ರೇಡ್ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ಆ ಬ್ಯಾಚ್‌ನ ವಿಶ್ಲೇಷಣಾ ಪ್ರಮಾಣಪತ್ರದ (COA) ಆಧಾರದಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."),
    tables: [{
      id: "rrbo-grades", layout: "grades",
      caption: bi("RRBO reference grade comparison", "RRBO ಗ್ರೇಡ್‌ಗಳ ಉಲ್ಲೇಖ ಹೋಲಿಕೆ"),
      columns: [propertyColumn, same("SN70"), same("SN150"), same("SN350"), same("SN500"), methodColumn],
      rows: [
      { property: bi("Appearance", "ನೋಟ"), values: [bi("Clear / bright", "ಸ್ವಚ್ಛ / ಹೊಳಪುಳ್ಳ"), bi("Clear / bright", "ಸ್ವಚ್ಛ / ಹೊಳಪುಳ್ಳ"), bi("Clear / bright", "ಸ್ವಚ್ಛ / ಹೊಳಪುಳ್ಳ"), bi("Clear / bright", "ಸ್ವಚ್ಛ / ಹೊಳಪುಳ್ಳ"), bi("Visual", "ದೃಶ್ಯ ಪರಿಶೀಲನೆ")] },
      { property: bi("ASTM colour, maximum", "ASTM ಬಣ್ಣ, ಗರಿಷ್ಠ"), values: [same("1.5"), same("1.5"), same("2.0"), same("2.5"), same("D1500")] },
      { property: bi("Density @ 15 °C, kg/L", "ಸಾಂದ್ರತೆ @ 15 °C, kg/L"), values: [same("0.845-0.860"), same("0.855-0.870"), same("0.865-0.880"), same("0.875-0.890"), same("D4052")] },
      { property: bi("Kinematic viscosity @ 40 °C, mm²/s", "ಚಲನ ಸ್ನಿಗ್ಧತೆ @ 40 °C, mm²/s"), values: [same("10-15"), same("28-35"), same("60-75"), same("90-110"), same("D445")] },
      { property: bi("Kinematic viscosity @ 100 °C, mm²/s", "ಚಲನ ಸ್ನಿಗ್ಧತೆ @ 100 °C, mm²/s"), values: [same("2.5-3.5"), same("5.0-6.0"), same("8.5-10.5"), same("10.5-12.5"), same("D445")] },
      { property: bi("Viscosity index, minimum", "ಸ್ನಿಗ್ಧತಾ ಸೂಚ್ಯಂಕ, ಕನಿಷ್ಠ"), values: [same("95"), same("95"), same("95"), same("95"), same("D2270")] },
      { property: bi("Flash point COC, °C, minimum", "ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್ COC, °C, ಕನಿಷ್ಠ"), values: [same("180"), same("210"), same("220"), same("230"), same("D92")] },
      { property: bi("Pour point, °C, maximum", "ಪೋರ್ ಪಾಯಿಂಟ್, °C, ಗರಿಷ್ಠ"), values: [same("-6"), same("-6"), same("-6"), same("-6"), same("D97")] },
      { property: bi("Water content, % m/m, maximum", "ನೀರಿನ ಅಂಶ, % m/m, ಗರಿಷ್ಠ"), values: [same("0.05"), same("0.05"), same("0.05"), same("0.05"), same("D6304")] },
      { property: bi("Total acid number, mg KOH/g, maximum", "ಒಟ್ಟು ಆಮ್ಲ ಸಂಖ್ಯೆ, mg KOH/g, ಗರಿಷ್ಠ"), values: [same("0.05"), same("0.05"), same("0.05"), same("0.05"), same("D664")] },
      { property: bi("Total sulphur, % m/m, maximum", "ಒಟ್ಟು ಗಂಧಕ, % m/m, ಗರಿಷ್ಠ"), values: [same("0.10"), same("0.10"), same("0.10"), same("0.10"), same("D4294")] },
      { property: bi("Ash, % m/m, maximum", "ಬೂದಿ, % m/m, ಗರಿಷ್ಠ"), values: [same("0.01"), same("0.01"), same("0.01"), same("0.01"), same("D482")] },
      ],
      notes: [
        bi("These are reference grade targets, not measured RVP batch results. Confirm grade availability and the representative batch COA before ordering.", "ಇವು ಉಲ್ಲೇಖ ಗ್ರೇಡ್ ಗುರಿಗಳು; ಆರ್‌ವಿಪಿ ಬ್ಯಾಚ್‌ನಲ್ಲಿ ಅಳೆಯಲಾದ ಫಲಿತಾಂಶಗಳಲ್ಲ. ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಗ್ರೇಡ್ ಲಭ್ಯತೆ ಮತ್ತು ಸಂಬಂಧಿತ ಬ್ಯಾಚ್‌ನ COA ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."),
        bi("TAN ≤0.03 mg KOH/g and lighter colour are separate reference improvement goals where commercially achievable. The table retains the reference maximum of 0.05 mg KOH/g.", "TAN ≤0.03 mg KOH/g ಮತ್ತು ತಿಳಿಯಾದ ಬಣ್ಣವು ವಾಣಿಜ್ಯವಾಗಿ ಸಾಧಿಸಬಹುದಾದ ಸಂದರ್ಭಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ಸುಧಾರಣಾ ಉಲ್ಲೇಖ ಗುರಿಗಳಾಗಿವೆ. ಕೋಷ್ಟಕದಲ್ಲಿ ಉಲ್ಲೇಖ ಗರಿಷ್ಠ ಮಿತಿ 0.05 mg KOH/g ಉಳಿಸಲಾಗಿದೆ."),
        bi("No API base-oil group classification is assigned by this comparison. Reference basis: the supplied RRBO viscosity-grade specification and ASTM test methods.", "ಈ ಹೋಲಿಕೆಯು ಯಾವುದೇ API ಬೇಸ್ ಆಯಿಲ್ ಗುಂಪಿನ ವರ್ಗೀಕರಣವನ್ನು ನೀಡುವುದಿಲ್ಲ. ಉಲ್ಲೇಖ ಆಧಾರ: ಒದಗಿಸಿದ RRBO ಸ್ನಿಗ್ಧತಾ ಗ್ರೇಡ್ ವಿಶೇಷಣಗಳು ಮತ್ತು ASTM ಪರೀಕ್ಷಾ ವಿಧಾನಗಳು."),
      ],
    }],
  },
  ldo: {
    introduction: bi("Standard-reference requirements and separate working targets are shown for comparison. These figures are not RVP batch results or a claim of BIS certification or product conformity.", "ಹೋಲಿಕೆಗಾಗಿ ಮಾನದಂಡದ ಉಲ್ಲೇಖ ಅವಶ್ಯಕತೆಗಳು ಮತ್ತು ಪ್ರತ್ಯೇಕ ಕಾರ್ಯ ಗುರಿಗಳನ್ನು ನೀಡಲಾಗಿದೆ. ಈ ಅಂಕಿಗಳು ಆರ್‌ವಿಪಿ ಬ್ಯಾಚ್‌ನ ಫಲಿತಾಂಶಗಳಲ್ಲ; BIS ಪ್ರಮಾಣೀಕರಣ ಅಥವಾ ಉತ್ಪನ್ನದ ಮಾನದಂಡ ಅನುಸರಣೆಯ ಹೇಳಿಕೆಯೂ ಅಲ್ಲ."),
    tables: [{
      id: "ldo-reference", layout: "comparison",
      caption: bi("LDO standard references and working targets", "LDO ಮಾನದಂಡದ ಉಲ್ಲೇಖಗಳು ಮತ್ತು ಕಾರ್ಯ ಗುರಿಗಳು"),
      columns: [bi("Characteristic", "ಲಕ್ಷಣ"), bi("Standard reference requirement", "ಮಾನದಂಡದ ಉಲ್ಲೇಖ ಅವಶ್ಯಕತೆ"), bi("Reference working target", "ಕಾರ್ಯ ಗುರಿಯ ಉಲ್ಲೇಖ"), methodColumn],
      rows: [
      { property: bi("Acid number, mg KOH/g, maximum", "ಆಮ್ಲ ಸಂಖ್ಯೆ, mg KOH/g, ಗರಿಷ್ಠ"), values: [same("0.5"), same("≤0.5"), same("IS 1448 P:2")] },
      { property: bi("Ash, % mass, maximum", "ಬೂದಿ, % mass, ಗರಿಷ್ಠ"), values: [same("0.02"), same("≤0.02"), same("IS 1448 P:4")] },
      { property: bi("Carbon residue, whole sample, % mass", "ಕಾರ್ಬನ್ ಅವಶೇಷ, ಪೂರ್ಣ ಮಾದರಿ, % mass"), values: [same("≤1.5"), bi("≤1.0 (goal)", "≤1.0 (ಗುರಿ)"), same("IS 1448 P:8")] },
      { property: bi("Pour point, °C", "ಪೋರ್ ಪಾಯಿಂಟ್, °C"), values: [bi("≤12 winter; ≤21 summer", "≤12 ಚಳಿಗಾಲ; ≤21 ಬೇಸಿಗೆ"), bi("≤12 year-round (goal)", "≤12 ವರ್ಷಪೂರ್ತಿ (ಗುರಿ)"), same("IS 1448 P:10")] },
      { property: bi("Copper corrosion, 3h / 100 °C", "ತಾಮ್ರದ ತುಕ್ಕು, 3h / 100 °C"), values: [bi("Not worse than No. 2", "No. 2ಕ್ಕಿಂತ ಕೆಟ್ಟದಾಗಿರಬಾರದು"), bi("No. 2 or better", "No. 2 ಅಥವಾ ಉತ್ತಮ"), same("IS 1448 P:15")] },
      { property: bi("Flash point (PMC), °C, minimum", "ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್ (PMC), °C, ಕನಿಷ್ಠ"), values: [same("66"), bi("≥70 (goal)", "≥70 (ಗುರಿ)"), same("IS 1448 P:21")] },
      { property: bi("Kinematic viscosity @ 40 °C, mm²/s", "ಚಲನ ಸ್ನಿಗ್ಧತೆ @ 40 °C, mm²/s"), values: [same("2.5-15.0"), same("2.5-15.0"), same("IS 1448 P:25")] },
      { property: bi("Sediment, % mass, maximum", "ತಳಸೇಡು, % mass, ಗರಿಷ್ಠ"), values: [same("0.10"), bi("≤0.05 (goal)", "≤0.05 (ಗುರಿ)"), same("IS 1448 P:30")] },
      { property: bi("Density @ 15 °C, kg/m3", "ಸಾಂದ್ರತೆ @ 15 °C, kg/m3"), values: [bi("Report", "ವರದಿಯಲ್ಲಿ ತಿಳಿಸಬೇಕು"), bi("Report on COA", "COAಯಲ್ಲಿ ತಿಳಿಸಬೇಕು"), same("IS 1448 P:16")] },
      { property: bi("Water content, % vol, maximum", "ನೀರಿನ ಅಂಶ, % vol, ಗರಿಷ್ಠ"), values: [same("0.25"), bi("≤0.10 (goal)", "≤0.10 (ಗುರಿ)"), same("IS 1448 P:40")] },
      { property: bi("Total sulphur, % mass", "ಒಟ್ಟು ಗಂಧಕ, % mass"), values: [same("0.005-1.50*"), bi("0.005-1.00 (goal)*", "0.005-1.00 (ಗುರಿ)*"), same("ASTM D4294")] },
      ],
      notes: [
        bi("Reference standard: IS 15770:2021, as cited in the supplied reference. Winter means November through February; summer is the remainder of the year.", "ಉಲ್ಲೇಖ ಮಾನದಂಡ: ಒದಗಿಸಿದ ಉಲ್ಲೇಖದಲ್ಲಿ ಸೂಚಿಸಿರುವ IS 15770:2021. ಚಳಿಗಾಲ ಎಂದರೆ ನವೆಂಬರ್‌ನಿಂದ ಫೆಬ್ರವರಿವರೆಗೆ; ವರ್ಷದ ಉಳಿದ ಅವಧಿಯನ್ನು ಬೇಸಿಗೆ ಎಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ."),
        bi("*The standard-reference table lists 0.005-1.50% sulphur by mass. Lower sulphur or other emission-related limits may apply by purchaser, permit and location. The 0.005-1.00% working target is a tighter reference goal, not a measured batch result.", "*ಮಾನದಂಡದ ಉಲ್ಲೇಖ ಕೋಷ್ಟಕದಲ್ಲಿ ದ್ರವ್ಯರಾಶಿಯ ಆಧಾರದಲ್ಲಿ 0.005-1.50% ಗಂಧಕವನ್ನು ನೀಡಲಾಗಿದೆ. ಖರೀದಿದಾರರು, ಅನುಮತಿ ಮತ್ತು ಸ್ಥಳಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಇನ್ನಷ್ಟು ಕಡಿಮೆ ಗಂಧಕ ಅಥವಾ ಇತರ ಹೊರಸೂಸುವಿಕೆ ಮಿತಿಗಳು ಅನ್ವಯಿಸಬಹುದು. 0.005-1.00% ಕಾರ್ಯ ಗುರಿಯು ಕಟ್ಟುನಿಟ್ಟಿನ ಉಲ್ಲೇಖ ಗುರಿ; ಅಳೆಯಲಾದ ಬ್ಯಾಚ್ ಫಲಿತಾಂಶವಲ್ಲ."),
        bi("Goals remain distinct from standard-reference requirements. Confirm the complete batch COA and suitability for industrial heating before ordering. Source basis: IndianOil-hosted IS 15770:2021 Table 1 and BIS product manual PM/15770/01 (Dec 2024), as cited in the supplied document.", "ಗುರಿಗಳು ಮತ್ತು ಮಾನದಂಡದ ಉಲ್ಲೇಖ ಅವಶ್ಯಕತೆಗಳು ಪ್ರತ್ಯೇಕವಾಗಿವೆ. ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಸಂಪೂರ್ಣ ಬ್ಯಾಚ್ COA ಮತ್ತು ಕೈಗಾರಿಕಾ ತಾಪನದ ಸೂಕ್ತತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಮೂಲ ಆಧಾರ: ಒದಗಿಸಿದ ದಾಖಲೆಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿರುವ IndianOil ಪ್ರಕಟಿತ IS 15770:2021 Table 1 ಮತ್ತು BIS ಉತ್ಪನ್ನ ಕೈಪಿಡಿ PM/15770/01 (ಡಿಸೆಂಬರ್ 2024)."),
      ],
    }],
  },
  dfo: {
    introduction: bi("Reference engineering targets include provisional ranges, preferred values and application-dependent limits. Confirm actual batch results and equipment suitability against the supplied COA.", "ಎಂಜಿನಿಯರಿಂಗ್ ಉಲ್ಲೇಖ ಗುರಿಗಳಲ್ಲಿ ತಾತ್ಕಾಲಿಕ ಶ್ರೇಣಿಗಳು, ಆದ್ಯತೆಯ ಮೌಲ್ಯಗಳು ಮತ್ತು ಬಳಕೆಯನ್ನು ಅವಲಂಬಿಸಿದ ಮಿತಿಗಳು ಸೇರಿವೆ. ಪೂರೈಸಿದ COA ಆಧಾರದಲ್ಲಿ ನಿಜವಾದ ಬ್ಯಾಚ್ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಉಪಕರಣದ ಸೂಕ್ತತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."),
    tables: [{
      id: "dfo-performance", layout: "performance",
      caption: bi("DFO reference engineering targets", "DFO ಎಂಜಿನಿಯರಿಂಗ್ ಉಲ್ಲೇಖ ಗುರಿಗಳು"),
      columns: [propertyColumn, bi("Reference engineering target", "ಎಂಜಿನಿಯರಿಂಗ್ ಗುರಿಯ ಉಲ್ಲೇಖ"), methodColumn],
      rows: [
      { property: bi("Appearance", "ನೋಟ"), values: [bi("Homogeneous; no free water or debris", "ಏಕರೂಪ; ಪ್ರತ್ಯೇಕ ನೀರು ಅಥವಾ ಕಸ ಇರಬಾರದು"), bi("Visual", "ದೃಶ್ಯ ಪರಿಶೀಲನೆ")] },
      { property: bi("Density @ 15 °C", "ಸಾಂದ್ರತೆ @ 15 °C"), values: [bi("850-950 kg/m3 (provisional)", "850-950 kg/m3 (ತಾತ್ಕಾಲಿಕ)"), same("ASTM D4052")] },
      { property: bi("Kinematic viscosity @ 50 °C", "ಚಲನ ಸ್ನಿಗ್ಧತೆ @ 50 °C"), values: [bi("5-60 mm²/s (provisional)", "5-60 mm²/s (ತಾತ್ಕಾಲಿಕ)"), same("ASTM D445")] },
      { property: bi("Flash point, PMC", "ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್, PMC"), values: [bi("≥66 °C; ≥70 °C preferred", "≥66 °C; ≥70 °C ಆದ್ಯತೆ"), same("ASTM D93")] },
      { property: bi("Pour point", "ಪೋರ್ ಪಾಯಿಂಟ್"), values: [bi("≤18 °C (application dependent)", "≤18 °C (ಬಳಕೆಯನ್ನು ಅವಲಂಬಿಸಿದೆ)"), same("ASTM D97")] },
      { property: bi("Water", "ನೀರು"), values: [bi("≤0.20% by volume", "≤0.20% ಪರಿಮಾಣದ ಆಧಾರದಲ್ಲಿ"), same("ASTM D95")] },
      { property: bi("Sediment", "ತಳಸೇಡು"), values: [bi("≤0.10% by mass", "≤0.10% ದ್ರವ್ಯರಾಶಿಯ ಆಧಾರದಲ್ಲಿ"), same("ASTM D473")] },
      { property: bi("Ash", "ಬೂದಿ"), values: [bi("≤0.05% by mass", "≤0.05% ದ್ರವ್ಯರಾಶಿಯ ಆಧಾರದಲ್ಲಿ"), same("ASTM D482")] },
      { property: bi("Total sulphur", "ಒಟ್ಟು ಗಂಧಕ"), values: [bi("≤1.5% by mass; stricter if required", "≤1.5% ದ್ರವ್ಯರಾಶಿಯ ಆಧಾರದಲ್ಲಿ; ಅಗತ್ಯವಿದ್ದರೆ ಇನ್ನಷ್ಟು ಕಟ್ಟುನಿಟ್ಟಿನ ಮಿತಿ"), same("ASTM D4294")] },
      { property: bi("Gross calorific value", "ಒಟ್ಟು ಉಷ್ಣ ಮೌಲ್ಯ"), values: [bi("Report; 9,800-10,500 kcal/kg indicative", "ವರದಿಯಲ್ಲಿ ತಿಳಿಸಬೇಕು; 9,800-10,500 kcal/kg ಸೂಚಕ ಶ್ರೇಣಿ"), same("ASTM D240")] },
      { property: bi("Carbon residue", "ಕಾರ್ಬನ್ ಅವಶೇಷ"), values: [bi("≤5% by mass, proposed target", "≤5% ದ್ರವ್ಯರಾಶಿಯ ಆಧಾರದಲ್ಲಿ, ಪ್ರಸ್ತಾಪಿತ ಗುರಿ"), same("ASTM D4530")] },
      ],
      notes: [
        bi("Provisional, preferred, indicative and application-dependent qualifiers are part of these reference targets. They are not measured RVP batch results or unconditional performance guarantees.", "ತಾತ್ಕಾಲಿಕ, ಆದ್ಯತೆಯ, ಸೂಚಕ ಮತ್ತು ಬಳಕೆಯನ್ನು ಅವಲಂಬಿಸಿದ ಎಂಬ ಅರ್ಹತೆಗಳು ಈ ಉಲ್ಲೇಖ ಗುರಿಗಳ ಭಾಗವಾಗಿವೆ. ಇವು ಆರ್‌ವಿಪಿ ಬ್ಯಾಚ್‌ನಲ್ಲಿ ಅಳೆಯಲಾದ ಫಲಿತಾಂಶಗಳು ಅಥವಾ ಷರತ್ತುರಹಿತ ಕಾರ್ಯಕ್ಷಮತೆಯ ಭರವಸೆಗಳಲ್ಲ."),
        bi("DFO is an industrial-fuel trade description, not an IS-grade certification or automotive diesel. The supplied reference cites the IndianOil IS 1593:2018 fuel-oil table; confirm classification and all applicable batch tests separately.", "DFO ಒಂದು ಕೈಗಾರಿಕಾ ಇಂಧನದ ವ್ಯಾಪಾರಿಕ ಹೆಸರು; ಇದು IS ಗ್ರೇಡ್ ಪ್ರಮಾಣೀಕರಣ ಅಥವಾ ವಾಹನಗಳ ಡೀಸೆಲ್ ಅಲ್ಲ. ಒದಗಿಸಿದ ಉಲ್ಲೇಖವು IndianOil IS 1593:2018 ಇಂಧನ ತೈಲ ಕೋಷ್ಟಕವನ್ನು ಸೂಚಿಸುತ್ತದೆ; ವರ್ಗೀಕರಣ ಮತ್ತು ಅನ್ವಯಿಸುವ ಎಲ್ಲಾ ಬ್ಯಾಚ್ ಪರೀಕ್ಷೆಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."),
      ],
    }, {
      id: "dfo-screening", layout: "screening",
      caption: bi("Additional contaminant screening, where applicable.", "ಅನ್ವಯಿಸುವ ಸಂದರ್ಭಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಮಾಲಿನ್ಯಕಾರಕಗಳ ಪರಿಶೀಲನೆ."),
      columns: [bi("Contaminant", "ಮಾಲಿನ್ಯಕಾರಕ"), bi("Reference screening maximum", "ಪರಿಶೀಲನೆಯ ಗರಿಷ್ಠ ಉಲ್ಲೇಖ ಮಿತಿ"), bi("Source basis", "ಮೂಲ ಆಧಾರ")],
      rows: [
      { property: bi("PCB", "PCB"), values: [same("<2 mg/kg"), same("Schedule V Part B")] },
      { property: bi("Lead / Arsenic", "ಸೀಸ / ಆರ್ಸೆನಿಕ್"), values: [bi("≤100 / ≤5 mg/kg, respectively", "≤100 / ≤5 mg/kg, ಕ್ರಮವಾಗಿ"), same("Schedule V Part B")] },
      { property: bi("Cd + Cr + Ni combined", "Cd + Cr + Ni ಒಟ್ಟು"), values: [same("≤500 mg/kg"), same("Schedule V Part B")] },
      { property: bi("PAH / total halogens", "PAH / ಒಟ್ಟು ಹ್ಯಾಲೋಜನ್‌ಗಳು"), values: [same("≤6% / ≤4,000 mg/kg"), same("Schedule V Part B")] },
      { property: bi("Sulphur / water / sediment", "ಗಂಧಕ / ನೀರು / ತಳಸೇಡು"), values: [same("≤4.5% / ≤1.0% v/v / ≤0.25% m/m"), same("Schedule V Part B")] },
      ],
      notes: [
        bi("Source attribution: Hazardous and Other Wastes Rules, 2016 — Schedule V Part B, as cited in the supplied reference. These screening references apply where waste-derived-fuel assessment is relevant; confirm current amendments, fuel classification and applicable permit conditions.", "ಮೂಲ ಉಲ್ಲೇಖ: ಒದಗಿಸಿದ ಉಲ್ಲೇಖದಲ್ಲಿ ಸೂಚಿಸಿರುವ Hazardous and Other Wastes Rules, 2016 — Schedule V Part B. ತ್ಯಾಜ್ಯದಿಂದ ಪಡೆದ ಇಂಧನದ ಮೌಲ್ಯಮಾಪನ ಅಗತ್ಯವಿರುವ ಸಂದರ್ಭಗಳಿಗೆ ಈ ಪರಿಶೀಲನಾ ಉಲ್ಲೇಖಗಳು ಅನ್ವಯಿಸುತ್ತವೆ; ಪ್ರಸ್ತುತ ತಿದ್ದುಪಡಿಗಳು, ಇಂಧನ ವರ್ಗೀಕರಣ ಮತ್ತು ಅನ್ವಯಿಸುವ ಅನುಮತಿಯ ಷರತ್ತುಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."),
        bi("This is a separate screening reference, not an ordinary DFO performance specification or a record of laboratory tests completed by RVP. Verify applicable contaminant results on the actual batch COA.", "ಇದು ಪ್ರತ್ಯೇಕ ಪರಿಶೀಲನಾ ಉಲ್ಲೇಖ; ಸಾಮಾನ್ಯ DFO ಕಾರ್ಯಕ್ಷಮತೆಯ ವಿಶೇಷಣ ಅಥವಾ ಆರ್‌ವಿಪಿ ಪೂರ್ಣಗೊಳಿಸಿದ ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆಗಳ ದಾಖಲೆ ಅಲ್ಲ. ಅನ್ವಯಿಸುವ ಮಾಲಿನ್ಯಕಾರಕಗಳ ಫಲಿತಾಂಶಗಳನ್ನು ನಿಜವಾದ ಬ್ಯಾಚ್ COAಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ."),
      ],
    }],
  },
  "furnace-oil": {
    introduction: bi("Exact results depend on the supplied batch and should be checked against its Certificate of Analysis (COA). The table identifies the batch information to verify; it does not assign numerical limits.", "ನಿಖರ ಫಲಿತಾಂಶಗಳು ಪೂರೈಸುವ ಬ್ಯಾಚ್ ಅನ್ನು ಅವಲಂಬಿಸಿರುತ್ತವೆ; ಆ ಬ್ಯಾಚ್‌ನ ವಿಶ್ಲೇಷಣಾ ಪ್ರಮಾಣಪತ್ರದಲ್ಲಿ (COA) ಅವುಗಳನ್ನು ಪರಿಶೀಲಿಸಬೇಕು. ಈ ಕೋಷ್ಟಕವು ಪರಿಶೀಲಿಸಬೇಕಾದ ಬ್ಯಾಚ್ ಮಾಹಿತಿಯನ್ನು ಸೂಚಿಸುತ್ತದೆ; ಸಂಖ್ಯಾತ್ಮಕ ಮಿತಿಗಳನ್ನು ನಿಗದಿಪಡಿಸುವುದಿಲ್ಲ."),
    tables: [{
      id: "furnace-coa", layout: "coa",
      caption: bi("Furnace Oil batch COA information", "ಫರ್ನೇಸ್ ಆಯಿಲ್ ಬ್ಯಾಚ್ COA ಮಾಹಿತಿ"),
      columns: [propertyColumn, bi("Batch information", "ಬ್ಯಾಚ್ ಮಾಹಿತಿ"), bi("Verification", "ಪರಿಶೀಲನೆ")],
      rows: [
      { property: bi("Kinematic viscosity", "ಚಲನ ಸ್ನಿಗ್ಧತೆ"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      { property: bi("Flash point", "ಫ್ಲ್ಯಾಶ್ ಪಾಯಿಂಟ್"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      { property: bi("Sulphur", "ಗಂಧಕ"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      { property: bi("Water content", "ನೀರಿನ ಅಂಶ"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      { property: bi("Gross calorific value", "ಒಟ್ಟು ಉಷ್ಣ ಮೌಲ್ಯ"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      { property: bi("Density", "ಸಾಂದ್ರತೆ"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      { property: bi("Pour point", "ಪೋರ್ ಪಾಯಿಂಟ್"), values: [bi("Recorded for each batch", "ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ದಾಖಲಿಸಬೇಕು"), bi("Shown on the supplied COA", "ಪೂರೈಸಿದ COAಯಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ")] },
      ],
      notes: [bi("Check each recorded value against the COA supplied for the batch you intend to purchase.", "ನೀವು ಖರೀದಿಸಲು ಉದ್ದೇಶಿಸಿರುವ ಬ್ಯಾಚ್‌ಗೆ ಪೂರೈಸಿದ COA ಆಧಾರದಲ್ಲಿ ದಾಖಲಿಸಿದ ಪ್ರತಿ ಮೌಲ್ಯವನ್ನು ಪರಿಶೀಲಿಸಿ.")],
    }],
  },
};
