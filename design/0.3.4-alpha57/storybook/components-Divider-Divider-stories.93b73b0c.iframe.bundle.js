(()=>{var N=Object.defineProperty,R=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(e,s,r)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,t=(e,s)=>{for(var r in s||(s={}))A.call(s,r)&&x(e,r,s[r]);if(l)for(var r of l(s))O.call(s,r)&&x(e,r,s[r]);return e},m=(e,s)=>R(e,P(s));var b=(e,s)=>{var r={};for(var a in e)A.call(e,a)&&s.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&l)for(var a of l(e))s.indexOf(a)<0&&O.call(e,a)&&(r[a]=e[a]);return r};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[953],{"./src/components/Divider/Divider.stories.ts":(e,s,r)=>{var c,_,S,D,g,h;"use strict";r.r(s),r.d(s,{Primary:()=>o,Secondary:()=>n,__namedExportsOrder:()=>p,default:()=>u});var a=r("./node_modules/classnames/index.js"),v=r.n(a),y=r("./node_modules/react/jsx-runtime.js");function i(I){var E=I,{variant:f="primary",className:j}=E,C=b(E,["variant","className"]);return(0,y.jsx)("div",t({className:v()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":f==="primary","bg-border-secondary dark:bg-border-secondary_dark":f==="secondary"},j)},C))}i.displayName="Divider";try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:i.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(f){}const d={title:"rookies/Divder",component:i},o={args:{variant:"primary"}},n={args:{variant:"secondary"}},u=d;o.parameters=m(t({},o.parameters),{docs:m(t({},(c=o.parameters)==null?void 0:c.docs),{source:t({originalSource:`{
  args: {
    variant: 'primary'
  }
}`},(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source)})}),n.parameters=m(t({},n.parameters),{docs:m(t({},(D=n.parameters)==null?void 0:D.docs),{source:t({originalSource:`{
  args: {
    variant: 'secondary'
  }
}`},(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const p=["Primary","Secondary"]},"./node_modules/classnames/index.js":(e,s)=>{var r,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var v={}.hasOwnProperty,y="[native code]";function i(){for(var d=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var u=typeof n;if(u==="string"||u==="number")d.push(n);else if(Array.isArray(n)){if(n.length){var p=i.apply(null,n);p&&d.push(p)}}else if(u==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){d.push(n.toString());continue}for(var c in n)v.call(n,c)&&n[c]&&d.push(c)}}}return d.join(" ")}e.exports?(i.default=i,e.exports=i):(r=[],a=function(){return i}.apply(s,r),a!==void 0&&(e.exports=a))})()}}]);})();