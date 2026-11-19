import type { Language } from "./navigation";
type ArticleCopy = { title:string; excerpt:string; sections:{heading:string;body:string}[]; takeaway:string };
export type Article = { slug:string; category:"used-oil"|"base-oil"|"business"; image:string; source?:{title:string;url:string}; en:ArticleCopy; kn:ArticleCopy };
export const articles:Article[]=[
 {
  slug:"what-garages-should-do-with-used-engine-oil",category:"used-oil",image:"/images/workshop-stock.jpg",
  source:{title:"EPA: managing used oil",url:"https://www.epa.gov/hw/managing-used-oil-answers-frequent-questions-businesses"},
  en:{title:"What should garages do with used engine oil?",excerpt:"A practical next step for the oil left after every service.",sections:[
   {heading:"Keep the oil separate",body:"Collect used engine oil separately from coolant, paint, thinner and other workshop liquids. Keep it in a suitable container in good condition. Mixing liquids can make the oil harder to handle and recycle."},
   {heading:"Know what you have",body:"Note the approximate quantity, where the oil came from and where it is stored. Photos can help explain your setup. You do not need an exact figure to begin a conversation, but a sensible estimate helps."},
   {heading:"Agree the collection details",body:"Before collection, discuss the price, pickup location, quantity and date. RVP Refinery buys used oil from garages and service centres, cleans it at its Tumakuru plant and provides a GST bill."}
  ],takeaway:"Start with the oil type, approximate quantity and your town or district."},
  kn:{title:"ಗ್ಯಾರೇಜುಗಳು ಬಳಸಿದ ಎಂಜಿನ್ ತೈಲವನ್ನು ಏನು ಮಾಡಬೇಕು?",excerpt:"ವಾಹನ ಸೇವೆಯ ನಂತರ ಉಳಿಯುವ ತೈಲಕ್ಕೆ ಸರಿಯಾದ ಮುಂದಿನ ಹೆಜ್ಜೆ.",sections:[
   {heading:"ತೈಲವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಡಿ",body:"ಬಳಸಿದ ಎಂಜಿನ್ ತೈಲವನ್ನು ಕೂಲಂಟ್, ಬಣ್ಣ, ಥಿನ್ನರ್ ಮತ್ತು ಇತರ ದ್ರವಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಸಂಗ್ರಹಿಸಿ. ಉತ್ತಮ ಸ್ಥಿತಿಯ ಸೂಕ್ತ ಪಾತ್ರೆಯಲ್ಲಿ ಇರಿಸಿ. ದ್ರವಗಳನ್ನು ಬೆರೆಸಿದರೆ ನಿರ್ವಹಣೆ ಮತ್ತು ಮರುಬಳಕೆ ಕಷ್ಟವಾಗಬಹುದು."},
   {heading:"ವಿವರಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ",body:"ಅಂದಾಜು ಪ್ರಮಾಣ, ತೈಲದ ಮೂಲ ಮತ್ತು ಅದನ್ನು ಇಟ್ಟಿರುವ ಸ್ಥಳವನ್ನು ದಾಖಲಿಸಿ. ಚಿತ್ರಗಳು ನಿಮ್ಮ ವ್ಯವಸ್ಥೆಯನ್ನು ವಿವರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಮಾತುಕತೆ ಆರಂಭಿಸಲು ನಿಖರ ಪ್ರಮಾಣ ಅಗತ್ಯವಿಲ್ಲ; ಸಮಂಜಸ ಅಂದಾಜು ಸಾಕು."},
   {heading:"ಸಂಗ್ರಹಣೆಯ ವಿವರಗಳನ್ನು ನಿರ್ಧರಿಸಿ",body:"ದರ, ಸಂಗ್ರಹಣೆಯ ಸ್ಥಳ, ಪ್ರಮಾಣ ಮತ್ತು ದಿನಾಂಕವನ್ನು ಮೊದಲು ಚರ್ಚಿಸಿ. ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಗ್ಯಾರೇಜುಗಳಿಂದ ಬಳಸಿದ ತೈಲವನ್ನು ಖರೀದಿಸಿ, ತುಮಕೂರಿನ ಘಟಕದಲ್ಲಿ ಶುದ್ಧೀಕರಿಸಿ, ಜಿಎಸ್‌ಟಿ ಬಿಲ್ ನೀಡುತ್ತದೆ."}
  ],takeaway:"ತೈಲದ ಪ್ರಕಾರ, ಅಂದಾಜು ಪ್ರಮಾಣ ಮತ್ತು ನಿಮ್ಮ ಪಟ್ಟಣ ಅಥವಾ ಜಿಲ್ಲೆಯಿಂದ ಆರಂಭಿಸಿ."},
 },
 {
  slug:"store-used-oil-before-pickup",category:"used-oil",image:"/images/storage-stock.webp",
  source:{title:"EPA: used oil storage guidance",url:"https://www.epa.gov/hw/managing-used-oil-answers-frequent-questions-businesses"},
  en:{title:"How to store used oil safely until pickup",excerpt:"Simple habits that help keep oil contained and ready for collection.",sections:[
   {heading:"Use a suitable container",body:"Use a sound, leak-free container, clearly marked for used oil. Check its condition regularly and keep the storage area orderly."},
   {heading:"Avoid mixing and spills",body:"Keep oil separate from solvents and other waste liquids. Handle transfers carefully. Follow your workplace’s spill procedures if you notice a leak."},
   {heading:"Prepare for collection",body:"Tell the collection team how much oil you have, the container type and access to the storage point. Confirm the arrangements before moving the oil."}
  ],takeaway:"Good storage makes the handover easier. It does not replace the handling procedures required at your workplace."},
  kn:{title:"ಸಂಗ್ರಹಣೆಯವರೆಗೆ ಬಳಸಿದ ತೈಲವನ್ನು ಹೇಗೆ ಇಡಬೇಕು?",excerpt:"ತೈಲ ಸೋರದಂತೆ ಇಟ್ಟು ಸಂಗ್ರಹಣೆಗೆ ಸಿದ್ಧವಾಗಿರಲು ಸರಳ ಕ್ರಮಗಳು.",sections:[
   {heading:"ಸೂಕ್ತ ಪಾತ್ರೆ ಬಳಸಿ",body:"ಉತ್ತಮ ಸ್ಥಿತಿಯ, ಸೋರಿಕೆಯಿಲ್ಲದ ಪಾತ್ರೆ ಬಳಸಿ. ಬಳಸಿದ ತೈಲವೆಂದು ಸ್ಪಷ್ಟವಾಗಿ ಗುರುತಿಸಿ. ಪಾತ್ರೆಯನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸುತ್ತಲಿನ ಸ್ಥಳವನ್ನು ಅಚ್ಚುಕಟ್ಟಾಗಿಡಿ."},
   {heading:"ಮಿಶ್ರಣ ಮತ್ತು ಸೋರಿಕೆ ತಪ್ಪಿಸಿ",body:"ತೈಲವನ್ನು ದ್ರಾವಕಗಳು ಮತ್ತು ಇತರ ತ್ಯಾಜ್ಯ ದ್ರವಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿಡಿ. ವರ್ಗಾವಣೆ ಎಚ್ಚರಿಕೆಯಿಂದ ಮಾಡಿ. ಸೋರಿಕೆ ಕಂಡರೆ ನಿಮ್ಮ ಕೆಲಸದ ಸ್ಥಳದ ನಿರ್ವಹಣಾ ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸಿ."},
   {heading:"ಸಂಗ್ರಹಣೆಗೆ ಸಿದ್ಧರಾಗಿ",body:"ತೈಲದ ಪ್ರಮಾಣ, ಪಾತ್ರೆಯ ಪ್ರಕಾರ ಮತ್ತು ಸ್ಥಳಕ್ಕೆ ಪ್ರವೇಶದ ವಿವರಗಳನ್ನು ತಂಡಕ್ಕೆ ತಿಳಿಸಿ. ತೈಲವನ್ನು ಸ್ಥಳಾಂತರಿಸುವ ಮೊದಲು ವ್ಯವಸ್ಥೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."}
  ],takeaway:"ಉತ್ತಮ ಸಂಗ್ರಹ ವ್ಯವಸ್ಥೆ ಹಸ್ತಾಂತರವನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ. ನಿಮ್ಮ ಕೆಲಸದ ಸ್ಥಳದ ನಿರ್ವಹಣಾ ಕ್ರಮಗಳನ್ನೂ ಪಾಲಿಸಿ."},
 },
 {
  slug:"what-is-re-refined-base-oil",category:"base-oil",image:"/images/processing-stock.webp",
  source:{title:"CPCB: used oil FAQs",url:"https://cpcb.nic.in/uploads/Projects/usedoil/Used_Oil_FAQ.pdf"},
  en:{title:"What is re-refined base oil?",excerpt:"Understanding the product made by giving used oil another useful life.",sections:[
   {heading:"A useful material, recovered",body:"Re-refining removes unwanted impurities from used oil to produce base oil or lubricating oil. At RVP, the work begins with used oil collected from garages, transport companies and factories."},
   {heading:"Base oil and your application",body:"RVP sells re-refined base oil to lubricant oil makers, traders and factories. A buyer should discuss the intended use and the specification needed for that application."},
   {heading:"Ask about the details",body:"Before ordering, confirm the grade, quantity, packing and delivery place. Ask about the relevant test report and batch values instead of relying only on a product name or photograph."}
  ],takeaway:"A useful enquiry includes the required grade or application, quantity and delivery location."},
  kn:{title:"ಮರುಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್ ಎಂದರೇನು?",excerpt:"ಬಳಸಿದ ತೈಲಕ್ಕೆ ಮತ್ತೊಂದು ಉಪಯುಕ್ತ ಜೀವನ ನೀಡುವ ಉತ್ಪನ್ನದ ಪರಿಚಯ.",sections:[
   {heading:"ಉಪಯುಕ್ತ ವಸ್ತುವಿನ ಮರುಪಡೆಯುವಿಕೆ",body:"ಮರುಶುದ್ಧೀಕರಣದಲ್ಲಿ ಬಳಸಿದ ತೈಲದ ಅನಗತ್ಯ ಕಲ್ಮಶಗಳನ್ನು ತೆಗೆದು ಬೇಸ್ ಆಯಿಲ್ ಅಥವಾ ಲೂಬ್ರಿಕಂಟ್ ತೈಲ ತಯಾರಿಸಲಾಗುತ್ತದೆ. ಆರ್‌ವಿಪಿಯಲ್ಲಿ ಗ್ಯಾರೇಜುಗಳು, ಸಾರಿಗೆ ಕಂಪನಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಂದ ಸಂಗ್ರಹಿಸಿದ ತೈಲದಿಂದ ಕೆಲಸ ಆರಂಭವಾಗುತ್ತದೆ."},
   {heading:"ನಿಮ್ಮ ಬಳಕೆಗೆ ಸೂಕ್ತ ತೈಲ",body:"ಆರ್‌ವಿಪಿ ಮರುಶುದ್ಧೀಕರಿಸಿದ ಬೇಸ್ ಆಯಿಲ್ ಅನ್ನು ತೈಲ ತಯಾರಕರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಗೆ ಮಾರಾಟ ಮಾಡುತ್ತದೆ. ಖರೀದಿದಾರರು ಅದರ ಬಳಕೆ ಮತ್ತು ಅಗತ್ಯ ವಿಶೇಷಣಗಳನ್ನು ಚರ್ಚಿಸಬೇಕು."},
   {heading:"ವಿವರಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",body:"ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಗ್ರೇಡ್, ಪ್ರಮಾಣ, ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ವಿತರಣೆಯ ಸ್ಥಳ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಹೆಸರು ಅಥವಾ ಚಿತ್ರವನ್ನು ಮಾತ್ರ ನಂಬದೆ ಸಂಬಂಧಿತ ಪರೀಕ್ಷಾ ವರದಿ ಮತ್ತು ಬ್ಯಾಚ್ ಮೌಲ್ಯಗಳನ್ನು ಕೇಳಿ."}
  ],takeaway:"ಅಗತ್ಯ ಗ್ರೇಡ್ ಅಥವಾ ಬಳಕೆ, ಪ್ರಮಾಣ ಮತ್ತು ವಿತರಣೆಯ ಸ್ಥಳವನ್ನು ವಿಚಾರಣೆಯಲ್ಲಿ ತಿಳಿಸಿ."},
 },
 {
  slug:"how-used-oil-is-cleaned-and-reused",category:"base-oil",image:"/images/refinery-detail-stock.webp",
  en:{title:"How used oil is cleaned and used again",excerpt:"Follow the journey from a workshop’s used oil to base oil for another business.",sections:[
   {heading:"Collection is the beginning",body:"Garages, transport companies and factories tell us about their used oil. We discuss the quantity, location and collection arrangements, then bring the collected oil to our plant in Tumakuru."},
   {heading:"Cleaning at our own plant",body:"At the plant, we remove water, dirt and waste from the used oil. Cleaning turns it into base oil that can be put back to work."},
   {heading:"A new use for the oil",body:"The base oil goes to oil makers, traders and factories. Supply is discussed in drums or tankers, with the product details and quantity confirmed for each enquiry."}
  ],takeaway:"Collection, cleaning and reuse are connected stages of the same journey."},
  kn:{title:"ಬಳಸಿದ ತೈಲವನ್ನು ಹೇಗೆ ಶುದ್ಧೀಕರಿಸಿ ಮತ್ತೆ ಬಳಸುತ್ತಾರೆ?",excerpt:"ಕಾರ್ಯಾಗಾರದ ಬಳಸಿದ ತೈಲದಿಂದ ಮತ್ತೊಂದು ಉದ್ಯಮದ ಬೇಸ್ ಆಯಿಲ್‌ವರೆಗಿನ ಪಯಣ.",sections:[
   {heading:"ಸಂಗ್ರಹಣೆಯಿಂದ ಆರಂಭ",body:"ಗ್ಯಾರೇಜುಗಳು, ಸಾರಿಗೆ ಕಂಪನಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳು ತಮ್ಮ ಬಳಸಿದ ತೈಲದ ಬಗ್ಗೆ ತಿಳಿಸುತ್ತವೆ. ಪ್ರಮಾಣ, ಸ್ಥಳ ಮತ್ತು ಸಂಗ್ರಹಣೆಯ ವ್ಯವಸ್ಥೆ ಚರ್ಚಿಸಿದ ನಂತರ ತೈಲವನ್ನು ತುಮಕೂರಿನ ನಮ್ಮ ಘಟಕಕ್ಕೆ ತರುತ್ತೇವೆ."},
   {heading:"ನಮ್ಮ ಸ್ವಂತ ಘಟಕದಲ್ಲಿ ಶುದ್ಧೀಕರಣ",body:"ಘಟಕದಲ್ಲಿ ತೈಲದಿಂದ ನೀರು, ಕೊಳಕು ಮತ್ತು ತ್ಯಾಜ್ಯವನ್ನು ತೆಗೆದುಹಾಕುತ್ತೇವೆ. ಈ ಪ್ರಕ್ರಿಯೆಯಿಂದ ಮತ್ತೆ ಬಳಸಬಹುದಾದ ಬೇಸ್ ಆಯಿಲ್ ದೊರೆಯುತ್ತದೆ."},
   {heading:"ತೈಲಕ್ಕೆ ಹೊಸ ಬಳಕೆ",body:"ಬೇಸ್ ಆಯಿಲ್ ತೈಲ ತಯಾರಕರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆಗಳಿಗೆ ತಲುಪುತ್ತದೆ. ಪ್ರತಿ ವಿಚಾರಣೆಗೆ ಉತ್ಪನ್ನದ ವಿವರ ಮತ್ತು ಪ್ರಮಾಣ ಖಚಿತಪಡಿಸಿ ಡ್ರಮ್ ಅಥವಾ ಟ್ಯಾಂಕರ್ ಪೂರೈಕೆಯನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ."}
  ],takeaway:"ಸಂಗ್ರಹಣೆ, ಶುದ್ಧೀಕರಣ ಮತ್ತು ಮರುಬಳಕೆ ಒಂದೇ ಪಯಣದ ಹಂತಗಳು."},
 },
 {
  slug:"why-not-burn-or-throw-away-used-oil",category:"used-oil",image:"/images/refinery-stock-1400.webp",
  source:{title:"EPA: reusing and recycling used oil",url:"https://www.epa.gov/recycle/managing-reusing-and-recycling-used-oil"},
  en:{title:"Why you should not burn or throw away used oil",excerpt:"Used oil belongs in a managed collection and reuse process.",sections:[
   {heading:"Keep it out of the environment",body:"Used oil can pollute land and water if it is dumped or spilled. Open burning is not a substitute for proper collection and handling."},
   {heading:"There is another route",body:"Oil that has been used can be re-refined and put back to use. Keep it contained and speak to a suitable collection or recycling business about the next step."},
   {heading:"Start with practical details",body:"RVP buys used oil and cleans it at its Tumakuru plant. Share the oil type, quantity and location so the collection arrangements can be discussed."}
  ],takeaway:"Keep used oil contained. Arrange a responsible next step rather than dumping it or burning it openly."},
  kn:{title:"ಬಳಸಿದ ತೈಲವನ್ನು ಏಕೆ ಸುಡಬಾರದು ಅಥವಾ ಎಸೆಯಬಾರದು?",excerpt:"ಬಳಸಿದ ತೈಲಕ್ಕೆ ಸೂಕ್ತ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಮರುಬಳಕೆಯ ವ್ಯವಸ್ಥೆ ಅಗತ್ಯ.",sections:[
   {heading:"ಪರಿಸರಕ್ಕೆ ತಲುಪದಂತೆ ನೋಡಿಕೊಳ್ಳಿ",body:"ಬಳಸಿದ ತೈಲವನ್ನು ಎಸೆದರೆ ಅಥವಾ ಸೋರಿದರೆ ಭೂಮಿ ಮತ್ತು ನೀರು ಕಲುಷಿತವಾಗಬಹುದು. ತೆರೆದ ಜಾಗದಲ್ಲಿ ಸುಡುವುದು ಸರಿಯಾದ ಸಂಗ್ರಹಣೆ ಮತ್ತು ನಿರ್ವಹಣೆಗೆ ಪರ್ಯಾಯವಲ್ಲ."},
   {heading:"ಮತ್ತೊಂದು ಮಾರ್ಗವಿದೆ",body:"ಬಳಸಿದ ತೈಲವನ್ನು ಮರುಶುದ್ಧೀಕರಿಸಿ ಮತ್ತೆ ಬಳಸಬಹುದು. ಅದನ್ನು ಪಾತ್ರೆಯಲ್ಲಿ ಉಳಿಸಿ, ಮುಂದಿನ ಕ್ರಮದ ಬಗ್ಗೆ ಸೂಕ್ತ ಸಂಗ್ರಹಣೆ ಅಥವಾ ಮರುಬಳಕೆ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಮಾತನಾಡಿ."},
   {heading:"ಅಗತ್ಯ ವಿವರಗಳಿಂದ ಆರಂಭಿಸಿ",body:"ಆರ್‌ವಿಪಿ ಬಳಸಿದ ತೈಲವನ್ನು ಖರೀದಿಸಿ ತುಮಕೂರಿನ ಘಟಕದಲ್ಲಿ ಶುದ್ಧೀಕರಿಸುತ್ತದೆ. ತೈಲದ ಪ್ರಕಾರ, ಪ್ರಮಾಣ ಮತ್ತು ಸ್ಥಳ ತಿಳಿಸಿ ಸಂಗ್ರಹಣೆಯ ವ್ಯವಸ್ಥೆಯನ್ನು ಚರ್ಚಿಸಿ."}
  ],takeaway:"ಬಳಸಿದ ತೈಲವನ್ನು ಪಾತ್ರೆಯಲ್ಲಿ ಇಡಿ. ಅದನ್ನು ಎಸೆಯುವ ಅಥವಾ ತೆರೆದ ಜಾಗದಲ್ಲಿ ಸುಡುವ ಬದಲು ಸೂಕ್ತ ಮುಂದಿನ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ."},
 },
 {
  slug:"choosing-a-used-oil-buyer-in-karnataka",category:"business",image:"/images/clear-dealings-stock.jpg",
  en:{title:"How to find a good used oil buyer in Karnataka",excerpt:"The questions that help you make a clear collection arrangement.",sections:[
   {heading:"Ask about the work",body:"Find out what the buyer does with the oil, where it is handled and which oil types they can take. Ask for relevant registration documents rather than relying on an advertising claim."},
   {heading:"Get the practical details clear",body:"Discuss price, measurement, pickup date, location and any collection charges before agreeing. Confirm how payment and invoicing will be handled."},
   {heading:"Know who you are dealing with",body:"RVP Refinery has worked in Tumakuru since 2018. We buy used oil, clean it at our own plant and provide a GST bill for every transaction. Tell us about your oil to begin the discussion."}
  ],takeaway:"A clear conversation about the oil and collection details is a useful first step."},
  kn:{title:"ಕರ್ನಾಟಕದಲ್ಲಿ ಉತ್ತಮ ಬಳಸಿದ ತೈಲ ಖರೀದಿದಾರರನ್ನು ಹೇಗೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",excerpt:"ಸ್ಪಷ್ಟ ಸಂಗ್ರಹಣೆಯ ವ್ಯವಸ್ಥೆಗೆ ಸಹಾಯ ಮಾಡುವ ಪ್ರಶ್ನೆಗಳು.",sections:[
   {heading:"ಕೆಲಸದ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",body:"ಖರೀದಿದಾರರು ತೈಲವನ್ನು ಏನು ಮಾಡುತ್ತಾರೆ, ಎಲ್ಲಿ ನಿರ್ವಹಿಸುತ್ತಾರೆ ಮತ್ತು ಯಾವ ಪ್ರಕಾರ ಸ್ವೀಕರಿಸುತ್ತಾರೆ ಎಂದು ಕೇಳಿ. ಜಾಹೀರಾತಿನ ಹೇಳಿಕೆಯನ್ನು ಮಾತ್ರ ನಂಬದೆ ಸಂಬಂಧಿತ ನೋಂದಣಿ ದಾಖಲೆಗಳನ್ನು ವಿಚಾರಿಸಿ."},
   {heading:"ವ್ಯವಹಾರದ ವಿವರ ಸ್ಪಷ್ಟಪಡಿಸಿ",body:"ದರ, ಅಳತೆ, ಸಂಗ್ರಹಣೆಯ ದಿನಾಂಕ, ಸ್ಥಳ ಮತ್ತು ಶುಲ್ಕವನ್ನು ಒಪ್ಪಂದಕ್ಕೆ ಮೊದಲು ಚರ್ಚಿಸಿ. ಪಾವತಿ ಮತ್ತು ಬಿಲ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."},
   {heading:"ಸಂಸ್ಥೆಯನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ",body:"ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ 2018ರಿಂದ ತುಮಕೂರಿನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ. ಬಳಸಿದ ತೈಲವನ್ನು ಖರೀದಿಸಿ ಸ್ವಂತ ಘಟಕದಲ್ಲಿ ಶುದ್ಧೀಕರಿಸಿ ಪ್ರತಿ ವ್ಯವಹಾರಕ್ಕೂ ಜಿಎಸ್‌ಟಿ ಬಿಲ್ ನೀಡುತ್ತೇವೆ. ಚರ್ಚೆ ಆರಂಭಿಸಲು ನಿಮ್ಮ ತೈಲದ ವಿವರ ತಿಳಿಸಿ."}
  ],takeaway:"ತೈಲ ಮತ್ತು ಸಂಗ್ರಹಣೆಯ ವಿವರಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟ ಮಾತುಕತೆ ಉತ್ತಮ ಮೊದಲ ಹೆಜ್ಜೆ."},
 },
];
export const articleCopy=(article:Article,language:Language)=>article[language];
