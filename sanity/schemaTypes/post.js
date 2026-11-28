import {defineField, defineType, defineArrayMember} from 'sanity';
const languages = [{name:'en', title:'English'}, {name:'kn', title:'ಕನ್ನಡ / Kannada'}];
const localized = (name, title, type, extra = {}) => defineField({
  name, title, type:'object',
  fields: languages.map(language => defineField({
    ...language, type, ...extra, validation: rule => rule.required(),
  })),
  validation: rule => rule.required(),
});
const imageFields = [
  localized('alt', 'Image description', 'string'),
  defineField({name:'caption', title:'Caption (optional)', type:'object', fields: languages.map(l => ({...l, type:'string'}))}),
];
const body = () => [
  defineArrayMember({
    type:'block',
    styles:[{title:'Paragraph',value:'normal'},{title:'Heading',value:'h2'},{title:'Subheading',value:'h3'},{title:'Quote',value:'blockquote'}],
    lists:[{title:'Bullet list',value:'bullet'},{title:'Numbered list',value:'number'}],
    marks:{
      decorators:[{title:'Bold',value:'strong'},{title:'Italic',value:'em'}],
      annotations:[{name:'link',title:'Link',type:'object',fields:[{name:'href',title:'URL',type:'url',validation:rule=>rule.required().uri({scheme:['http','https','mailto','tel']})}]}],
    },
  }),
  defineArrayMember({type:'image',options:{hotspot:true},fields:imageFields,validation:rule=>rule.required().assetRequired()}),
];
export const post = defineType({
  name:'post', title:'Blog post', type:'document',
  description:'Write both translations, then publish. Published changes appear on the website when readers open or refresh Blogs.',
  groups:[{name:'details',title:'Post details',default:true},{name:'content',title:'English & Kannada'},{name:'seo',title:'Search description'}],
  fields:[
    {...localized('title','Title','string'),group:'details'},
    defineField({name:'slug',title:'URL slug',type:'slug',group:'details',description:'Shared by both languages. Keep existing slugs unchanged to preserve shared links.',options:{source:'title.en',maxLength:96},validation:rule=>rule.required().custom(value=>!value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) || 'Use lowercase letters, numbers and hyphens.')}),
    defineField({name:'category',title:'Topic',type:'string',group:'details',initialValue:'used-oil',options:{list:[{title:'Used oil',value:'used-oil'},{title:'Base oil',value:'base-oil'},{title:'For businesses',value:'business'},{title:'Industrial fuels',value:'industrial-fuels'}]},validation:rule=>rule.required()}),
    defineField({name:'featured',title:'Feature this post',type:'boolean',group:'details',initialValue:false,description:'The newest featured post leads the blog listing.'}),
    defineField({name:'author',title:'Author',type:'string',group:'details',initialValue:'RVP Refinery',validation:rule=>rule.required()}),
    defineField({name:'publishedAt',title:'Publication date',type:'datetime',group:'details',initialValue:()=>new Date().toISOString(),description:'Future-dated posts stay hidden on the site until this time. Publish the document as well.',validation:rule=>rule.required()}),
    defineField({name:'mainImage',title:'Cover image',type:'image',group:'details',options:{hotspot:true},fields:imageFields,validation:rule=>rule.required().assetRequired()}),
    {...localized('excerpt','Short introduction','text',{rows:3}),group:'content'},
    defineField({name:'body',title:'Article body',type:'object',group:'content',fields:languages.map(language=>({...language,type:'array',of:body(),validation:rule=>rule.required().min(1)})),validation:rule=>rule.required()}),
    {...localized('takeaway','Key takeaway','text',{rows:3}),group:'content'},
    defineField({name:'source',title:'Further reading (optional)',type:'object',group:'content',fields:[{name:'title',title:'Source name',type:'string'},{name:'url',title:'Source link',type:'url',validation:rule=>rule.uri({scheme:['http','https']})}],validation:rule=>rule.custom(value=>!value || (!!value.title && !!value.url) || 'Provide both a source name and URL.')}),
    defineField({name:'seo',title:'Search description (optional)',type:'object',group:'seo',fields:languages.map(language=>({...language,type:'object',fields:[{name:'title',title:'Search title',type:'string',validation:rule=>rule.max(65).warning()},{name:'description',title:'Search description',type:'text',rows:3,validation:rule=>rule.max(160).warning()}]}))}),
  ],
  orderings:[{title:'Publication date, newest first',name:'publishedAtDesc',by:[{field:'publishedAt',direction:'desc'}]}],
  preview:{select:{title:'title.en',subtitle:'title.kn',media:'mainImage'}},
});
