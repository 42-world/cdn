(()=>{var P=Object.defineProperty,R=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var A=(r,t,e)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,g=(r,t)=>{for(var e in t||(t={}))w.call(t,e)&&A(r,e,t[e]);if(S)for(var e of S(t))j.call(t,e)&&A(r,e,t[e]);return r},b=(r,t)=>R(r,D(t));var T=(r,t)=>{var e={};for(var n in r)w.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&S)for(var n of S(r))t.indexOf(n)<0&&j.call(r,n)&&(e[n]=r[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[588],{"./src/components/CommentInput/CommentInput.stories.ts":(r,t,e)=>{var h,E,C;"use strict";e.r(t),e.d(t,{Primary:()=>_,__namedExportsOrder:()=>p,default:()=>f});var n=e("./node_modules/react/index.js"),i;function c(){return c=Object.assign?Object.assign.bind():function(y){for(var v=1;v<arguments.length;v++){var I=arguments[v];for(var O in I)Object.prototype.hasOwnProperty.call(I,O)&&(y[O]=I[O])}return y},c.apply(this,arguments)}var u=function(v){return n.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},v),i||(i=n.createElement("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})))};const l=u;var m=e("./node_modules/classnames/index.js"),o=e.n(m),a=e("./src/components/Button/index.ts"),s=e("./node_modules/react/jsx-runtime.js");const d=(0,n.forwardRef)((O,I)=>{var B=O,{className:y}=B,v=T(B,["className"]);return(0,s.jsxs)("div",{className:"flex items-center rounded-3xl border border-border-secondary p-2 pl-4 focus-within:border-color-system_200",children:[(0,s.jsx)("input",g({ref:I,className:o()("h-8 w-full flex-1 bg-transparent text-sm outline-none",y)},v)),(0,s.jsx)(a.z,{type:"submit",icon:l,"aria-label":"\uB313\uAE00 \uC791\uC131"})]})});try{d.displayName="CommentInput",d.__docgenInfo={description:"\uB313\uAE00 \uC785\uB825\uCC3D",displayName:"CommentInput",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CommentInput/CommentInput.tsx#CommentInput"]={docgenInfo:d.__docgenInfo,name:"CommentInput",path:"src/components/CommentInput/CommentInput.tsx#CommentInput"})}catch(y){}const x={title:"rookies/CommentInput",component:d},_={args:{placeholder:"Lorem ipsum"}},f=x;_.parameters=b(g({},_.parameters),{docs:b(g({},(h=_.parameters)==null?void 0:h.docs),{source:g({originalSource:`{
  args: {
    placeholder: 'Lorem ipsum'
  }
}`},(C=(E=_.parameters)==null?void 0:E.docs)==null?void 0:C.source)})});const p=["Primary"]},"./src/components/Button/Button.tsx":(r,t,e)=>{"use strict";e.d(t,{z:()=>a});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),i=e("./node_modules/classnames/index.js"),c=e.n(i),u=e("./src/components/Icon/index.ts"),l=e("./src/components/Text/index.ts"),m=e("./node_modules/react/jsx-runtime.js");const o={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function a(s){var C;const E=s,{text:d,icon:x,className:_}=E,f=T(E,["text","icon","className"]),p=(C=s.variant)!=null?C:"primary",h=s.variant==="text"&&s.activated;return(0,m.jsxs)("button",b(g({className:(0,n.m)(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${o[p]}`,x&&!d?"px-2":"px-3",_)},f),{children:[x&&(0,m.jsx)(u.J,{svg:x,size:"small",className:c()(p==="primary"?"fill-color-white":"fill-text-secondary dark:fill-text-secondary_dark","transition-colors duration-300",{"group-hover:fill-color-system_200":p!=="primary","fill-color-system_200":h})}),d&&(0,m.jsx)(l.x,{text:d,size:"body2",weight:"medium",color:p==="primary"?"white":"secondary",className:c()("transition-colors duration-300",{"group-hover:text-color-system_200":p!=="primary","text-color-system_200":h})})]}))}a.displayName="Button";try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},activated:{defaultValue:null,description:"",name:"activated",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGSVGElement>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:a.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(s){}},"./src/components/Button/index.ts":(r,t,e)=>{"use strict";e.d(t,{z:()=>n.z});var n=e("./src/components/Button/Button.tsx")},"./src/components/Icon/Icon.tsx":(r,t,e)=>{"use strict";e.d(t,{J:()=>i});var n=e("./node_modules/react/jsx-runtime.js");function i(o){var a=o,{svg:c,size:u="medium",className:l}=a,m=T(a,["svg","size","className"]);const s={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[u]||{width:24,height:24};return(0,n.jsx)(c,g({viewBox:"0 0 24 24",width:s.width,height:s.height,className:l!=null?l:"fill-black dark:fill-white"},m))}i.displayName="Icon";try{i.displayName="Icon",i.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:i.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(c){}},"./src/components/Icon/index.ts":(r,t,e)=>{"use strict";e.d(t,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(r,t,e)=>{"use strict";e.d(t,{xv:()=>o});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),i=e("./node_modules/react/jsx-runtime.js");const c={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},u={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},l={left:"text-left",right:"text-right",center:"text-center"},m={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function o({className:a,text:s,size:d="body1",weight:x="regular",align:_="left",color:f="primary"}){return(0,i.jsx)("p",{className:(0,n.m)("font-display",c[d],u[x],l[_],m[f],a),children:s})}o.displayName="Text";try{o.displayName="Text",o.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:o.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(a){}},"./src/components/Text/index.ts":(r,t,e)=>{"use strict";e.d(t,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")},"./node_modules/classnames/index.js":(r,t)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,c="[native code]";function u(){for(var l=[],m=0;m<arguments.length;m++){var o=arguments[m];if(o){var a=typeof o;if(a==="string"||a==="number")l.push(o);else if(Array.isArray(o)){if(o.length){var s=u.apply(null,o);s&&l.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){l.push(o.toString());continue}for(var d in o)i.call(o,d)&&o[d]&&l.push(d)}}}return l.join(" ")}r.exports?(u.default=u,r.exports=u):(e=[],n=function(){return u}.apply(t,e),n!==void 0&&(r.exports=n))})()}}]);})();