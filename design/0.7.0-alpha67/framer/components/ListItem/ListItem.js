import*as r from"react";import{Thumbnail as l}from"../Thumbnail/index.js";import{Text as o}from"./../Text/Text.js";import{Divider as x}from"../Divider/index.js";import{ChatBubble as g}from"../../assets/icons/ChatBubble.js";import{Favorite as c}from"../../assets/icons/Favorite.js";var p=(e,t)=>e&&t?`${e} \xB7 ${t}`:e||t;function w({title:e,thumbnailSrc:t,secondaryTextFirst:a,secondaryTextSecond:m,commentCnt:i,likeCnt:s,hasBorder:d=!0}){let n=p(a,m);return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex flex-row items-center py-4 w-[540px] cursor-pointer"},t&&r.createElement(l,{src:t,alt:e,width:85,ratio:"16:9"}),r.createElement("div",{className:"ml-3 flex-1"},n&&r.createElement(o,{text:n,size:"body2",weight:"regular",color:"secondary"}),r.createElement(o,{text:e,size:"body1",weight:"medium",color:"primary"})),r.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},i&&r.createElement("div",{className:"flex flex-row items-center gap-2"},r.createElement(g,{className:"w-4 h-4"}),r.createElement(o,{text:i.toString(),size:"body2",weight:"regular",color:"secondary"})),s&&r.createElement("div",{className:"flex flex-row items-center gap-2"},r.createElement(c,{className:"w-4 h-4"}),r.createElement(o,{text:s.toString(),size:"body2",weight:"regular",color:"secondary"})))),d&&r.createElement(x,{variant:"secondary"}))}export{w as ListItem};
