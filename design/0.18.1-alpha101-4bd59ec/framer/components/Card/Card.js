import*as r from"react";import{Text as i}from"../Text/index.js";import{Thumbnail as n}from"../Thumbnail/index.js";function g({imageSrc:s,imageAlt:a,primary:t="",secondary:e="",title:o}){return r.createElement("div",{className:"group flex w-[278px] flex-col transition-transform duration-300 ease-in-out active:scale-92"},r.createElement("div",{className:"transition-transform duration-300 ease-in-out group-hover:translate-y-m8"},r.createElement(n,{src:s,alt:a,width:278,ratio:"16:9"})),r.createElement("div",{className:"mt-3 transition-spacing duration-300 ease-in-out"},r.createElement("div",{className:"flex flex-row items-center gap-1"},t&&r.createElement(i,{text:t,size:"body2",weight:"regular",color:"secondary"}),t&&e&&r.createElement(i,{text:" \xB7 ",size:"body2",weight:"regular",color:"secondary"}),e&&r.createElement(i,{text:e,size:"body2",weight:"regular",color:"secondary"}))),o&&r.createElement(i,{text:o,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}export{g as Card};
