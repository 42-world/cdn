import*as t from"react";import{AvatarText as h}from"../AvatarText/index.js";import{Thumbnail as x}from"../Thumbnail/index.js";import{Button as o}from"../Button/index.js";import{Divider as w}from"../Divider/index.js";import{Text as n}from"../Text/index.js";var r=i=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...i},t.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}));var e=i=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...i},t.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}));function S({username:i,timestamp:m,userProfileSrc:s,thumbnailSrc:a,title:l,contents:v,isLiked:d,likeCount:g=0,isCommentClicked:c,commentCount:u=0,onClickLike:p,onClickComment:f}){return t.createElement("div",{className:"group/feed w-411 transition-transform duration-300 ease-in-out active:scale-92"},t.createElement(h,{src:s,mainText:i,subText:m}),t.createElement(x,{src:a,width:411,className:"mt-4 transition-transform duration-300 ease-in-out group-hover/feed:translate-y-m8"}),t.createElement("div",{className:"relative mt-6 w-411"},t.createElement(n,{size:"heading2",weight:"semibold",text:l,className:"mb-4"}),t.createElement(n,{text:v,className:"line-clamp-4"}),t.createElement("div",{className:"absolute left-0 top-0 z-10 h-full w-411 bg-gradient-to-t from-bg-primary to-transparent dark:from-bg-primary_dark "})),t.createElement("div",{className:" mb-4 mt-4 flex flex-row items-center justify-start"},t.createElement(o,{variant:"text",activated:d,icon:e,text:g.toString(),onClick:p}),t.createElement(o,{variant:"text",activated:c,icon:r,text:u.toString(),onClick:f})),t.createElement(w,{variant:"primary",className:"w-411"}))}export{S as Feed};
