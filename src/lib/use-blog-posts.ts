import {useCallback, useEffect, useState} from 'react';
import {fetchBlogPosts, type BlogPost} from '@/lib/sanity';

export function useBlogPosts() {
  const [posts,setPosts]=useState<BlogPost[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [attempt,setAttempt]=useState(0);
  const retry=useCallback(()=>setAttempt(value=>value+1),[]);
  useEffect(()=>{
    let active=true;
    let controller:AbortController;
    let timer:ReturnType<typeof setTimeout>;
    const load=async()=>{
      controller?.abort();clearTimeout(timer);
      controller=new AbortController();const request=controller;
      timer=setTimeout(()=>request.abort(),15000);
      setLoading(true);setError(false);
      try {const result=await fetchBlogPosts(request.signal);if(active&&request===controller)setPosts(result);}
      catch {if(active&&request===controller)setError(true);}
      finally {if(active&&request===controller){clearTimeout(timer);setLoading(false);}}
    };
    void load();
    const onFocus=()=>{void load();};
    window.addEventListener('focus',onFocus);
    return ()=>{active=false;controller?.abort();clearTimeout(timer);window.removeEventListener('focus',onFocus);};
  },[attempt]);
  return {posts,loading,error,retry};
}
