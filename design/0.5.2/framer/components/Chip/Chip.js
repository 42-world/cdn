var v=Object.create;var c=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=e=>c(e,"__esModule",{value:!0});var w=(e,t)=>()=>(e&&(t=e(e=0)),t);var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of h(t))!x.call(e,r)&&r!=="default"&&c(e,r,{get:()=>t[r],enumerable:!(n=b(t,r))||n.enumerable});return e},j=e=>_(g(c(e!=null?v(y(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as o from"react";var s=w(()=>{});var u=S((k,a)=>{s();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function n(){for(var r=[],f=0;f<arguments.length;f++){var i=arguments[f];if(!!i){var d=typeof i;if(d==="string"||d==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var m=n.apply(null,i);m&&r.push(m)}}else if(d==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var l in i)e.call(i,l)&&i[l]&&r.push(l)}}}return r.join(" ")}typeof a!="undefined"&&a.exports?(n.default=n,a.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});s();var p=j(u());import{Text as N}from"../Text/index.js";function C({children:e,text:t,selected:n}){return o.createElement("div",{className:(0,p.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",t?"px-3":"px-2",n?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},o.createElement("div",{className:(0,p.default)([{hidden:!e},"mr-2"])},e),t&&o.createElement(N,{text:t,size:"body2",weight:"medium",color:n?"primary":"secondary"}))}export{C as Chip};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/