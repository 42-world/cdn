(()=>{var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(a,t,e)=>t in a?Z(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,p=(a,t)=>{for(var e in t||(t={}))F.call(t,e)&&k(a,e,t[e]);if(b)for(var e of b(t))U.call(t,e)&&k(a,e,t[e]);return a},g=(a,t)=>ee(a,te(t));var S=(a,t)=>{var e={};for(var u in a)F.call(a,u)&&t.indexOf(u)<0&&(e[u]=a[u]);if(a!=null&&b)for(var u of b(a))t.indexOf(u)<0&&U.call(a,u)&&(e[u]=a[u]);return e};(self.webpackChunk_rookies_team_design=self.webpackChunk_rookies_team_design||[]).push([[79],{"./src/components/Feed/Feed.stories.ts":(a,t,e)=>{var j,P,R,M,L,N,K,V,w;"use strict";e.r(t),e.d(t,{CommentClicked:()=>T,Liked:()=>D,Primary:()=>B,__namedExportsOrder:()=>z,default:()=>W});var u=e("./src/components/AvatarText/index.ts"),d=e("./src/components/Button/index.ts"),m=e("./src/components/Divider/index.ts"),n=e("./src/components/Text/index.ts"),s=e("./src/components/Thumbnail/index.ts"),o=e("./node_modules/react/index.js"),r;function l(){return l=Object.assign?Object.assign.bind():function(f){for(var _=1;_<arguments.length;_++){var y=arguments[_];for(var E in y)Object.prototype.hasOwnProperty.call(y,E)&&(f[E]=y[E])}return f},l.apply(this,arguments)}var i=function(_){return o.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},_),r||(r=o.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))};const C=i;var x;function v(){return v=Object.assign?Object.assign.bind():function(f){for(var _=1;_<arguments.length;_++){var y=arguments[_];for(var E in y)Object.prototype.hasOwnProperty.call(y,E)&&(f[E]=y[E])}return f},v.apply(this,arguments)}var A=function(_){return o.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},_),x||(x=o.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"})))};const I=A;var c=e("./node_modules/react/jsx-runtime.js");function h({username:f,timestamp:_,userProfileSrc:y,thumbnailSrc:E,title:Y,contents:J,isLiked:q,likeCount:H=0,isCommentClicked:X,commentCount:$=0,onClickLike:G,onClickComment:Q}){return(0,c.jsxs)("div",{className:"group/feed w-411 transition-transform duration-200 ease-in-out active:scale-92",children:[(0,c.jsx)(u.M,{src:y,mainText:f,subText:_}),(0,c.jsx)(s.p,{src:E,width:411,className:"mt-4 transition-transform duration-200 ease-in-out group-hover/feed:translate-y-m8"}),(0,c.jsxs)("div",{className:"relative mt-6 w-411",children:[(0,c.jsx)(n.x,{size:"heading2",weight:"semibold",text:Y,className:"mb-4"}),(0,c.jsx)(n.x,{text:J,className:"line-clamp-4"}),(0,c.jsx)("div",{className:"absolute left-0 top-0 z-10 h-full w-411 bg-gradient-to-t from-bg-primary to-transparent dark:from-bg-primary_dark "})]}),(0,c.jsxs)("div",{className:" mb-4 mt-4 flex flex-row items-center justify-start",children:[(0,c.jsx)(d.z,{variant:"text",activated:q,icon:(0,c.jsx)(I,{}),text:H.toString(),onClick:G}),(0,c.jsx)(d.z,{variant:"text",activated:X,icon:(0,c.jsx)(C,{}),text:$.toString(),onClick:Q})]}),(0,c.jsx)(m.i,{variant:"primary",className:"w-411"})]})}h.displayName="Feed";try{h.displayName="Feed",h.__docgenInfo={description:"",displayName:"Feed",props:{username:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00 \uC791\uC131\uC790\uC758 \uB2C9\uB124\uC784\uC785\uB2C8\uB2E4.",name:"username",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00 \uC791\uC131 \uC2DC\uAC04\uC785\uB2C8\uB2E4.",name:"timestamp",required:!0,type:{name:"string"}},userProfileSrc:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00 \uC791\uC131\uC790\uC758 \uD504\uB85C\uD544 \uC0AC\uC9C4 \uC8FC\uC18C\uC785\uB2C8\uB2E4.",name:"userProfileSrc",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00\uC758 \uC378\uB124\uC77C \uC0AC\uC9C4 \uC8FC\uC18C\uC785\uB2C8\uB2E4.",name:"thumbnailSrc",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00 \uC81C\uBAA9\uC785\uB2C8\uB2E4.",name:"title",required:!0,type:{name:"string"}},contents:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00 \uBCF8\uBB38\uC785\uB2C8\uB2E4.",name:"contents",required:!0,type:{name:"string"}},isLiked:{defaultValue:null,description:"\uAC8C\uC2DC\uAE00 \uC88B\uC544\uC694 \uC5EC\uBD80\uC785\uB2C8\uB2E4.",name:"isLiked",required:!1,type:{name:"boolean"}},likeCount:{defaultValue:{value:"0"},description:"\uC88B\uC544\uC694\uC758 \uAC2F\uC218\uC785\uB2C8\uB2E4.",name:"likeCount",required:!1,type:{name:"number"}},isCommentClicked:{defaultValue:null,description:"\uB313\uAE00 \uD074\uB9AD \uC5EC\uBD80\uC785\uB2C8\uB2E4.",name:"isCommentClicked",required:!1,type:{name:"boolean"}},commentCount:{defaultValue:{value:"0"},description:"\uB313\uAE00\uC758 \uAC2F\uC218\uC785\uB2C8\uB2E4.",name:"commentCount",required:!1,type:{name:"number"}},onClickLike:{defaultValue:null,description:"\uC88B\uC544\uC694 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD588\uC744 \uB54C\uC758 \uB3D9\uC791\uC744 \uC815\uC758\uD558\uB294 \uD568\uC218\uC785\uB2C8\uB2E4.",name:"onClickLike",required:!1,type:{name:"(() => void)"}},onClickComment:{defaultValue:null,description:"\uB313\uAE00 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD588\uC744 \uB54C\uC758 \uB3D9\uC791\uC744 \uC815\uC758\uD558\uB294 \uD568\uC218\uC785\uB2C8\uB2E4.",name:"onClickComment",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Feed/Feed.tsx#Feed"]={docgenInfo:h.__docgenInfo,name:"Feed",path:"src/components/Feed/Feed.tsx#Feed"})}catch(f){}const O={title:"rookies/Feed",component:h},B={args:{username:"\uD64D\uAE38\uB3D9",timestamp:"4\uC2DC\uAC04 \uC804",userProfileSrc:"https://picsum.photos/536/354",thumbnailSrc:"https://picsum.photos/536/354",title:"Lorem Ipsum",contents:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod.",isLiked:!1,likeCount:30,isCommentClicked:!1,commentCount:30}},D={args:g(p({},B.args),{isLiked:!0})},T={args:g(p({},B.args),{isCommentClicked:!0})},W=O;B.parameters=g(p({},B.parameters),{docs:g(p({},(j=B.parameters)==null?void 0:j.docs),{source:p({originalSource:`{
  // Add your story args here
  args: {
    username: '\uD64D\uAE38\uB3D9',
    timestamp: '4\uC2DC\uAC04 \uC804',
    userProfileSrc: 'https://picsum.photos/536/354',
    thumbnailSrc: 'https://picsum.photos/536/354',
    title: 'Lorem Ipsum',
    contents: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod.',
    isLiked: false,
    likeCount: 30,
    isCommentClicked: false,
    commentCount: 30
  }
}`},(R=(P=B.parameters)==null?void 0:P.docs)==null?void 0:R.source)})}),D.parameters=g(p({},D.parameters),{docs:g(p({},(M=D.parameters)==null?void 0:M.docs),{source:p({originalSource:`{
  // Add your story args here
  args: {
    ...Primary.args,
    isLiked: true
  }
}`},(N=(L=D.parameters)==null?void 0:L.docs)==null?void 0:N.source)})}),T.parameters=g(p({},T.parameters),{docs:g(p({},(K=T.parameters)==null?void 0:K.docs),{source:p({originalSource:`{
  // Add your story args here
  args: {
    ...Primary.args,
    isCommentClicked: true
  }
}`},(w=(V=T.parameters)==null?void 0:V.docs)==null?void 0:w.source)})});const z=["Primary","Liked","CommentClicked"]},"./src/components/Avatar/Avatar.tsx":(a,t,e)=>{"use strict";e.d(t,{q:()=>n});var u=e("./node_modules/classnames/index.js"),d=e.n(u),m=e("./node_modules/react/jsx-runtime.js");function n({src:s,alt:o="",size:r="40px"}){return(0,m.jsx)("img",{src:s,alt:o,className:d()("rounded-full object-cover",{"h-10 w-10":r==="40px","h-16 w-16":r==="64px"})})}n.displayName="Avatar";try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"\uC0AC\uC9C4\uC758 \uC8FC\uC18C\uC785\uB2C8\uB2E4.",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"\uC0AC\uC9C4\uC758 \uB300\uCCB4 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4.",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"\uC0AC\uC9C4\uC758 \uAC00\uB85C \uD06C\uAE30\uC785\uB2C8\uB2E4.",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:n.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(s){}},"./src/components/AvatarText/AvatarText.tsx":(a,t,e)=>{"use strict";e.d(t,{M:()=>o});var u=e("./node_modules/classnames/index.js"),d=e.n(u),m=e("./src/components/Avatar/Avatar.tsx"),n=e("./src/components/Text/index.ts"),s=e("./node_modules/react/jsx-runtime.js");function o({src:r,alt:l="",size:i="40px",mainText:C,subText:x}){return(0,s.jsxs)("div",{className:d()("flex flex-row",{"gap-3":i==="40px","gap-4":i==="64px"}),children:[(0,s.jsx)(m.q,{src:r,alt:l,size:i}),(0,s.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,s.jsx)(n.x,{text:C,size:i==="64px"?"heading3":"body2",weight:"medium"}),x&&(0,s.jsx)(n.x,{text:x,size:i==="64px"?"body2":"small",color:"secondary"})]})]})}o.displayName="AvatarText";try{o.displayName="AvatarText",o.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"\uC0AC\uC9C4\uC758 \uC8FC\uC18C\uC785\uB2C8\uB2E4.",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"\uC0AC\uC9C4\uC758 \uB300\uCCB4 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4.",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"\uC0AC\uC9C4\uC758 \uAC00\uB85C \uD06C\uAE30\uC785\uB2C8\uB2E4.",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"\uBCF8\uBB38\uC785\uB2C8\uB2E4. \uB300\uAC1C \uC0AC\uC6A9\uC790\uC758 \uC774\uB984\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"\uBD80\uAC00\uC801\uC778 \uC124\uBA85\uC774 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4.",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:o.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(r){}},"./src/components/AvatarText/index.ts":(a,t,e)=>{"use strict";e.d(t,{M:()=>u.M});var u=e("./src/components/AvatarText/AvatarText.tsx")},"./src/components/Button/Button.tsx":(a,t,e)=>{"use strict";e.d(t,{z:()=>l});var u=e("./node_modules/classnames/index.js"),d=e.n(u),m=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),n=e("./src/components/Icon/index.ts"),s=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");const r={primary:"bg-color-system_200 border-0 enabled:hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark enabled:hover:border-color-system_200 enabled:hover:dark:border-color-system_200",text:"border-0"};function l(i){var B;const O=i,{text:C,disabled:x,icon:v,className:A}=O,I=S(O,["text","disabled","icon","className"]),c=(B=i.variant)!=null?B:"primary",h=i.variant==="text"&&i.activated;return(0,o.jsxs)("button",g(p({className:(0,m.m)(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid duration-200 enabled:transition-all enabled:active:scale-92 ${r[c]}`,v&&!C?"px-2":"px-3",x&&"cursor-not-allowed opacity-30",A),disabled:x},I),{children:[v&&(0,o.jsx)(n.J,{svg:v,size:"small",className:(0,m.m)("transition-colors duration-200",c==="primary"?"fill-color-white":"fill-text-secondary group-enabled:group-hover:fill-color-system_200 dark:fill-text-secondary_dark",h&&"fill-color-system_200 dark:fill-color-system_200")}),C&&(0,o.jsx)(s.x,{text:C,size:"body2",weight:"medium",color:c==="primary"?"white":"secondary",className:d()("transition-colors duration-200",{"group-enabled:group-hover:text-color-system_200":c!=="primary","text-color-system_200 dark:text-color-system_200":h})})]}))}l.displayName="Button";try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"\uBC84\uD2BC\uC758 \uC720\uD615\uC785\uB2C8\uB2E4.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},activated:{defaultValue:null,description:"\uD14D\uC2A4\uD2B8 \uBC84\uD2BC\uC774 \uD65C\uC131\uD654\uB418\uC5C8\uB294\uC9C0 \uC5EC\uBD80\uC785\uB2C8\uB2E4.",name:"activated",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"\uBC84\uD2BC\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4.",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"\uBC84\uD2BC\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC544\uC774\uCF58\uC785\uB2C8\uB2E4.",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:l.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(i){}},"./src/components/Button/index.ts":(a,t,e)=>{"use strict";e.d(t,{z:()=>u.z});var u=e("./src/components/Button/Button.tsx")},"./src/components/Divider/Divider.tsx":(a,t,e)=>{"use strict";e.d(t,{i:()=>n});var u=e("./node_modules/classnames/index.js"),d=e.n(u),m=e("./node_modules/react/jsx-runtime.js");function n(l){var i=l,{variant:s="primary",className:o}=i,r=S(i,["variant","className"]);return(0,m.jsx)("div",p({className:d()("h-[1px] w-full",{"bg-border-primary dark:bg-border-primary_dark":s==="primary","bg-border-secondary dark:bg-border-secondary_dark":s==="secondary"},o)},r))}n.displayName="Divider";try{n.displayName="Divider",n.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"divider\uC758 \uC0C9\uC0C1\uC744 \uACB0\uC815\uD558\uB294 \uBCC0\uC218\uC785\uB2C8\uB2E4.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:n.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(s){}},"./src/components/Divider/index.ts":(a,t,e)=>{"use strict";e.d(t,{i:()=>u.i});var u=e("./src/components/Divider/Divider.tsx")},"./src/components/Icon/Icon.tsx":(a,t,e)=>{"use strict";e.d(t,{J:()=>d});var u=e("./node_modules/react/index.js");function d(r){var l=r,{svg:m,size:n="medium",className:s}=l,o=S(l,["svg","size","className"]);const i={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[n]||{width:24,height:24};return(0,u.cloneElement)(m,p({viewBox:"0 0 24 24",width:i.width,height:i.height,className:s!=null?s:"fill-text-primary dark:fill-text-primary_dark"},o),null)}try{d.displayName="Icon",d.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"\uCD9C\uB825\uD560 \uC544\uC774\uCF58 svg \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4.",name:"svg",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:{value:"medium"},description:"\uC544\uC774\uCF58\uC758 \uD06C\uAE30\uC785\uB2C8\uB2E4.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:d.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(m){}},"./src/components/Icon/index.ts":(a,t,e)=>{"use strict";e.d(t,{J:()=>u.J});var u=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(a,t,e)=>{"use strict";e.d(t,{xv:()=>r});var u=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),d=e("./node_modules/react/jsx-runtime.js");const m={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},n={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},s={left:"text-left",right:"text-right",center:"text-center"},o={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function r({className:l,text:i,size:C="body1",weight:x="regular",align:v="left",color:A="primary"}){return(0,d.jsx)("p",{className:(0,u.m)("font-display",m[C],n[x],s[v],o[A],l),children:i})}r.displayName="Text";try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(l){}},"./src/components/Text/index.ts":(a,t,e)=>{"use strict";e.d(t,{x:()=>u.xv});var u=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(a,t,e)=>{"use strict";e.d(t,{p:()=>n});var u=e("./node_modules/classnames/index.js"),d=e.n(u),m=e("./node_modules/react/jsx-runtime.js");function n({src:s,alt:o="",width:r,rounded:l="16px",ratio:i="16:9",className:C}){const x={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[i],v={"8px":"rounded-lg","16px":"rounded-2xl"}[l];return(0,m.jsx)("img",{src:s,alt:o,style:{width:r},className:d()(x,v,"object-cover",C)})}n.displayName="Thumbnail";try{n.displayName="Thumbnail",n.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"\uC378\uB124\uC77C \uC774\uBBF8\uC9C0\uC758 \uC8FC\uC18C\uC785\uB2C8\uB2E4.",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"\uC378\uB124\uC77C\uC758 \uB300\uCCB4 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4.",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"\uC378\uB124\uC77C\uC758 \uB108\uBE44\uC785\uB2C8\uB2E4.",name:"width",required:!0,type:{name:"number"}},rounded:{defaultValue:{value:"16px"},description:"\uC378\uB124\uC77C\uC758 border-radius \uD06C\uAE30\uC785\uB2C8\uB2E4.",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"8px"'},{value:'"16px"'}]}},ratio:{defaultValue:{value:"16:9"},description:"\uC378\uB124\uC77C\uC758 \uBE44\uC728\uC785\uB2C8\uB2E4.",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}},className:{defaultValue:null,description:"\uC378\uB124\uC77C\uC758 className\uC785\uB2C8\uB2E4.",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:n.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(s){}},"./src/components/Thumbnail/index.ts":(a,t,e)=>{"use strict";e.d(t,{p:()=>u.p});var u=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(a,t)=>{var e,u;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,m="[native code]";function n(){for(var s=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var l=typeof r;if(l==="string"||l==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&s.push(i)}}else if(l==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){s.push(r.toString());continue}for(var C in r)d.call(r,C)&&r[C]&&s.push(C)}}}return s.join(" ")}a.exports?(n.default=n,a.exports=n):(e=[],u=function(){return n}.apply(t,e),u!==void 0&&(a.exports=u))})()}}]);})();
