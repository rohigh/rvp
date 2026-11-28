import {useEffect, useMemo, useState} from 'react';
import {Clock3, Copy, Search} from 'lucide-react';
import {articleHeadings, blockText, blogCategories, type BlogPost} from '@/lib/sanity';
import {useBlogPosts} from '@/lib/use-blog-posts';
import {ArticleBody} from '@/components/blog/article-body';
import {pageHref, type Language} from '@/lib/navigation';
import {metadata, setPageMeta, tx} from '@/lib/company';
import {cn} from '@/lib/utils';
import {LinkButton, PageFrame, Reveal, SectionHeading} from '@/components/site/shared';
import './blogs.css';

const categoryName=(key:string,l:Language)=>({
  'used-oil':tx(l,'Used oil','ಬಳಸಿದ ತೈಲ'),
  'base-oil':tx(l,'Base oil','ಬೇಸ್ ಆಯಿಲ್'),
  business:tx(l,'For businesses','ಉದ್ಯಮಗಳಿಗಾಗಿ'),
  'industrial-fuels':tx(l,'Industrial fuels','ಕೈಗಾರಿಕಾ ಇಂಧನಗಳು'),
}[key]||tx(l,'For businesses','ಉದ್ಯಮಗಳಿಗಾಗಿ'));
const readTime=(article:BlogPost,l:Language)=>Math.max(1,Math.ceil(article[l].body.map(blockText).join(' ').trim().split(/\s+/).length/180));
const publicationDate=(article:BlogPost,l:Language)=>new Intl.DateTimeFormat(l==='kn'?'kn-IN':'en-IN',{day:'numeric',month:'short',year:'numeric'}).format(new Date(article.publishedAt));

function ArticleCard({article,language:l,featured=false}:{article:BlogPost;language:Language;featured?:boolean}) {
  const copy=article[l],href=pageHref(l,`blogs/${article.slug}`);
  return <Reveal className={cn('blog-card',featured&&'is-featured')}>
    <a href={href} className="blog-card-image" tabIndex={-1} aria-hidden="true"><img src={article.image} style={{objectPosition:article.imagePosition}} alt="" width={1000} height={667} loading={featured?'eager':'lazy'}/></a>
    <div className="blog-card-copy">
      <div className="blog-meta"><span>{categoryName(article.category,l)}</span><span><Clock3 size={14} aria-hidden="true"/>{readTime(article,l)} {tx(l,'min read','ನಿಮಿಷ ಓದು')}</span></div>
      <h2><a href={href}>{copy.title}</a></h2><p>{copy.excerpt}</p>
      <a className="blog-read-link" href={href} aria-label={tx(l,'Read guide: ','ಲೇಖನ ಓದಿ: ')+copy.title}>{tx(l,'Read guide','ಲೇಖನ ಓದಿ')}</a>
    </div>
  </Reveal>;
}

export default function BlogsPage({language:l,articleSlug}:{language:Language;articleSlug?:string}) {
  const {posts:articles,loading,error,retry}=useBlogPosts();
  const [query,setQuery]=useState(''),[category,setCategory]=useState('all'),[copyStatus,setCopyStatus]=useState('');
  const article=articles.find(item=>item.slug===articleSlug);
  useEffect(()=>{
    if(loading||error)return;
    if(articleSlug) {
      setPageMeta(article?(article[l].seo?.title||article[l].title)+' | RVP Refinery':tx(l,'Guide not found | RVP Refinery','ಲೇಖನ ಸಿಗಲಿಲ್ಲ | ಆರ್‌ವಿಪಿ'),article?(article[l].seo?.description||article[l].excerpt):tx(l,'Explore the RVP Refinery guides.','ಆರ್‌ವಿಪಿ ರಿಫೈನರಿ ಲೇಖನಗಳನ್ನು ನೋಡಿ.'));
    } else {setPageMeta(...metadata.blogs[l]);}
    setCopyStatus('');
  },[article,l,articleSlug,loading,error]);
  const filtered=useMemo(()=>articles.filter(item=>(category==='all'||item.category===category)&&(!query.trim()||[item.en.title,item.kn.title,item.en.excerpt,item.kn.excerpt].join(' ').toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))),[articles,category,query]);

  if(loading||error)return <PageFrame><section className="site-section"><div className="page-shell blog-load-state" aria-busy={loading}>
    {loading?<p role="status">{tx(l,'Loading our latest guides…','ಹೊಸ ಲೇಖನಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ…')}</p>:<div role="alert"><h1>{tx(l,'The blog is temporarily unavailable.','ಬ್ಲಾಗ್ ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ.')}</h1><p>{tx(l,'Please try again in a moment.','ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.')}</p><button className="site-button mt-5" onClick={retry}>{tx(l,'Try again','ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ')}</button></div>}
  </div></section></PageFrame>;

  if(articleSlug&&!article)return <PageFrame><section className="site-section"><div className="page-shell site-empty"><h1>{tx(l,'This guide could not be found.','ಈ ಲೇಖನ ಸಿಗಲಿಲ್ಲ.')}</h1><p>{tx(l,'Browse our latest used oil and base oil guides instead.','ಬಳಸಿದ ತೈಲ ಮತ್ತು ಬೇಸ್ ಆಯಿಲ್ ಕುರಿತು ಇತರ ಲೇಖನಗಳನ್ನು ನೋಡಿ.')}</p><div className="site-actions justify-center"><LinkButton href={pageHref(l,'blogs')}>{tx(l,'All guides','ಎಲ್ಲ ಲೇಖನಗಳು')}</LinkButton></div></div></section></PageFrame>;

  if(article) {
    const copy=article[l],related=articles.filter(item=>item.slug!==article.slug).slice(0,2),headings=articleHeadings(copy.body);
    return <PageFrame>
      <article>
        <header className="article-hero"><div className="page-shell">
          <div className="page-breadcrumb"><a href={pageHref(l,'')}>{tx(l,'Home','ಮುಖಪುಟ')}</a><span>/</span><a href={pageHref(l,'blogs')}>{tx(l,'Blogs','ಬ್ಲಾಗ್‌ಗಳು')}</a></div>
          <Reveal><div className="blog-meta"><span>{categoryName(article.category,l)}</span><span>{readTime(article,l)} {tx(l,'min read','ನಿಮಿಷ ಓದು')}</span><time dateTime={article.publishedAt}>{publicationDate(article,l)}</time></div><h1>{copy.title}</h1><p>{copy.excerpt}</p><p className="article-byline">{tx(l,'By ','ಲೇಖಕರು: ')}{article.author}</p></Reveal>
          <img src={article.image} style={{objectPosition:article.imagePosition}} alt={article.imageAlt[l]||''} width={1400} height={700} className="article-cover"/>
        </div></header>
        <div className="page-shell article-layout">
          <aside className="article-contents">
            {headings.length>0&&<><p>{tx(l,'IN THIS GUIDE','ಈ ಲೇಖನದಲ್ಲಿ')}</p><nav aria-label={tx(l,'Article contents','ಲೇಖನದ ವಿಷಯಗಳು')}>{headings.map(heading=><a key={heading.id} href={pageHref(l,`blogs/${article.slug}`,heading.id)}>{heading.text}</a>)}</nav></>}
            <button onClick={async()=>{try{await navigator.clipboard.writeText(location.href);setCopyStatus(tx(l,'Link copied.','ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ.'));}catch{setCopyStatus(tx(l,'Copy the address from your browser.','ಬ್ರೌಸರ್‌ನಿಂದ ವಿಳಾಸವನ್ನು ನಕಲಿಸಿ.'));}}}><Copy size={16} aria-hidden="true"/>{tx(l,'Copy article link','ಲೇಖನದ ಲಿಂಕ್ ನಕಲಿಸಿ')}</button>
            {copyStatus&&<p role="status" className="copy-status">{copyStatus}</p>}
          </aside>
          <div className="article-body">
            <ArticleBody body={copy.body} language={l}/>
            {copy.takeaway&&<div className="article-takeaway"><p className="site-eyebrow">{tx(l,'TAKE THIS WITH YOU','ನೆನಪಿಡಿ')}</p><p>{copy.takeaway}</p></div>}
            {article.source&&<p className="article-source">{tx(l,'Further reading: ','ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗೆ: ')}<a href={article.source.url} target="_blank" rel="noreferrer">{article.source.title}</a></p>}
            <div className="article-cta"><h2>{tx(l,'Have used oil to sell?','ಬಳಸಿದ ತೈಲ ಮಾರಾಟ ಮಾಡಬೇಕೇ?')}</h2><p>{tx(l,'Tell RVP the oil type, quantity and your pickup location.','ತೈಲದ ಪ್ರಕಾರ, ಪ್ರಮಾಣ ಮತ್ತು ಸಂಗ್ರಹಣೆಯ ಸ್ಥಳವನ್ನು ಆರ್‌ವಿಪಿಗೆ ತಿಳಿಸಿ.')}</p><LinkButton href={pageHref(l,'used-oil-collection','pickup-form')}>{tx(l,'Discuss collection','ಸಂಗ್ರಹಣೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ')}</LinkButton></div>
          </div>
        </div>
      </article>
      {related.length>0&&<section className="site-section cloud"><div className="page-shell"><SectionHeading eyebrow={tx(l,'KEEP EXPLORING','ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ')} title={tx(l,'More useful reads.','ಇನ್ನಷ್ಟು ಉಪಯುಕ್ತ ಲೇಖನಗಳು.')}/><div className="grid-2">{related.map(item=><ArticleCard key={item.slug} article={item} language={l}/>)}</div></div></section>}
    </PageFrame>;
  }

  const showFeatured=category==='all'&&!query.trim()&&filtered.length>0;
  return <PageFrame>
    <section className="blogs-intro"><div className="page-shell">
      <div className="page-breadcrumb"><a href={pageHref(l,'')}>{tx(l,'Home','ಮುಖಪುಟ')}</a><span>/</span><span>{tx(l,'Blogs','ಬ್ಲಾಗ್‌ಗಳು')}</span></div>
      <Reveal><p className="site-eyebrow">{tx(l,'KNOWLEDGE WORTH KEEPING','ಉಪಯುಕ್ತ ಮಾಹಿತಿ')}</p><h1>{tx(l,'Blogs','ಬ್ಲಾಗ್‌ಗಳು')}</h1><p className="hero-description">{tx(l,'Easy guides on used oil, base oil and industrial fuels. For the people who collect it, work with it, and give it a new purpose.','ಬಳಸಿದ ತೈಲ, ಬೇಸ್ ಆಯಿಲ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಇಂಧನಗಳ ಕುರಿತು ಸರಳ ಲೇಖನಗಳು. ಅದನ್ನು ಸಂಗ್ರಹಿಸಿ, ಬಳಸಿ, ಹೊಸ ಉಪಯೋಗ ನೀಡುವ ಜನರಿಗಾಗಿ.')}</p></Reveal>
    </div><img className="blogs-watermark" src="/brand/rvp-symbol.png" alt="" aria-hidden="true" width={256} height={248}/></section>
    <section className="site-section !pt-10"><div className="page-shell">
      <div className="blog-toolbar"><div className="blog-filters" aria-label={tx(l,'Filter guides by topic','ವಿಷಯದ ಪ್ರಕಾರ ಲೇಖನಗಳು')}>{['all',...blogCategories].map(key=><button key={key} aria-pressed={category===key} onClick={()=>setCategory(key)}>{key==='all'?tx(l,'All guides','ಎಲ್ಲ ಲೇಖನಗಳು'):categoryName(key,l)}</button>)}</div><label className="blog-search"><Search size={19} aria-hidden="true"/><span className="sr-only">{tx(l,'Search guides','ಲೇಖನಗಳನ್ನು ಹುಡುಕಿ')}</span><input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder={tx(l,'Search guides…','ಲೇಖನಗಳನ್ನು ಹುಡುಕಿ…')}/></label></div>
      <p className="blog-results" role="status">{filtered.length} {tx(l,filtered.length===1?'guide':'guides','ಲೇಖನಗಳು')}</p>
      {showFeatured&&<ArticleCard article={filtered[0]} language={l} featured/>}
      <div className="blog-grid">{(showFeatured?filtered.slice(1):filtered).map(item=><ArticleCard key={item.slug} article={item} language={l}/>)}</div>
      {!filtered.length&&<div className="site-empty"><h2>{articles.length?tx(l,'No guides found.','ಯಾವುದೇ ಲೇಖನ ಸಿಗಲಿಲ್ಲ.'):tx(l,'New guides are on the way.','ಹೊಸ ಲೇಖನಗಳು ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿವೆ.')}</h2>{articles.length>0&&<><p>{tx(l,'Try another search or explore all the guides.','ಬೇರೆ ಪದದಿಂದ ಹುಡುಕಿ ಅಥವಾ ಎಲ್ಲ ಲೇಖನಗಳನ್ನು ನೋಡಿ.')}</p><button className="site-button mt-5" onClick={()=>{setQuery('');setCategory('all');}}>{tx(l,'Show all guides','ಎಲ್ಲ ಲೇಖನಗಳನ್ನು ತೋರಿಸಿ')}</button></>}</div>}
    </div></section>
  </PageFrame>;
}
