import*as i from"react";import{Button as o}from"../Button/index.js";import{Text as a}from"../Text/index.js";var r=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}));var e=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},i.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}));function d({githubLink:t="",mailLink:s="",text:n}){return i.createElement("div",{className:"flex flex-col"},i.createElement("div",{className:"mb-6 w-full flex flex-row align-center justify-center gap-2"},i.createElement("a",{href:t,target:"_blank",className:"w-fit h-fit inline-block"},i.createElement(o,{variant:"secondary",icon:e})),i.createElement("a",{href:s,target:"_blank",className:"w-fit h-fit inline-block"},i.createElement(o,{variant:"secondary",icon:r}))),i.createElement("div",{className:"flex align-center justify-center"},i.createElement(a,{size:"body2",color:"secondary",text:n})))}export{d as Footer};
