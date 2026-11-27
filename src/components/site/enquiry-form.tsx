import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Copy, Download, Pencil } from "lucide-react";
import type { Language } from "@/lib/navigation";
import { company, tx, whatsappHref } from "@/lib/company";
import { cn } from "@/lib/utils";
import { products, type ProductId } from "@/lib/products";

type Kind = "pickup" | "quote" | "contact";
const labels = {
 en: { application:"Intended application", company:"Company name", name:"Your name", phone:"Phone number", email:"Email", location:"Pickup place (town / district)", oil:"Oil type", quantity:"Quantity", delivery:"Delivery place", product:"Product", interest:"I want to", message:"Message", photos:"Photos of the oil", consent:"You can contact me about this enquiry.", optional:"Optional", required:"Required", choose:"Choose an option", unit:"Unit", prepare:"Prepare enquiry", review:"Review enquiry", heading:"Your enquiry is ready", unsent:"Your enquiry has not been sent to RVP. You can copy or download it to keep a record.", note:"Enquiries can currently be prepared and downloaded. They are not sent to RVP yet.", edit:"Edit details", copy:"Copy details", download:"Download enquiry", copied:"Enquiry copied.", send:"Send enquiry", sending:"Sending…", sent:"Thank you. Your enquiry has been received.", fail:"Your enquiry could not be sent. Please retry; your details are still here.", continueEmail:"Continue by email", continueWhatsapp:"Continue on WhatsApp", appNote:"Continue in your email or WhatsApp app to send this enquiry.", choosePhotos:"Choose photos",selected:"selected",noPhotos:"No photos selected.",photoHelp:"Up to 3 JPG, PNG or WebP images, 5 MB each. Photos stay on this device unless you send them.", invalidPhoto:"Choose up to 3 JPG, PNG or WebP images, each no larger than 5 MB.", nameError:"Enter your name.", phoneError:"Enter a valid phone number with 10–15 digits.", emailError:"Enter a valid email address.", quantityError:"Enter a quantity greater than zero.", consentError:"Please allow RVP to contact you about this enquiry.", copyError:"Copying is unavailable. You can download your enquiry instead." },
 kn: { application:"ಉದ್ದೇಶಿತ ಬಳಕೆ", company:"ಕಂಪನಿಯ ಹೆಸರು", name:"ನಿಮ್ಮ ಹೆಸರು", phone:"ಫೋನ್ ಸಂಖ್ಯೆ", email:"ಇಮೇಲ್", location:"ಸಂಗ್ರಹಣೆಯ ಸ್ಥಳ (ಪಟ್ಟಣ / ಜಿಲ್ಲೆ)", oil:"ತೈಲದ ಪ್ರಕಾರ", quantity:"ಪ್ರಮಾಣ", delivery:"ವಿತರಣೆಯ ಸ್ಥಳ", product:"ಉತ್ಪನ್ನ", interest:"ನನಗೆ ಬೇಕಾಗಿರುವುದು", message:"ಸಂದೇಶ", photos:"ತೈಲದ ಚಿತ್ರಗಳು", consent:"ಈ ವಿಚಾರಣೆಯ ಬಗ್ಗೆ ನೀವು ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.", optional:"ಐಚ್ಛಿಕ", required:"ಅಗತ್ಯ", choose:"ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ", unit:"ಘಟಕ", prepare:"ವಿಚಾರಣೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ", review:"ವಿಚಾರಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ", heading:"ನಿಮ್ಮ ವಿಚಾರಣೆ ಸಿದ್ಧವಾಗಿದೆ", unsent:"ಈ ವಿಚಾರಣೆ ಆರ್‌ವಿಪಿಗೆ ಕಳುಹಿಸಲಾಗಿಲ್ಲ. ದಾಖಲೆಯಾಗಿ ಉಳಿಸಲು ನಕಲಿಸಿ ಅಥವಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.", note:"ಪ್ರಸ್ತುತ ವಿಚಾರಣೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು. ಅದು ಇನ್ನೂ ಆರ್‌ವಿಪಿಗೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.", edit:"ವಿವರಗಳನ್ನು ಬದಲಿಸಿ", copy:"ವಿವರಗಳನ್ನು ನಕಲಿಸಿ", download:"ವಿಚಾರಣೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", copied:"ವಿಚಾರಣೆ ನಕಲಿಸಲಾಗಿದೆ.", send:"ವಿಚಾರಣೆ ಕಳುಹಿಸಿ", sending:"ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ…", sent:"ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ವಿಚಾರಣೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.", fail:"ಕಳುಹಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ; ನಿಮ್ಮ ವಿವರಗಳು ಇಲ್ಲಿಯೇ ಇವೆ.", continueEmail:"ಇಮೇಲ್ ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ", continueWhatsapp:"ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ", appNote:"ಈ ವಿಚಾರಣೆಯನ್ನು ಕಳುಹಿಸಲು ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಆ್ಯಪ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ.", choosePhotos:"ಚಿತ್ರಗಳನ್ನು ಆರಿಸಿ",selected:"ಆಯ್ಕೆಯಾಗಿದೆ",noPhotos:"ಚಿತ್ರಗಳನ್ನು ಆರಿಸಿಲ್ಲ.",photoHelp:"ಗರಿಷ್ಠ 3 JPG, PNG ಅಥವಾ WebP ಚಿತ್ರಗಳು, ತಲಾ 5 MB. ಕಳುಹಿಸುವವರೆಗೆ ಚಿತ್ರಗಳು ಈ ಸಾಧನದಲ್ಲೇ ಇರುತ್ತವೆ.", invalidPhoto:"ತಲಾ 5 MB ಮೀರದ ಗರಿಷ್ಠ 3 JPG, PNG ಅಥವಾ WebP ಚಿತ್ರಗಳನ್ನು ಆರಿಸಿ.", nameError:"ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.", phoneError:"10–15 ಅಂಕಿಗಳ ಮಾನ್ಯ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.", emailError:"ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ.", quantityError:"ಶೂನ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಪ್ರಮಾಣ ನಮೂದಿಸಿ.", consentError:"ಈ ವಿಚಾರಣೆಯ ಬಗ್ಗೆ ಸಂಪರ್ಕಿಸಲು ಅನುಮತಿ ನೀಡಿ.", copyError:"ನಕಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ವಿಚಾರಣೆಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು." },
};
type Field = "company"|"name"|"phone"|"email"|"location"|"oil"|"quantity"|"delivery"|"product"|"interest"|"message"|"application";
export default function EnquiryForm({ kind, language, initialProduct }: { kind: Kind; language: Language; initialProduct?: ProductId }) {
 const copy=labels[language], id=useId();
 const [values,setValues]=useState<Record<Field,string>>({company:"",name:"",phone:"",email:"",location:"",oil:"",quantity:"",delivery:"",product:initialProduct??"unknown",interest:initialProduct?"buy":"sell",message:"",application:""});
 const [unit,setUnit]=useState("litres"),[consent,setConsent]=useState(false),[errors,setErrors]=useState<Record<string,string>>({});
 const [photos,setPhotos]=useState<File[]>([]),[previews,setPreviews]=useState<string[]>([]);
 const [review,setReview]=useState(false),[status,setStatus]=useState(""),[sending,setSending]=useState(false),[sent,setSent]=useState(false);
 const photoInput=useRef<HTMLInputElement>(null);
 const form=useRef<HTMLFormElement>(null),reviewPanel=useRef<HTMLDivElement>(null);
 const connected=!!(company.enquiryEndpoint||company.email||company.whatsapp);
 const fields:Field[]=kind==="pickup"?["company","name","phone","location","oil","quantity"]:kind==="quote"?["company","name","phone","email","product","quantity","delivery","application","message"]:["name","company","phone","email","interest",...(values.interest==="buy"?["product","quantity","delivery","application"] as Field[]:[]),"message"];
 const oilOptions=[["engine",tx(language,"Engine oil","ಎಂಜಿನ್ ತೈಲ")],["gear",tx(language,"Gear oil","ಗೇರ್ ತೈಲ")],["hydraulic",tx(language,"Hydraulic oil","ಹೈಡ್ರಾಲಿಕ್ ತೈಲ")],["machine",tx(language,"Machine oil","ಯಂತ್ರದ ತೈಲ")],["mixed",tx(language,"Mixed oil","ಮಿಶ್ರ ತೈಲ")],["unknown",tx(language,"Don't know","ತಿಳಿದಿಲ್ಲ")]];
 const productOptions=[...products.map(product=>[product.id,product.name[language]]),["unknown",tx(language,"Help me choose","ಆಯ್ಕೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿ")]];
 const interestOptions=[["sell",tx(language,"Sell used oil","ಬಳಸಿದ ತೈಲ ಮಾರಾಟ")],["buy",tx(language,"Buy base oil or industrial fuel","ಬೇಸ್ ಆಯಿಲ್ ಅಥವಾ ಕೈಗಾರಿಕಾ ಇಂಧನ ಖರೀದಿ")],["other",tx(language,"Other","ಇತರೆ")]];
 const units=[["litres",tx(language,"Litres","ಲೀಟರ್")],["barrels",tx(language,"Barrels","ಬ್ಯಾರೆಲ್")],["drums",tx(language,"Drums","ಡ್ರಮ್")],["tanker",tx(language,"Tanker","ಟ್ಯಾಂಕರ್")]];
 const selections:Partial<Record<Field,string[][]>>={oil:oilOptions,product:productOptions,interest:interestOptions};
 useEffect(()=>{const urls=photos.map(file=>URL.createObjectURL(file));setPreviews(urls);return()=>urls.forEach(url=>URL.revokeObjectURL(url));},[photos]);
 useEffect(()=>{if(review) reviewPanel.current?.focus();},[review]);
 useEffect(()=>{setStatus("");setErrors({});},[language]);
 useEffect(()=>{setValues(previous=>({...previous,product:initialProduct??"unknown",interest:initialProduct?"buy":"sell"}));setReview(false);setStatus("");setErrors({});},[initialProduct]);
 const valueLabel=(field:Field)=>selections[field]?.find(option=>option[0]===values[field])?.[1]||values[field];
 const enquiry=[`RVP Refinery · ${tx(language,kind==="pickup"?"Used oil pickup":kind==="quote"?"Product quote":"General enquiry",kind==="pickup"?"ಬಳಸಿದ ತೈಲ ಸಂಗ್ರಹಣೆ":kind==="quote"?"ಉತ್ಪನ್ನದ ದರ":"ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ")}`,"",...fields.filter(field=>values[field]).map(field=>`${copy[field]}: ${valueLabel(field)}${field==="quantity"?" "+units.find(option=>option[0]===unit)?.[1]:""}`),...(photos.length?[`${copy.photos}: ${photos.map(photo=>photo.name).join(", ")}`]:[]),"",copy.consent].join("\n");
 function update(field:Field,value:string){setValues(previous=>({...previous,[field]:value}));setErrors(previous=>({...previous,[field]:""}));}
 function prepare(event:FormEvent<HTMLFormElement>){
  event.preventDefault(); const next:Record<string,string>={};
  if(!values.name.trim())next.name=copy.nameError;
  const digits=values.phone.replace(/\D/g,"");
  if(digits.length<10||digits.length>15||/[^+\d ()-]/.test(values.phone))next.phone=copy.phoneError;
  if(values.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))next.email=copy.emailError;
  if(values.quantity&&(!Number.isFinite(Number(values.quantity))||Number(values.quantity)<=0))next.quantity=copy.quantityError;
  if(!consent)next.consent=copy.consentError;
  if(errors.photos)next.photos=errors.photos;
  setErrors(next);setStatus("");
  if(Object.keys(next).length){const field=form.current?.elements.namedItem(Object.keys(next)[0]) as HTMLElement|null;field?.focus();return;}
  setReview(true);
 }
 async function send(){
  setSending(true);setStatus("");
  try{const body=new FormData();body.set("kind",kind);body.set("language",language);body.set("enquiry",enquiry);for(const [key,value]of Object.entries(values))body.set(key,value);body.set("unit",unit);body.set("consent","true");photos.forEach(photo=>body.append("photos",photo));const response=await fetch(company.enquiryEndpoint,{method:"POST",body});if(!response.ok)throw new Error();setSent(true);}catch{setStatus(copy.fail);}finally{setSending(false);}
 }
 async function copyEnquiry(){try{await navigator.clipboard.writeText(enquiry);setStatus(copy.copied);}catch{setStatus(copy.copyError);}}
 function download(){const url=URL.createObjectURL(new Blob([enquiry],{type:"text/plain;charset=utf-8"}));const anchor=document.createElement("a");anchor.href=url;anchor.download=`RVP-${kind}-enquiry.txt`;anchor.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 function field(name:Field){
  const choices=selections[name],required=name==="name"||name==="phone";
  const inputId=`${id}-${name}`, errorId=`${inputId}-error`;
  return <div key={name} className={cn("form-field",(name==="message"||name==="quantity")&&"is-full")}><label htmlFor={inputId}>{copy[name]} {required?<span aria-hidden="true">*</span>:<span className="font-normal text-muted-foreground">({copy.optional})</span>}</label>
   {choices?<div className="form-select"><select id={inputId} name={name} value={values[name]} onChange={event=>update(name,event.target.value)}><option value="">{copy.choose}</option>{choices.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select><ChevronDown size={17} aria-hidden="true"/></div>
   :name==="message"?<textarea id={inputId} name={name} value={values[name]} onChange={event=>update(name,event.target.value)}/>
   :name==="quantity"?<div className="form-quantity"><input id={inputId} name={name} type="number" inputMode="decimal" min="0.01" step="any" value={values[name]} onChange={event=>update(name,event.target.value)} aria-invalid={!!errors[name]} aria-describedby={errors[name]?errorId:undefined}/><div className="form-select"><select aria-label={copy.unit} name="unit" value={unit} onChange={event=>setUnit(event.target.value)}>{units.filter(option=>kind!=="pickup"||["litres","barrels"].includes(option[0])).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select><ChevronDown size={17} aria-hidden="true"/></div></div>
   :<input id={inputId} name={name} type={name==="phone"?"tel":name==="email"?"email":"text"} autoComplete={name==="name"?"name":name==="company"?"organization":name==="phone"?"tel":name==="email"?"email":"off"} required={required} value={values[name]} onChange={event=>update(name,event.target.value)} aria-invalid={!!errors[name]} aria-describedby={errors[name]?errorId:undefined}/>}
   {errors[name]&&<p id={errorId} className="form-error" role="alert">{errors[name]}</p>}
  </div>;
 }
 return <div className="enquiry-form">
  {sent?<div role="status" className="enquiry-review"><CheckCircle2 size={40} className="text-brand"/><h3 className="mt-5">{copy.sent}</h3></div>:review?<div ref={reviewPanel} tabIndex={-1} className="enquiry-review">
   <h3>{copy.heading}</h3><p className="form-status-note">{connected?copy.appNote:copy.unsent}</p>{photos.length>0&&!company.enquiryEndpoint&&<p className="form-help mb-5">{tx(language,"Attach your selected photos in your email or WhatsApp app before sending.","ಕಳುಹಿಸುವ ಮೊದಲು ಆಯ್ದ ಚಿತ್ರಗಳನ್ನು ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಆ್ಯಪ್‌ನಲ್ಲಿ ಲಗತ್ತಿಸಿ.")}</p>}<pre>{enquiry}</pre>
   <div className="site-actions">{company.enquiryEndpoint?<button className="site-button" onClick={send} disabled={sending}>{sending?copy.sending:copy.send}</button>:<>{company.email&&<a className="site-button" href={`mailto:${company.email}?subject=${encodeURIComponent("RVP Refinery enquiry")}&body=${encodeURIComponent(enquiry)}`}>{copy.continueEmail}</a>}{company.whatsapp&&<a className="site-button" href={whatsappHref(enquiry)} target="_blank" rel="noreferrer">{copy.continueWhatsapp}</a>}</>}
   <button className="site-button" onClick={download}><Download size={18} aria-hidden="true"/>{copy.download}</button><button className="site-button is-outline" onClick={copyEnquiry}><Copy size={18} aria-hidden="true"/>{copy.copy}</button><button className="site-button is-outline" onClick={()=>{setReview(false);setStatus("");}}><Pencil size={17} aria-hidden="true"/>{copy.edit}</button></div>{status&&<p className="form-help mt-5" role="status">{status}</p>}
  </div>:<form ref={form} onSubmit={prepare} noValidate>
   {!connected&&<p className="form-status-note">{copy.note}</p>}<p className="form-help mb-6">* {copy.required}</p><div className="form-grid">{fields.map(field)}
    {kind==="pickup"&&<div className="form-field is-full"><label htmlFor={`${id}-photos`}>{copy.photos} ({copy.optional})</label><input ref={photoInput} hidden id={`${id}-photos`} name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple aria-describedby={`${id}-photo-help`} onChange={event=>{const files=Array.from(event.target.files||[]);if(files.length>3||files.some(file=>file.size>5*1024*1024||!["image/jpeg","image/png","image/webp"].includes(file.type))){setErrors(previous=>({...previous,photos:copy.invalidPhoto}));setPhotos([]);event.target.value="";}else{setPhotos(files);setErrors(previous=>({...previous,photos:""}));}}}/><button type="button" className="site-button is-outline w-fit" onClick={()=>photoInput.current?.click()}>{copy.choosePhotos}</button><p className="form-help">{photos.length ? `${photos.length} ${copy.selected}` : copy.noPhotos}</p><p id={`${id}-photo-help`} className="form-help">{copy.photoHelp}</p>{errors.photos&&<p role="alert" className="form-error">{errors.photos}</p>}<div className="form-photos">{previews.map((url,index)=><img key={url} src={url} alt={photos[index]?.name||""} width={90} height={74}/>)}</div></div>}
   </div><label className="form-consent"><input type="checkbox" name="consent" checked={consent} onChange={event=>{setConsent(event.target.checked);setErrors(previous=>({...previous,consent:""}));}} aria-invalid={!!errors.consent}/><span>{copy.consent} *</span></label>{errors.consent&&<p className="form-error mb-5" role="alert">{errors.consent}</p>}<button type="submit" className="site-button">{connected?copy.review:copy.prepare}</button>
  </form>}
 </div>;
}
