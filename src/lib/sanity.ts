import type {PortableTextBlock, PortableTextSpan} from '@portabletext/types';
import type {Language} from './navigation';
import project from '../../sanity/project.json';

export type BlogCategory = 'used-oil' | 'base-oil' | 'business' | 'industrial-fuels';
export const blogCategories: BlogCategory[] = ['used-oil','base-oil','business','industrial-fuels'];
export type BlogImage = {_type:'image'; _key:string; alt?:Partial<Record<Language,string>>; caption?:Partial<Record<Language,string>>; asset?:{url:string; metadata?:{dimensions?:{width:number;height:number}}}};
export type BlogBlock = PortableTextBlock | BlogImage;
export type BlogCopy = {title:string;excerpt:string;body:BlogBlock[];takeaway:string;seo?:{title?:string;description?:string}};
export type BlogPost = {slug:string;category:BlogCategory;image:string;imagePosition:string;imageAlt:Partial<Record<Language,string>>;author:string;publishedAt:string;featured:boolean;source?:{title:string;url:string};en:BlogCopy;kn:BlogCopy};
export const blockText = (block:BlogBlock) => block._type === 'block' ? ((block as PortableTextBlock).children as PortableTextSpan[]).map(child => child.text || '').join('') : '';
export const articleHeadings = (body:BlogBlock[]) => body.filter((block):block is PortableTextBlock => block._type === 'block' && ['h2','h3'].includes((block as PortableTextBlock).style || '')).map(block=>({id:`article-section-${block._key}`,text:blockText(block)}));
export function safeLink(value:unknown): string | undefined {
  if(typeof value !== 'string') return;
  try {const url=new URL(value);if(['https:','http:','mailto:','tel:'].includes(url.protocol))return url.href;}catch{/* Ignore invalid links from CMS content. */}
}
export function sanityImage(value:unknown,width=1400):string | undefined {
  if(typeof value !== 'string')return;
  try {const url=new URL(value);if(url.protocol!=='https:' || url.hostname!=='cdn.sanity.io' || !url.pathname.startsWith(`/images/${project.projectId}/${project.dataset}/`))return;url.searchParams.set('auto','format');url.searchParams.set('fit','max');url.searchParams.set('w',String(width));return url.href;}catch{return;}
}
type SanityPost = {slug:string;category:BlogCategory;author?:string;publishedAt:string;featured?:boolean;title:Record<Language,string>;excerpt?:Partial<Record<Language,string>>;takeaway?:Partial<Record<Language,string>>;seo?:Partial<Record<Language,{title?:string;description?:string}>>;source?:{title?:string;url?:string};image:string;imageAlt?:Partial<Record<Language,string>>;hotspot?:{x:number;y:number};body?:Partial<Record<Language,BlogBlock[]>>};
const query = `*[_type == "post" && !(_id in path("drafts.**")) && !(_id in path("versions.**")) && defined(slug.current) && defined(title.en) && defined(title.kn) && count(body.en) > 0 && count(body.kn) > 0 && dateTime(publishedAt) <= dateTime(now())] | order(featured desc, publishedAt desc, _id asc) {
  "slug":slug.current, category, author, publishedAt, featured, title, excerpt, takeaway, seo, source,
  "image":mainImage.asset->url, "imageAlt":mainImage.alt, "hotspot":mainImage.hotspot,
  "body":{"en":body.en[]{...,asset->{url,metadata{dimensions}}},"kn":body.kn[]{...,asset->{url,metadata{dimensions}}}}
}`;
export async function fetchBlogPosts(signal:AbortSignal):Promise<BlogPost[]> {
  const url=new URL(`https://${project.projectId}.apicdn.sanity.io/v${project.apiVersion}/data/query/${project.dataset}`);
  url.searchParams.set('query',query);url.searchParams.set('perspective','published');
  const response=await fetch(url,{signal});
  if(!response.ok)throw new Error(`Blog request failed (${response.status})`);
  const data=await response.json();
  if(!Array.isArray(data.result))throw new Error('Unexpected blog response');
  return data.result.flatMap((post:SanityPost):BlogPost[]=>{
    const image=sanityImage(post.image);
    if(!image || !post.slug || !post.title?.en || !post.title?.kn)return [];
    const copy=(language:Language):BlogCopy=>({title:post.title[language],excerpt:post.excerpt?.[language]||'',body:post.body?.[language]||[],takeaway:post.takeaway?.[language]||'',seo:post.seo?.[language]});
    const sourceUrl=safeLink(post.source?.url);
    return [{slug:post.slug,category:blogCategories.includes(post.category)?post.category:'business',image,imagePosition:`${(post.hotspot?.x??.5)*100}% ${(post.hotspot?.y??.5)*100}%`,imageAlt:post.imageAlt||{},author:post.author||'RVP Refinery',publishedAt:post.publishedAt,featured:!!post.featured,source:sourceUrl&&post.source?.title?{title:post.source.title,url:sourceUrl}:undefined,en:copy('en'),kn:copy('kn')}];
  });
}
