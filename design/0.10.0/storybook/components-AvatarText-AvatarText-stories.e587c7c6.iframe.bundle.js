(()=>{var P=Object.defineProperty,K=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var L=(c,a,e)=>a in c?P(c,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[a]=e,C=(c,a)=>{for(var e in a||(a={}))M.call(a,e)&&L(c,e,a[e]);if(D)for(var e of D(a))V.call(a,e)&&L(c,e,a[e]);return c},R=(c,a)=>K(c,z(a));var j=(c,a)=>{var e={};for(var n in c)M.call(c,n)&&a.indexOf(n)<0&&(e[n]=c[n]);if(c!=null&&D)for(var n of D(c))a.indexOf(n)<0&&V.call(c,n)&&(e[n]=c[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[511],{"./src/components/AvatarText/AvatarText.stories.ts":(c,a,e)=>{var O,S,A;"use strict";e.r(a),e.d(a,{Primary:()=>v,__namedExportsOrder:()=>E,default:()=>T});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./src/components/Avatar/Avatar.tsx"),r=e("./src/components/Card/Card.tsx"),d=e("./src/components/Chip/Chip.tsx"),s=e("./src/components/Divider/index.ts"),t=e("./src/components/GroupHeader/GroupHeader.tsx"),o=e("./src/components/Icon/index.ts"),l=e("./src/components/Input/Input.tsx"),m=e("./src/components/ListItem/ListItem.tsx"),p=e("./src/components/Sample/Sample.tsx"),_=e("./src/components/Text/index.ts"),f=e("./src/components/Thumbnail/index.ts"),x=e("./src/components/Button/Button.tsx"),h=e("./node_modules/react/jsx-runtime.js");function g({src:b,alt:B="",size:I="40px",mainText:w,subText:N}){return(0,h.jsxs)("div",{className:u()("flex flex-row",{"gap-3":I==="40px","gap-4":I==="64px"}),children:[(0,h.jsx)(i.q,{src:b,alt:B,size:I}),(0,h.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,h.jsx)(_.x,{text:w,size:I==="64px"?"heading3":"body2",weight:"medium"}),N&&(0,h.jsx)(_.x,{text:N,size:I==="64px"?"body2":"small",color:"secondary"})]})]})}g.displayName="AvatarText";try{g.displayName="AvatarText",g.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:g.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(b){}const y={title:"rookies/AvatarText",component:g},v={args:{src:"https://picsum.photos/536/354",alt:"42world",size:"40px",mainText:"\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C"}},T=y;v.parameters=R(C({},v.parameters),{docs:R(C({},(O=v.parameters)==null?void 0:O.docs),{source:C({originalSource:`{
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: '42world',
    size: '40px',
    mainText: '\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C'
  }
}`},(A=(S=v.parameters)==null?void 0:S.docs)==null?void 0:A.source)})});const E=["Primary"]},"./src/components/Avatar/Avatar.tsx":(c,a,e)=>{"use strict";e.d(a,{q:()=>r});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./node_modules/react/jsx-runtime.js");function r({src:d,alt:s="",size:t="40px"}){return(0,i.jsx)("img",{src:d,alt:s,className:u()("rounded-full object-cover",{"w-10 h-10":t==="40px","w-16 h-16":t==="64px"})})}r.displayName="Avatar";try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:r.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(d){}},"./src/components/Button/Button.tsx":(c,a,e)=>{"use strict";e.d(a,{z:()=>t});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./src/components/Icon/index.ts"),r=e("./src/components/Text/index.ts"),d=e("./node_modules/react/jsx-runtime.js");const s={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function t(_){var f=_,{variant:o="primary",text:l,icon:m}=f,p=j(f,["variant","text","icon"]);return(0,d.jsxs)("button",R(C({className:u()(`group h-8 flex flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${s[o]}`,m&&!l?"px-2":"px-3")},p),{children:[m&&(0,d.jsx)(i.J,{svg:m,size:"small",className:u()(o==="primary"?"fill-color-white":"fill-text-secondary dark:fill-text-secondary_dark","transition-colors duration-300",{"group-hover:fill-color-system_200":o!=="primary"})}),l&&(0,d.jsx)(r.x,{text:l,size:"body2",weight:"medium",color:o==="primary"?"white":"secondary",className:u()("transition-colors duration-300",{"group-hover:text-color-system_200":o!=="primary"})})]}))}t.displayName="Button";try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGSVGElement>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:t.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(o){}},"./src/components/Card/Card.tsx":(c,a,e)=>{"use strict";e.d(a,{Z:()=>r});var n=e("./src/components/Text/index.ts"),u=e("./src/components/Thumbnail/index.ts"),i=e("./node_modules/react/jsx-runtime.js");function r({imageSrc:d,imageAlt:s,primary:t="",secondary:o="",detail:l}){return(0,i.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,i.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,i.jsx)(u.p,{src:d,alt:s,width:278,ratio:"16:9"})}),(0,i.jsx)("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300",children:(0,i.jsx)(n.x,{text:`${t} \xB7 ${o}`,size:"body2",weight:"regular",color:"secondary"})}),l&&(0,i.jsx)(n.x,{text:l,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"})]})}r.displayName="Card";try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:r.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(d){}},"./src/components/Chip/Chip.tsx":(c,a,e)=>{"use strict";e.d(a,{A:()=>s});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./src/components/Icon/index.ts"),r=e("./src/components/Text/index.ts"),d=e("./node_modules/react/jsx-runtime.js");function s({icon:t,text:o,selected:l}){return(0,d.jsxs)("div",{className:u()("w-fit h-8 flex flex-row items-center rounded-lg select-none",o?"px-3":"px-2",l?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark"),children:[t&&(0,d.jsx)(i.J,{svg:t,className:"mr-2"}),o&&(0,d.jsx)(r.x,{text:o,size:"body2",weight:"medium",color:l?"primary":"secondary"})]})}s.displayName="Chip";try{s.displayName="Chip",s.__docgenInfo={description:"",displayName:"Chip",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:s.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(t){}},"./src/components/Divider/Divider.tsx":(c,a,e)=>{"use strict";e.d(a,{i:()=>r});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./node_modules/react/jsx-runtime.js");function r(o){var l=o,{variant:d="primary",className:s}=l,t=j(l,["variant","className"]);return(0,i.jsx)("div",C({className:u()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":d==="primary","bg-border-secondary dark:bg-border-secondary_dark":d==="secondary"},s)},t))}r.displayName="Divider";try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:r.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(d){}},"./src/components/Divider/index.ts":(c,a,e)=>{"use strict";e.d(a,{i:()=>n.i});var n=e("./src/components/Divider/Divider.tsx")},"./src/components/GroupHeader/GroupHeader.tsx":(c,a,e)=>{"use strict";e.d(a,{t:()=>l});var n=e("./node_modules/react/index.js"),u;function i(){return i=Object.assign?Object.assign.bind():function(m){for(var p=1;p<arguments.length;p++){var _=arguments[p];for(var f in _)Object.prototype.hasOwnProperty.call(_,f)&&(m[f]=_[f])}return m},i.apply(this,arguments)}var r=function(p){return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},p),u||(u=n.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))};const d=r;var s=e("./src/components/Icon/index.ts"),t=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function l({href:m,text:p}){return(0,o.jsxs)("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:m,children:[(0,o.jsx)(t.x,{text:p,size:"heading3",weight:"semibold"}),(0,o.jsx)(s.J,{svg:d,className:"w-6 h-6"})]})}l.displayName="GroupHeader";try{l.displayName="GroupHeader",l.__docgenInfo={description:"",displayName:"GroupHeader",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/GroupHeader/GroupHeader.tsx#GroupHeader"]={docgenInfo:l.__docgenInfo,name:"GroupHeader",path:"src/components/GroupHeader/GroupHeader.tsx#GroupHeader"})}catch(m){}},"./src/components/Icon/Icon.tsx":(c,a,e)=>{"use strict";e.d(a,{J:()=>u});var n=e("./node_modules/react/jsx-runtime.js");function u(t){var o=t,{svg:i,size:r="medium",className:d}=o,s=j(o,["svg","size","className"]);const l={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[r]||{width:24,height:24};return(0,n.jsx)(i,C({viewBox:"0 0 24 24",width:l.width,height:l.height,className:d!=null?d:"fill-black dark:fill-white"},s))}u.displayName="Icon";try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(i){}},"./src/components/Icon/index.ts":(c,a,e)=>{"use strict";e.d(a,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Input/Input.tsx":(c,a,e)=>{"use strict";e.d(a,{I:()=>t});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./node_modules/react/index.js");const r=({state:o,defaultState:l,onChange:m})=>{const[p,_]=(0,i.useState)(typeof l=="function"?l():l),f=o!=null,x=f?o:p,h=(0,i.useCallback)(g=>{typeof g=="function"&&(g=g()),f||_(g),m==null||m(g)},[]);return[x,h]};var d=e("./src/components/Text/index.ts"),s=e("./node_modules/react/jsx-runtime.js");const t=(0,i.forwardRef)((E,T)=>{var O=E,{id:o,label:l,value:m,defaultValue:p,subLabel:_,variant:f,rightAddon:x,hasError:h,maxLength:g,onValueChange:y}=O,v=j(O,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const S=(0,i.useId)(),[A,b]=r({state:m,defaultState:p!=null?p:"",onChange:y}),B=I=>{b(I.target.value)};return(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,s.jsxs)("div",{className:"flex w-full",children:[l&&(0,s.jsx)("label",{htmlFor:o!=null?o:S,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:l}),g&&(0,s.jsx)(d.x,{className:"ml-auto",text:`(${A.length}/${g})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,s.jsxs)("div",{className:u()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":f==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":f==="filled","border-color-red focus-within:border-color-red":h}),children:[(0,s.jsx)("input",C({ref:T,id:o!=null?o:S,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:A,onChange:B,maxLength:g},v)),x&&(0,s.jsx)("span",{className:"flex",children:x})]}),_&&(0,s.jsx)(d.x,{text:_,size:"body2",weight:"regular",color:h?"red_200":"secondary"})]})});try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:t.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(o){}},"./src/components/ListItem/ListItem.tsx":(c,a,e)=>{"use strict";e.d(a,{H:()=>g});var n=e("./node_modules/react/index.js"),u;function i(){return i=Object.assign?Object.assign.bind():function(y){for(var v=1;v<arguments.length;v++){var T=arguments[v];for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(y[E]=T[E])}return y},i.apply(this,arguments)}var r=function(v){return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},v),u||(u=n.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})))};const d=r;var s;function t(){return t=Object.assign?Object.assign.bind():function(y){for(var v=1;v<arguments.length;v++){var T=arguments[v];for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(y[E]=T[E])}return y},t.apply(this,arguments)}var o=function(v){return n.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},v),s||(s=n.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})))};const l=o;var m=e("./src/components/Divider/index.ts"),p=e("./src/components/Icon/index.ts"),_=e("./src/components/Thumbnail/index.ts"),f=e("./src/components/Text/Text.tsx"),x=e("./node_modules/react/jsx-runtime.js");const h=(y,v)=>(0,x.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[y&&(0,x.jsx)(f.xv,{text:y,size:"body2",weight:"medium",color:"secondary"}),y&&v&&"\xB7",v&&(0,x.jsx)(f.xv,{text:v,size:"body2",weight:"regular",color:"secondary"})]});h.displayName="MergedSecondaryText";function g({title:y,thumbnailSrc:v,secondaryTextFirst:T,secondaryTextSecond:E,commentCnt:O,likeCnt:S,hasBorder:A=!0}){return(0,x.jsxs)("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none",children:[(0,x.jsxs)("div",{className:"flex flex-row items-center py-4",children:[v&&(0,x.jsx)(_.p,{src:v,alt:y,width:85,ratio:"16:9"}),(0,x.jsxs)("div",{className:"ml-3 flex-1",children:[h(T,E),(0,x.jsx)(f.xv,{text:y,size:"body1",weight:"medium",color:"primary"})]}),(0,x.jsxs)("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark",children:[O&&(0,x.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,x.jsx)(p.J,{svg:d,className:"w-4 h-4"}),(0,x.jsx)(f.xv,{text:O.toString(),size:"body2",weight:"regular",color:"secondary"})]}),S&&(0,x.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,x.jsx)(p.J,{svg:l,className:"w-4 h-4"}),(0,x.jsx)(f.xv,{text:S.toString(),size:"body2",weight:"regular",color:"secondary"})]})]})]}),A&&(0,x.jsx)(m.i,{variant:"secondary"})]})}g.displayName="ListItem";try{g.displayName="ListItem",g.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!1,type:{name:"string"}},secondaryTextFirst:{defaultValue:null,description:"",name:"secondaryTextFirst",required:!1,type:{name:"string"}},secondaryTextSecond:{defaultValue:null,description:"",name:"secondaryTextSecond",required:!1,type:{name:"string"}},commentCnt:{defaultValue:null,description:"",name:"commentCnt",required:!1,type:{name:"number"}},likeCnt:{defaultValue:null,description:"",name:"likeCnt",required:!1,type:{name:"number"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:g.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(y){}},"./src/components/Sample/Sample.tsx":(c,a,e)=>{"use strict";e.d(a,{d:()=>m});var n=e("./node_modules/@material-design-icons/svg/filled/face.svg"),u=e("./node_modules/react/index.js"),i;function r(){return r=Object.assign?Object.assign.bind():function(p){for(var _=1;_<arguments.length;_++){var f=arguments[_];for(var x in f)Object.prototype.hasOwnProperty.call(f,x)&&(p[x]=f[x])}return p},r.apply(this,arguments)}var d=function(_){return u.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},_),i||(i=u.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))};const s=d;var t=e("./src/components/Icon/index.ts"),o=e("./src/components/Text/index.ts"),l=e("./node_modules/react/jsx-runtime.js");function m({text:p}){return(0,l.jsxs)("div",{className:"flex flex-row items-center",children:[(0,l.jsx)(o.x,{text:`This is Samp3le! "${p}"`,size:"heading3",weight:"semibold",className:"mr-2"}),(0,l.jsx)(t.J,{svg:s,size:"xsmall"}),(0,l.jsx)(t.J,{svg:n.Z,size:"medium",className:"inline-block dark:fill-white fill-yellow-400 ml-1"})]})}m.displayName="Sample";try{m.displayName="Sample",m.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:m.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(p){}},"./src/components/Text/Text.tsx":(c,a,e)=>{"use strict";e.d(a,{xv:()=>s});var n=e("./node_modules/react/jsx-runtime.js");const u={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},i={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},r={left:"text-left",right:"text-right",center:"text-center"},d={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function s({className:t,text:o,size:l="body1",weight:m="regular",align:p="left",color:_="primary"}){return(0,n.jsx)("p",{className:`font-display
        ${u[l]}
        ${i[m]}
        ${r[p]}
        ${d[_]}
        ${t}
        `,children:o})}s.displayName="Text";try{s.displayName="Text",s.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:s.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(t){}},"./src/components/Text/index.ts":(c,a,e)=>{"use strict";e.d(a,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(c,a,e)=>{"use strict";e.d(a,{p:()=>r});var n=e("./node_modules/classnames/index.js"),u=e.n(n),i=e("./node_modules/react/jsx-runtime.js");function r({src:d,alt:s="",width:t,ratio:o="16:9"}){const l={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[o];return(0,i.jsx)("img",{src:d,alt:s,style:{width:t},className:u()(l,"object-cover rounded-2xl")})}r.displayName="Thumbnail";try{r.displayName="Thumbnail",r.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:r.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(d){}},"./src/components/Thumbnail/index.ts":(c,a,e)=>{"use strict";e.d(a,{p:()=>n.p});var n=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/@material-design-icons/svg/filled/face.svg":(c,a,e)=>{"use strict";e.d(a,{Z:()=>d});var n=e("./node_modules/react/index.js"),u;function i(){return i=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(s[l]=o[l])}return s},i.apply(this,arguments)}var r=function(t){return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},t),u||(u=n.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})))};const d=r},"./node_modules/classnames/index.js":(c,a)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,i="[native code]";function r(){for(var d=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var o=typeof t;if(o==="string"||o==="number")d.push(t);else if(Array.isArray(t)){if(t.length){var l=r.apply(null,t);l&&d.push(l)}}else if(o==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){d.push(t.toString());continue}for(var m in t)u.call(t,m)&&t[m]&&d.push(m)}}}return d.join(" ")}c.exports?(r.default=r,c.exports=r):(e=[],n=function(){return r}.apply(a,e),n!==void 0&&(c.exports=n))})()}}]);})();
