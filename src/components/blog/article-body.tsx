import {PortableText, type PortableTextComponents} from '@portabletext/react';
import {safeLink, sanityImage, type BlogBlock, type BlogImage} from '@/lib/sanity';
import type {Language} from '@/lib/navigation';

export function ArticleBody({body,language}:{body:BlogBlock[];language:Language}) {
  const components:Partial<PortableTextComponents>={
    block:{
      h2:({children,value})=><h2 id={`article-section-${value._key}`}>{children}</h2>,
      h3:({children,value})=><h3 id={`article-section-${value._key}`}>{children}</h3>,
    },
    marks:{link:({children,value})=>{const href=safeLink(value?.href);return href?<a href={href} rel="noreferrer">{children}</a>:<>{children}</>;}},
    types:{image:({value}:{value:BlogImage})=>{
      const src=sanityImage(value.asset?.url);if(!src)return null;
      const dimensions=value.asset?.metadata?.dimensions;
      return <figure><img src={src} alt={value.alt?.[language]||''} loading="lazy" width={dimensions?.width} height={dimensions?.height}/>{value.caption?.[language]&&<figcaption>{value.caption[language]}</figcaption>}</figure>;
    }},
  };
  return <div className="article-rich-text"><PortableText value={body} components={components}/></div>;
}
