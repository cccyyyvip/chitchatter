import{g as u}from"./index-Haf7_4HS.js";function l(r,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in r)){const a=Object.getOwnPropertyDescriptor(e,o);a&&Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var g,i;function s(){if(i)return g;i=1,g=r,r.displayName="prolog",r.aliases=[];function r(t){t.languages.prolog={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,greedy:!0},builtin:/\b(?:fx|fy|xf[xy]?|yfx?)\b/,function:/\b[a-z]\w*(?:(?=\()|\/\d+)/,number:/\b\d+(?:\.\d*)?/,operator:/[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,punctuation:/[(){}\[\],]/}}return g}var p=s();const f=u(p),b=l({__proto__:null,default:f},[p]);export{b as p};
//# sourceMappingURL=prolog-Tokpqx-e.js.map
