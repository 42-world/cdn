import*as e from"react";import{ControlType as o}from"framer";import{FramerProvider as n,applyFramerProperties as p}from"../../common/framer/index.js";import{Chip as i}from"./Chip.js";function m({icon:r,...t}){return r.length?e.createElement(n,null,e.createElement(i,{icon:()=>r[0],...t})):e.createElement(n,null,e.createElement(i,{...t}))}p(m,{text:{title:"Text",type:o.String,defaultValue:"Chip"},isSelected:{title:"isSelected",type:o.Boolean,defaultValue:!1},icon:{title:"Icon",type:o.ComponentInstance}});export{m as Chip};