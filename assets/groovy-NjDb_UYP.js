import{g as u}from"./index-Haf7_4HS.js";function c(n,t){for(var e=0;e<t.length;e++){const o=t[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in n)){const a=Object.getOwnPropertyDescriptor(o,r);a&&Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,s;function l(){if(s)return i;s=1,i=n,n.displayName="groovy",n.aliases=[];function n(t){t.languages.groovy=t.languages.extend("clike",{string:[{pattern:/("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0},{pattern:/(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],keyword:/\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),t.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),t.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),t.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),t.hooks.add("wrap",function(e){if(e.language==="groovy"&&e.type==="string"){var o=e.content.value[0];if(o!="'"){var r=/([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;o==="$"&&(r=/([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),e.content.value=e.content.value.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),e.content=t.highlight(e.content.value,{expression:{pattern:r,lookbehind:!0,inside:t.languages.groovy}}),e.classes.push(o==="/"?"regex":"gstring")}}})}return i}var g=l();const p=u(g),d=c({__proto__:null,default:p},[g]);export{d as g};
//# sourceMappingURL=groovy-NjDb_UYP.js.map
