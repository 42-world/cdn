var b=Object.create;var p=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=e=>p(e,"__esModule",{value:!0});var S=(e,t)=>()=>(e&&(t=e(e=0)),t);var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of h(t))!x.call(e,r)&&r!=="default"&&p(e,r,{get:()=>t[r],enumerable:!(n=v(t,r))||n.enumerable});return e},j=e=>_(g(p(e!=null?b(y(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as i from"react";var s=S(()=>{});var m=w((P,a)=>{s();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function n(){for(var r=[],f=0;f<arguments.length;f++){var o=arguments[f];if(!!o){var c=typeof o;if(c==="string"||c==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var d=n.apply(null,o);d&&r.push(d)}}else if(c==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}typeof a!="undefined"&&a.exports?(n.default=n,a.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});s();var u=j(m());import{Icon as N}from"../Icon/index.js";import{Text as A}from"../Text/index.js";function I({icon:e,text:t,selected:n}){return i.createElement("div",{className:(0,u.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",t?"px-3":"px-2",n?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},e&&i.createElement(N,{svg:e,className:"mr-2"}),t&&i.createElement(A,{text:t,size:"body2",weight:"medium",color:n?"primary":"secondary"}))}export{I as Chip};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/