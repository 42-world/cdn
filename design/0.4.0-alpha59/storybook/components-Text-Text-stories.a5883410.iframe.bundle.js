"use strict";(()=>{var p=Object.defineProperty,f=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))b.call(e,t)&&g(a,t,e[t]);if(m)for(var t of m(e))h.call(e,t)&&g(a,t,e[t]);return a},_=(a,e)=>f(a,T(e));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[874],{"./src/components/Text/Text.stories.ts":(a,e,t)=>{var l,n,o;t.r(e),t.d(e,{Primary:()=>r,__namedExportsOrder:()=>x,default:()=>s});var i=t("./src/components/Text/Text.tsx");const d={title:"rookies/Text",component:i.xv},r={args:{text:"\uD14C\uC2A4\uD2B8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4!",size:"body1",weight:"medium"}},s=d;r.parameters=_(u({},r.parameters),{docs:_(u({},(l=r.parameters)==null?void 0:l.docs),{source:u({originalSource:`{
  args: {
    text: '\uD14C\uC2A4\uD2B8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4!',
    size: 'body1',
    weight: 'medium'
  }
}`},(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source)})});const x=["Primary"]},"./src/components/Text/Text.tsx":(a,e,t)=>{t.d(e,{xv:()=>l});var i=t("./node_modules/react/jsx-runtime.js");const d={heading1:"text-4xl",heading2:"text-2xl",heading3:"text-lg",body1:"text-base",body2:"text-sm",small:"text-xs"},r={regular:"font-light",medium:"font-normal",semibold:"font-semibold"},s={left:"text-left",right:"text-right",center:"text-center"},x={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function l({text:n,size:o="body1",weight:c="regular",align:y="left",color:v="primary"}){return(0,i.jsx)("p",{className:`font-display
        ${d[o]}
        ${r[c]}
        ${s[y]}
        ${x[v]}
        `,children:n})}l.displayName="Text";try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:l.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(n){}}}]);})();
