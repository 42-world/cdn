"use strict";(()=>{var I=Object.defineProperty,f=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(t,n,e)=>n in t?I(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||(n={}))p.call(n,e)&&h(t,e,n[e]);if(u)for(var e of u(n))v.call(n,e)&&h(t,e,n[e]);return t},g=(t,n)=>f(t,w(n));var E=(t,n)=>{var e={};for(var s in t)p.call(t,s)&&n.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&u)for(var s of u(t))n.indexOf(s)<0&&v.call(t,s)&&(e[s]=t[s]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[870],{"./src/components/Icon/Icon.stories.ts":(t,n,e)=>{var o,d,l;e.r(n),e.d(n,{Primary:()=>a,__namedExportsOrder:()=>i,default:()=>_});var s=e("./node_modules/@material-design-icons/svg/filled/power.svg"),r=e("./src/components/Icon/Icon.tsx");const c={title:"rookies/Icon",component:r.J},a={args:{svg:s.Z,size:"xsmall"}},_=c;a.parameters=g(m({},a.parameters),{docs:g(m({},(o=a.parameters)==null?void 0:o.docs),{source:m({originalSource:`{
  // Add your story args here
  args: {
    svg: AddCard,
    size: 'xsmall'
  }
}`},(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});const i=["Primary"]},"./src/components/Icon/Icon.tsx":(t,n,e)=>{e.d(n,{J:()=>r});var s=e("./node_modules/react/index.js");function r(i){var o=i,{svg:c,size:a="medium"}=o,_=E(o,["svg","size"]);const d={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[a]||{width:24,height:24};return(0,s.createElement)(c,m({viewBox:"0 0 24 24",width:d.width,height:d.height},_))}try{r.displayName="Icon",r.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:r.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(c){}},"./node_modules/@material-design-icons/svg/filled/power.svg":(t,n,e)=>{e.d(n,{Z:()=>_});var s=e("./node_modules/react/index.js"),r;function c(){return c=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var d=arguments[o];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}return i},c.apply(this,arguments)}var a=function(o){return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},o),r||(r=s.createElement("path",{d:"M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"})))};const _=a}}]);})();
