import*as e from"react";import{Divider as l}from"../Divider/index.js";import{Thumbnail as m}from"../Thumbnail/index.js";import{Text as o}from"./../Text/Text.js";var x=(r,t)=>e.createElement("div",{className:"flex flex-row items-center gap-1"},r&&e.createElement(o,{text:r,size:"body2",color:"secondary"}),r&&t&&e.createElement(o,{text:"\xB7",size:"body2",color:"secondary"}),t&&e.createElement(o,{text:t,size:"body2",color:"secondary"}));function p({title:r,thumbnailSrc:t,secondaryTextFirst:i,secondaryTextSecond:s,hasBorder:n=!0,rightAddon:d,onClick:a}){return e.createElement("div",{className:"w-full cursor-pointer select-none transition-transform duration-200 ease-out active:scale-92",onClick:a},e.createElement("div",{className:"flex flex-row items-center justify-between py-4"},e.createElement("div",{className:"flex flex-row items-center"},t&&e.createElement(m,{src:t,alt:r,width:85,rounded:"8px",ratio:"16:9"}),e.createElement("div",{className:"ml-3 flex-1"},x(i,s),e.createElement(o,{text:r,size:"body1",weight:"medium",color:"primary"}))),e.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},d)),n&&e.createElement(l,{variant:"secondary"}))}export{p as ListItem};