var h=Object.create;var x=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var T=t=>x(t,"__esModule",{value:!0});var g=(t,e)=>()=>(t&&(e=t(t=0)),e);var w=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var I=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of b(e))!S.call(t,o)&&o!=="default"&&x(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t},j=t=>I(T(x(t!=null?h(A(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as n from"react";var s=g(()=>{});var c=w((O,p)=>{s();(function(){"use strict";var t={}.hasOwnProperty,e="[native code]";function r(){for(var o=[],a=0;a<arguments.length;a++){var i=arguments[a];if(!!i){var f=typeof i;if(f==="string"||f==="number")o.push(i);else if(Array.isArray(i)){if(i.length){var u=r.apply(null,i);u&&o.push(u)}}else if(f==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){o.push(i.toString());continue}for(var m in i)t.call(i,m)&&i[m]&&o.push(m)}}}return o.join(" ")}typeof p!="undefined"&&p.exports?(r.default=r,p.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});s();var v=j(c());s();import{Avatar as d}from"./Avatar/index.js";import{AvatarText as G}from"./AvatarText/index.js";import{Card as L}from"./Card/index.js";import{Chip as z}from"./Chip/index.js";import{Divider as F}from"./Divider/index.js";import{GroupHeader as K}from"./GroupHeader/index.js";import{Icon as Q}from"./Icon/index.js";import{Input as V}from"./Input/index.js";import{ListItem as X}from"./ListItem/index.js";import{Sample as Z}from"./Sample/index.js";import{Text as l}from"./Text/index.js";import{Thumbnail as k}from"./Thumbnail/index.js";import{Button as tt}from"./Button/index.js";function rt({src:t,alt:e="",size:r="40px",mainText:o,subText:a}){return n.createElement("div",{className:(0,v.default)("flex flex-row",{"gap-3":r==="40px","gap-4":r==="64px"})},n.createElement(d,{src:t,alt:e,size:r}),n.createElement("div",{className:"flex flex-col items-start justify-center"},n.createElement(l,{text:o,size:r==="64px"?"heading3":"body2",weight:"medium"}),a&&n.createElement(l,{text:a,size:r==="64px"?"body2":"small",color:"secondary"})))}export{rt as AvatarText};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
