!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(()=>{return e={954:e=>{const t=["think","reason","reasoning","thought"];e.exports=e=>{try{const n=[],o=new RegExp(`<(${t.join("|")})>`,"i"),r=new RegExp(`</(${t.join("|")})>`,"i");let i=0,s=!1;for(;i<e.length;){const t=e.slice(i).match(o),c=e.slice(i).match(r);if(s||!t){if(s&&c){const t=e.slice(i,i+c.index);t.trim()&&n.push({type:"reasoning",content:t.trim()}),s=!1,i+=c.index+c[0].length}else if(i<e.length){const t=e.slice(i);n.push({type:s?"reasoning":"text",content:t.trim(),reasoning_running:s});break}}else{const o=e.slice(i,i+t.index);o.trim()&&n.push({type:"text",content:o.trim()}),s=!0,i+=t.index+t[0].length}}return n}catch(t){return console.error(`Error parsing reasoning: ${t}`),[{type:"text",content:e}]}}},987:(e,t,n)=>{const o=n(954);e.exports=o}},t={},function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(987);var e,t}));