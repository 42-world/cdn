import*as t from"react";import{ControlType as r}from"framer";import{applyFramerProperties as a,FramerProvider as o}from"../../common/framer/index.js";import{Card as i}from"./Card.js";function m(e){return t.createElement(o,null,t.createElement(i,{...e}))}a(m,{imageSrc:{title:"ImageSrc",type:r.String,defaultValue:"https://picsum.photos/536/354"},imageAlt:{title:"ImageAlt",type:r.String,defaultValue:"\uC9C0\uCD5C is Babo"},primary:{title:"Primary",type:r.String,defaultValue:"\uC9C0\uCD5C"},secondary:{title:"Secondary",type:r.String,defaultValue:"\uC9C0\uCD5C"},title:{title:"Title",type:r.String,defaultValue:"title"}});export{m as Card};
