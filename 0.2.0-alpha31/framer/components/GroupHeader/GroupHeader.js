var h=Object.create;var m=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var w=e=>m(e,"__esModule",{value:!0});var S=(e,t)=>()=>(e&&(t=e(e=0)),t);var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var j=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of v(t))!y.call(e,i)&&i!=="default"&&m(e,i,{get:()=>t[i],enumerable:!(n=x(t,i))||n.enumerable});return e},N=e=>j(w(m(e!=null?h(g(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as o from"react";var r=S(()=>{});var d=b((G,a)=>{r();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function n(){for(var i=[],p=0;p<arguments.length;p++){var s=arguments[p];if(!!s){var c=typeof s;if(c==="string"||c==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var u=n.apply(null,s);u&&i.push(u)}}else if(c==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&i.push(l)}}}return i.join(" ")}typeof a!="undefined"&&a.exports?(n.default=n,a.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});r();var f=N(d());import{ChevronRight as O}from"../../assets/icons/index.js";import{useTheme as P}from"../../context/index.js";function k({href:e,text:t}){let n=P();return o.createElement("a",{className:(0,f.default)("flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out",{"text-text-primary":n==="light","text-text-primary_dark":n==="dark"}),href:e},o.createElement("p",{className:(0,f.default)("text-lg","font-semibold","leading-[1.2]")},t),o.createElement(O,{classname:(0,f.default)("w-6","h-6")}))}export{k as GroupHeader};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/