!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("1WSnx");const n=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]'),u="feedback-form-state";n.addEventListener("input",(0,a.throttle)((e=>{const t={email:l.value,message:s.value};localStorage.setItem(u,JSON.stringify(t))}),500)),n.addEventListener("submit",(e=>{if(e.preventDefault(),""===l.value||""===s.value)return alert("Заповніть всі поля!");console.log({email:l.value,message:s.value}),n.reset(),localStorage.removeItem(u)}));const i=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})(u);i&&(l.value=i.email,s.value=i.message)}();
//# sourceMappingURL=03-feedback.bda6a034.js.map
