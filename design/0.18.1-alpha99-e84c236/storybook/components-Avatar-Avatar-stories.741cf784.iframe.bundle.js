(()=>{var f=Object.defineProperty,E=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var A=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,_=(a,t)=>{for(var e in t||(t={}))h.call(t,e)&&A(a,e,t[e]);if(v)for(var e of v(t))O.call(t,e)&&A(a,e,t[e]);return a},p=(a,t)=>E(a,x(t));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[989],{"./src/components/Avatar/Avatar.stories.ts":(a,t,e)=>{var c,s,u;"use strict";e.r(t),e.d(t,{Primary:()=>o,__namedExportsOrder:()=>n,default:()=>r});var i=e("./src/components/Avatar/Avatar.tsx");const l={title:"rookies/Avatar",component:i.q},o={args:{src:"https://picsum.photos/536/354",alt:"Lorem Ipsum",size:"40px"}},r=l;o.parameters=p(_({},o.parameters),{docs:p(_({},(c=o.parameters)==null?void 0:c.docs),{source:_({originalSource:`{
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: 'Lorem Ipsum',
    size: '40px'
  }
}`},(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source)})});const n=["Primary"]},"./src/components/Avatar/Avatar.tsx":(a,t,e)=>{"use strict";e.d(t,{q:()=>r});var i=e("./node_modules/classnames/index.js"),l=e.n(i),o=e("./node_modules/react/jsx-runtime.js");function r({src:n,alt:c="",size:s="40px"}){return(0,o.jsx)("img",{src:n,alt:c,className:l()("rounded-full object-cover",{"h-10 w-10":s==="40px","h-16 w-16":s==="64px"})})}r.displayName="Avatar";try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:r.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(n){}},"./node_modules/classnames/index.js":(a,t)=>{var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,o="[native code]";function r(){for(var n=[],c=0;c<arguments.length;c++){var s=arguments[c];if(s){var u=typeof s;if(u==="string"||u==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var m=r.apply(null,s);m&&n.push(m)}}else if(u==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){n.push(s.toString());continue}for(var d in s)l.call(s,d)&&s[d]&&n.push(d)}}}return n.join(" ")}a.exports?(r.default=r,a.exports=r):(e=[],i=function(){return r}.apply(t,e),i!==void 0&&(a.exports=i))})()}}]);})();
