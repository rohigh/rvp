import {createReadStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {getCliClient} from 'sanity/cli';
import {articles} from '../../src/lib/articles.ts';
import project from '../project.json';

const client=getCliClient({apiVersion:project.apiVersion}).withConfig({projectId:project.projectId,dataset:project.dataset,useCdn:false,perspective:'published'});
if(client.config().projectId!=='4crwfylc'||client.config().dataset!=='production')throw new Error('Seed is restricted to the RVP production dataset.');
const block=(key:string,text:string,style='normal')=>({_key:key,_type:'block',style,markDefs:[],children:[{_key:`${key}-text`,_type:'span',text,marks:[]}]});
async function seed() {
  for(const [index,article] of articles.entries()) {
    const id=`rvp-guide-${article.slug}`;
    if(await client.getDocument(id)){console.log(`Already present: ${article.slug}`);continue;}
    const file=fileURLToPath(new URL(`../../public${article.image}`,import.meta.url));
    const asset=await client.assets.upload('image',createReadStream(file),{filename:article.image.split('/').pop()});
    const translations=(field:'title'|'excerpt'|'takeaway')=>({en:article.en[field],kn:article.kn[field]});
    const body=Object.fromEntries((['en','kn'] as const).map(language=>[language,article[language].sections.flatMap((section,i)=>[block(`heading-${i}`,section.heading,'h2'),block(`paragraph-${i}`,section.body)])]));
    await client.createIfNotExists({
      _id:id,_type:'post',slug:{_type:'slug',current:article.slug},category:article.category,
      title:translations('title'),excerpt:translations('excerpt'),takeaway:translations('takeaway'),body,
      mainImage:{_type:'image',asset:{_type:'reference',_ref:asset._id},alt:{en:'Industrial oil collection and processing',kn:'ಕೈಗಾರಿಕಾ ತೈಲ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಸಂಸ್ಕರಣೆ'}},
      author:'RVP Refinery',publishedAt:new Date(Date.UTC(2026,10,28,6,0-index)).toISOString(),featured:index===0,
      ...(article.source?{source:article.source}:{}),
    });
    console.log(`Published bilingual guide: ${article.slug}`);
  }
  const total=await client.fetch('count(*[_type=="post" && !(_id in path("drafts.**"))])');
  console.log(`RVP published post count: ${total}`);
}
seed().catch(error=>{console.error(error.message);process.exitCode=1;});
