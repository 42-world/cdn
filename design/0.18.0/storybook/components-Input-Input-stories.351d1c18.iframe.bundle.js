(()=>{var Q=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var W=(t,a,e)=>a in t?Q(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))q.call(a,e)&&W(t,e,a[e]);if(T)for(var e of T(a))z.call(a,e)&&W(t,e,a[e]);return t},x=(t,a)=>X(t,Z(a));var U=(t,a)=>{var e={};for(var l in t)q.call(t,l)&&a.indexOf(l)<0&&(e[l]=t[l]);if(t!=null&&T)for(var l of T(t))a.indexOf(l)<0&&z.call(t,l)&&(e[l]=t[l]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[195],{"./src/components/Input/Input.stories.ts":(t,a,e)=>{var w,V,k,O,j,N,L,D,R;"use strict";e.r(a),e.d(a,{DefaultValue:()=>u,Primary:()=>o,SubLabel:()=>_,__namedExportsOrder:()=>A,default:()=>I});var l=e("./node_modules/classnames/index.js"),y=e.n(l),p=e("./node_modules/react/index.js");const c=({state:d,defaultState:f,onChange:v})=>{const[b,C]=(0,p.useState)(typeof f=="function"?f():f),h=d!=null,E=h?d:b,S=(0,p.useCallback)(m=>{typeof m=="function"&&(m=m()),h||C(m),v==null||v(m)},[]);return[E,S]};var i=e("./src/components/Text/index.ts"),r=e("./node_modules/react/jsx-runtime.js");const n=(0,p.forwardRef)((F,$)=>{var B=F,{id:d,label:f,value:v,defaultValue:b,subLabel:C,variant:h,rightAddon:E,hasError:S,maxLength:m,onValueChange:Y}=B,P=U(B,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const K=(0,p.useId)(),[M,G]=c({state:v,defaultState:b!=null?b:"",onChange:Y}),H=J=>{G(J.target.value)};return(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)("div",{className:"flex w-full",children:[f&&(0,r.jsx)("label",{htmlFor:d!=null?d:K,className:'text-sm font-normal leading-[1.8] text-text-secondary before:mr-1 before:content-["*"] dark:text-text-secondary_dark',children:f}),m&&(0,r.jsx)(i.x,{className:"ml-auto",text:`(${M.length}/${m})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,r.jsxs)("div",{className:y()("flex w-full items-center rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":h==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":h==="filled","border-color-red focus-within:border-color-red":S}),children:[(0,r.jsx)("input",s({ref:$,id:d!=null?d:K,className:"h-[44px] w-full bg-transparent text-base font-normal leading-[1.5] text-text-primary placeholder:text-text-tertiary focus:outline-none dark:text-text-primary_dark dark:placeholder:text-text-tertiary_dark",value:M,onChange:H,maxLength:m},P)),E&&(0,r.jsx)("span",{className:"flex",children:E})]}),C&&(0,r.jsx)(i.x,{text:C,size:"body2",weight:"regular",color:S?"red_200":"secondary"})]})});try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:n.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(d){}const g={title:"rookies/Input",component:n},o={args:{label:"\uD544\uC218 \uD56D\uBAA9",placeholder:"",maxLength:10,variant:"outline",hasError:!1}},u={args:x(s({},o.args),{defaultValue:"\uAE30\uBCF8\uAC12"})},_={args:x(s({},o.args),{subLabel:"Sub Label"})},I=g;o.parameters=x(s({},o.parameters),{docs:x(s({},(w=o.parameters)==null?void 0:w.docs),{source:s({originalSource:`{
  args: {
    label: '\uD544\uC218 \uD56D\uBAA9',
    placeholder: '',
    maxLength: 10,
    variant: 'outline',
    hasError: false
  }
}`},(k=(V=o.parameters)==null?void 0:V.docs)==null?void 0:k.source)})}),u.parameters=x(s({},u.parameters),{docs:x(s({},(O=u.parameters)==null?void 0:O.docs),{source:s({originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: '\uAE30\uBCF8\uAC12'
  }
}`},(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source)})}),_.parameters=x(s({},_.parameters),{docs:x(s({},(L=_.parameters)==null?void 0:L.docs),{source:s({originalSource:`{
  args: {
    ...Primary.args,
    subLabel: 'Sub Label'
  }
}`},(R=(D=_.parameters)==null?void 0:D.docs)==null?void 0:R.source)})});const A=["Primary","DefaultValue","SubLabel"]},"./src/components/Text/Text.tsx":(t,a,e)=>{"use strict";e.d(a,{xv:()=>n});var l=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),y=e("./node_modules/react/jsx-runtime.js");const p={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},c={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},i={left:"text-left",right:"text-right",center:"text-center"},r={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function n({className:g,text:o,size:u="body1",weight:_="regular",align:I="left",color:A="primary"}){return(0,y.jsx)("p",{className:(0,l.m)("font-display",p[u],c[_],i[I],r[A],g),children:o})}n.displayName="Text";try{n.displayName="Text",n.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:n.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(g){}},"./src/components/Text/index.ts":(t,a,e)=>{"use strict";e.d(a,{x:()=>l.xv});var l=e("./src/components/Text/Text.tsx")},"./node_modules/classnames/index.js":(t,a)=>{var e,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var y={}.hasOwnProperty,p="[native code]";function c(){for(var i=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var g=typeof n;if(g==="string"||g==="number")i.push(n);else if(Array.isArray(n)){if(n.length){var o=c.apply(null,n);o&&i.push(o)}}else if(g==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){i.push(n.toString());continue}for(var u in n)y.call(n,u)&&n[u]&&i.push(u)}}}return i.join(" ")}t.exports?(c.default=c,t.exports=c):(e=[],l=function(){return c}.apply(a,e),l!==void 0&&(t.exports=l))})()}}]);})();