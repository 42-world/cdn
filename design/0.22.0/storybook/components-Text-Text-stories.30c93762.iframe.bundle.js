"use strict";(()=>{var A=Object.defineProperty,S=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var E=(n,t,e)=>t in n?A(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,a=(n,t)=>{for(var e in t||(t={}))P.call(t,e)&&E(n,e,t[e]);if(w)for(var e of w(t))R.call(t,e)&&E(n,e,t[e]);return n},r=(n,t)=>S(n,O(t));(self.webpackChunk_rookies_team_design=self.webpackChunk_rookies_team_design||[]).push([[874],{"./src/components/Text/Text.stories.ts":(n,t,e)=>{var m,g,_,c,x,v,f,h,T,b,k,C;e.r(t),e.d(t,{AlignCenter:()=>i,AlignRight:()=>o,ColorSecondary:()=>s,Primary:()=>l,__namedExportsOrder:()=>u,default:()=>d});var y=e("./src/components/Text/Text.tsx");const p={title:"rookies/Text",component:y.xv},l={args:{text:"Lorem ipsum",size:"body1",weight:"medium"}},o={args:r(a({},l.args),{align:"right"})},i={args:r(a({},l.args),{align:"center"})},s={args:r(a({},l.args),{color:"secondary"})},d=p;l.parameters=r(a({},l.parameters),{docs:r(a({},(m=l.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
  args: {
    text: 'Lorem ipsum',
    size: 'body1',
    weight: 'medium'
  }
}`},(_=(g=l.parameters)==null?void 0:g.docs)==null?void 0:_.source)})}),o.parameters=r(a({},o.parameters),{docs:r(a({},(c=o.parameters)==null?void 0:c.docs),{source:a({originalSource:`{
  args: {
    ...Primary.args,
    align: 'right'
  }
}`},(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source)})}),i.parameters=r(a({},i.parameters),{docs:r(a({},(f=i.parameters)==null?void 0:f.docs),{source:a({originalSource:`{
  args: {
    ...Primary.args,
    align: 'center'
  }
}`},(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source)})}),s.parameters=r(a({},s.parameters),{docs:r(a({},(b=s.parameters)==null?void 0:b.docs),{source:a({originalSource:`{
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`},(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source)})});const u=["Primary","AlignRight","AlignCenter","ColorSecondary"]},"./src/components/Text/Text.tsx":(n,t,e)=>{e.d(t,{xv:()=>d});var y=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),p=e("./node_modules/react/jsx-runtime.js");const l={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},o={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},i={left:"text-left",right:"text-right",center:"text-center"},s={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function d({className:u,text:m,size:g="body1",weight:_="regular",align:c="left",color:x="primary"}){return(0,p.jsx)("p",{className:(0,y.m)("font-display",l[g],o[_],i[c],s[x],u),children:m})}d.displayName="Text";try{d.displayName="Text",d.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:d.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(u){}}}]);})();
