import*as r from"react";import{ControlType as t}from"framer";import{applyFramerProperties as o,FramerProvider as a}from"../../common/framer/index.js";import{AvatarText as p}from"./AvatarText.js";function i(e){return r.createElement(a,null,r.createElement(p,{...e}))}o(i,{src:{title:"Src",type:t.String,defaultValue:"https://picsum.photos/536/354"},alt:{title:"Alt",type:t.String,defaultValue:"\uC9C0\uCD5C is Babo"},size:{title:"Size",type:t.Enum,options:["40px","64px"]},mainText:{title:"MainText",type:t.String,defaultValue:"\uC9C0\uCD5C"}});export{i as AvatarText};
