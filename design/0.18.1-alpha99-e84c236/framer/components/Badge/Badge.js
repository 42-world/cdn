var Sr=Object.create;var _=Object.defineProperty;var zr=Object.getOwnPropertyDescriptor;var jr=Object.getOwnPropertyNames;var Gr=Object.getPrototypeOf,Ir=Object.prototype.hasOwnProperty;var Pr=r=>_(r,"__esModule",{value:!0});var Tr=(r,e)=>()=>(r&&(e=r(r=0)),e);var Rr=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Nr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of jr(e))!Ir.call(r,o)&&o!=="default"&&_(r,o,{get:()=>e[o],enumerable:!(t=zr(e,o))||t.enumerable});return r},Er=r=>Nr(Pr(_(r!=null?Sr(Gr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);import*as m from"react";var d=Tr(()=>{});var nr=Rr((Dr,O)=>{d();(function(){"use strict";var r={}.hasOwnProperty,e="[native code]";function t(){for(var o=[],s=0;s<arguments.length;s++){var i=arguments[s];if(!!i){var n=typeof i;if(n==="string"||n==="number")o.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&o.push(a)}}else if(n==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){o.push(i.toString());continue}for(var l in i)r.call(i,l)&&i[l]&&o.push(l)}}}return o.join(" ")}typeof O!="undefined"&&O.exports?(t.default=t,O.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});d();var X=Er(nr());d();d();function ir(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=ar(e))&&(o&&(o+=" "),o+=t);return o}function ar(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=ar(r[o]))&&(t&&(t+=" "),t+=e);return t}d();d();d();var F="-";function sr(r){var e=Or(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,s=o===void 0?{}:o;function i(a){var l=a.split(F);return l[0]===""&&l.length!==1&&l.shift(),lr(l,e)||Lr(a)}function n(a,l){var u=t[a]||[];return l&&s[a]?[].concat(u,s[a]):u}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function lr(r,e){var n;if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),s=o?lr(r.slice(1),o):void 0;if(s)return s;if(e.validators.length!==0){var i=r.join(F);return(n=e.validators.find(function(a){var l=a.validator;return l(i)}))==null?void 0:n.classGroupId}}var dr=/^\[(.+)\]$/;function Lr(r){if(dr.test(r)){var e=dr.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function Or(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},s=Ur(Object.entries(r.classGroups),t);return s.forEach(function(i){var n=i[0],a=i[1];J(a,o,n,e)}),o}function J(r,e,t,o){r.forEach(function(s){if(typeof s=="string"){var i=s===""?e:cr(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(Wr(s)){J(s(o),e,t,o);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(function(n){var a=n[0],l=n[1];J(l,cr(e,a),t,o)})})}function cr(r,e){var t=r;return e.split(F).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Wr(r){return r.isThemeGetter}function Ur(r,e){return e?r.map(function(t){var o=t[0],s=t[1],i=s.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(a){var l=a[0],u=a[1];return[e+l,u]})):n});return[o,i]}):r}d();function ur(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function s(i,n){t.set(i,n),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(n){var a=t.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return s(n,a),a},set:function(n,a){t.has(n)?t.set(n,a):s(n,a)}}}d();var q="!";function pr(r){var e=r.separator||":",t=e.length===1,o=e[0],s=e.length;return function(n){for(var a=[],l=0,u=0,b,p=0;p<n.length;p++){var g=n[p];if(l===0){if(g===o&&(t||n.slice(p,p+s)===e)){a.push(n.slice(u,p)),u=p+s;continue}if(g==="/"){b=p;continue}}g==="["?l++:g==="]"&&l--}var h=a.length===0?n:n.substring(u),w=h.startsWith(q),v=w?h.substring(1):h,C=b&&b>u?b-u:void 0;return{modifiers:a,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:C}}}function fr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var s=o[0]==="[";s?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function br(r){return{cache:ur(r.cacheSize),splitModifiers:pr(r),...sr(r)}}d();var Vr=/\s+/;function mr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,s=e.getConflictingClassGroupIds,i=new Set;return r.trim().split(Vr).map(function(n){var a=t(n),l=a.modifiers,u=a.hasImportantModifier,b=a.baseClassName,p=a.maybePostfixModifierPosition,g=o(p?b.substring(0,p):b),h=Boolean(p);if(!g){if(!p)return{isTailwindClass:!1,originalClassName:n};if(g=o(b),!g)return{isTailwindClass:!1,originalClassName:n};h=!1}var w=fr(l).join(":"),v=u?w+q:w;return{isTailwindClass:!0,modifierId:v,classGroupId:g,originalClassName:n,hasPostfixModifier:h}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var a=n.modifierId,l=n.classGroupId,u=n.hasPostfixModifier,b=a+l;return i.has(b)?!1:(i.add(b),s(l,u).forEach(function(p){return i.add(a+p)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function gr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,s,i,n=a;function a(u){var b=e[0],p=e.slice(1),g=p.reduce(function(h,w){return w(h)},b());return o=br(g),s=o.cache.get,i=o.cache.set,n=l,l(u)}function l(u){var b=s(u);if(b)return b;var p=mr(u,o);return i(u,p),p}return function(){return n(ir.apply(null,arguments))}}d();d();function c(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}d();var vr=/^\[(?:([a-z-]+):)?(.+)\]$/i,Br=/^\d+\/\d+$/,$r=new Set(["px","full","screen"]),_r=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Fr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Jr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function y(r){return z(r)||$r.has(r)||Br.test(r)||M(r)}function M(r){return j(r,"length",qr)}function hr(r){return j(r,"size",kr)}function xr(r){return j(r,"position",kr)}function yr(r){return j(r,"url",Zr)}function R(r){return j(r,"number",z)}function z(r){return!Number.isNaN(Number(r))}function wr(r){return r.endsWith("%")&&z(r.slice(0,-1))}function G(r){return Mr(r)||j(r,"number",Mr)}function f(r){return vr.test(r)}function I(){return!0}function A(r){return _r.test(r)}function Cr(r){return j(r,"",Xr)}function j(r,e,t){var o=vr.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function qr(r){return Fr.test(r)}function kr(){return!1}function Zr(r){return r.startsWith("url(")}function Mr(r){return Number.isInteger(Number(r))}function Xr(r){return Jr.test(r)}function Ar(){var r=c("colors"),e=c("spacing"),t=c("blur"),o=c("brightness"),s=c("borderColor"),i=c("borderRadius"),n=c("borderSpacing"),a=c("borderWidth"),l=c("contrast"),u=c("grayscale"),b=c("hueRotate"),p=c("invert"),g=c("gap"),h=c("gradientColorStops"),w=c("gradientColorStopPositions"),v=c("inset"),C=c("margin"),S=c("opacity"),k=c("padding"),H=c("saturate"),W=c("scale"),K=c("sepia"),Q=c("skew"),Y=c("space"),D=c("translate"),U=function(){return["auto","contain","none"]},V=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",e]},rr=function(){return["",y]},N=function(){return["auto",z,f]},er=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},E=function(){return["solid","dashed","dotted","double","none"]},tr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},$=function(){return["start","end","center","between","around","evenly","stretch"]},P=function(){return["","0",f]},or=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},T=function(){return[z,R]},L=function(){return[z,f]};return{cacheSize:500,theme:{colors:[I],spacing:[y],blur:["none","",A,M],brightness:T(),borderColor:[r],borderRadius:["none","","full",A,M],borderSpacing:[e],borderWidth:rr(),contrast:T(),grayscale:P(),hueRotate:L(),invert:P(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[wr,M],inset:B(),margin:B(),opacity:T(),padding:[e],saturate:T(),scale:T(),sepia:P(),skew:L(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":or()}],"break-before":[{"break-before":or()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(er(),[f])}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",G]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:[G]},f]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[G]},f]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat($())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat($(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat($(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[Y]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Y]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",y]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[A]},A,M]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",y]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",A,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",R]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",M]}],"line-clamp":[{"line-clamp":["none",z,R]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",y]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(E(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",y]}],"underline-offset":[{"underline-offset":["auto",y]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(er(),[xr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",hr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},yr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[].concat(E(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:E()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(E())}],"outline-offset":[{"outline-offset":[y]}],"outline-w":[{outline:[y]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:rr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[y]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",A,Cr]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":tr()}],"bg-blend":[{"bg-blend":tr()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",A,f]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[p]}],saturate:[{saturate:[H]}],sepia:[{sepia:[K]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[K]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[G,f]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[Q]}],"skew-y":[{"skew-y":[Q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[y,R]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}d();var Z=gr(Ar);import{Text as Hr}from"../Text/index.js";var Kr={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function Se({color:r="outline",text:e,className:t}){return m.createElement("div",{className:Z((0,X.default)("w-fit rounded-lg px-2 py-[3px]",Kr[r],{"border border-border-secondary dark:border-border-secondary_dark":r==="outline"}),t)},m.createElement(Hr,{text:e,size:"small",className:(0,X.default)({"text-text-primary_dark dark:text-text-primary":r==="mono"}),color:r==="outline"?"secondary":"white"}))}export{Se as Badge};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
