import {cp, readFile, writeFile} from 'node:fs/promises';
await cp(new URL('../sanity/dist/', import.meta.url), new URL('../dist/studio/', import.meta.url), {recursive:true});
const entry = new URL('../dist/studio/index.html', import.meta.url);
await writeFile(entry, (await readFile(entry,'utf8')).replaceAll('href="/static/','href="/studio/static/'));
console.log('Sanity Studio copied to /studio/');
