var b=Object.create;var c=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var w=e=>c(e,"__esModule",{value:!0});var g=(e,o)=>()=>(e&&(o=e(e=0)),o);var C=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var N=(e,o,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of v(o))!y.call(e,r)&&r!=="default"&&c(e,r,{get:()=>o[r],enumerable:!(t=h(o,r))||t.enumerable});return e},S=e=>N(w(c(e!=null?b(x(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as s from"react";var a=g(()=>{});var m=C((O,d)=>{a();(function(){"use strict";var e={}.hasOwnProperty,o="[native code]";function t(){for(var r=[],i=0;i<arguments.length;i++){var n=arguments[i];if(!!n){var f=typeof n;if(f==="string"||f==="number")r.push(n);else if(Array.isArray(n)){if(n.length){var p=t.apply(null,n);p&&r.push(p)}}else if(f==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){r.push(n.toString());continue}for(var u in n)e.call(n,u)&&n[u]&&r.push(u)}}}return r.join(" ")}typeof d!="undefined"&&d.exports?(t.default=t,d.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});a();var l=S(m());import{useContext as _}from"react";import{RadioContext as j}from"./RadioGroup.js";import{Text as k}from"../Text/index.js";function G({label:e,selected:o,disabled:t,onChange:r}){let i=_(j);return i&&(o=i.selectedLabel===e,r=i.onChange),s.createElement("label",{className:(0,l.default)("group flex cursor-pointer flex-row items-center gap-2",{"cursor-not-allowed opacity-30":t})},s.createElement("input",{type:"radio",value:e,className:"hidden",checked:o,disabled:t,onChange:r}),s.createElement("div",{className:(0,l.default)("flex h-5 w-5 flex-row items-center justify-center rounded-full border-2 border-border-primary duration-200 dark:border-border-primary_dark",{"border-color-system_200 dark:border-color-system_200":o,"group-hover:border-color-system_200 group-hover:dark:border-color-system_200":!t})},s.createElement("div",{className:(0,l.default)("h-[10px] w-[10px] rounded-full duration-200",{"bg-color-system_200":o})})),s.createElement(k,{text:e,size:"body2",weight:"medium"}))}export{G as Radio};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
