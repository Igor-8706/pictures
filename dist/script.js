!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=!1;function t(t,l,o){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s=document.querySelectorAll(t),a=document.querySelector(l),c=document.querySelector(o),i=document.querySelectorAll("[data-modal]"),d=n();s.forEach(t=>{t.addEventListener("click",n=>{n.target&&n.preventDefault(),e=!0,r&&t.remove(),i.forEach(e=>{e.style.display="none",e.classList.add("animated","fadeIn")}),a.style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=d+"px"})}),c.addEventListener("click",()=>{i.forEach(e=>{e.style.display="none"}),a.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px"}),a.addEventListener("click",e=>{e.target===a&&(i.forEach(e=>{e.style.display="none"}),a.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px")})}function n(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}var l;t(".button-design",".popup-design",".popup-design .popup-close"),t(".button-consultation",".popup-consultation",".popup-consultation .popup-close"),t(".fixed-gift",".popup-gift",".popup-gift .popup-close",!0),l=".fixed-gift",window.addEventListener("scroll",()=>{!e&&window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&document.querySelector(l).click()})};var o=function(e,t,n,l){let o=1,r=!1;const s=document.querySelectorAll(e);function a(e){e>s.length&&(o=1),e<1&&(o=s.length),s.forEach(e=>{e.classList.add("animated"),e.style.display="none"}),s[o-1].style.display="block"}function c(e){a(o+=e)}a(o);try{const e=document.querySelector(n),t=document.querySelector(l);e.addEventListener("click",()=>{c(-1),s[o-1].classList.remove("slideInLeft"),s[o-1].classList.add("slideInRight")}),t.addEventListener("click",()=>{c(1),s[o-1].classList.remove("slideInRight"),s[o-1].classList.add("slideInLeft")})}catch(e){}function i(){r="vertical"===t?setInterval((function(){c(1),s[o-1].classList.add("slideInDown")}),3e3):setInterval((function(){c(1),s[o-1].classList.remove("slideInRight"),s[o-1].classList.add("slideInLeft")}),3e3)}i(),s[0].parentNode.addEventListener("mouseenter",()=>{clearInterval(r)}),s[0].parentNode.addEventListener("mouseleave",()=>{i()})};var r=()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll("input"),n=document.querySelectorAll('[name = "upload"]'),l="Загрузка",o="Спасибо! Скоро мы с вами свяжемся",r="Что-то пошло не так...",s="assets/img/spinner.gif",a="assets/img/ok.png",c="assets/img/fail.png",i="assets/server.php",d="assets/question.php";n.forEach(e=>{e.addEventListener("input",()=>{let t;const n=e.files[0].name.split(".");t=n[0].length>5?"...":".";const l=n[0].substring(0,6)+t+n[1];e.previousElementSibling.textContent=l})}),e.forEach(e=>{e.addEventListener("submit",u=>{u.preventDefault();let m=document.createElement("div");m.classList.add("status"),e.parentNode.appendChild(m),e.classList.add("animated","fadeOutUp"),setTimeout(()=>{e.style.display="none"},400);let p=document.createElement("img");p.setAttribute("src",s),p.classList.add("animated","fadeInUp"),m.appendChild(p);let y=document.createElement("div");y.textContent=l,m.appendChild(y);const f=new FormData(e);let v;v=e.closest(".popup-design")||e.classList.contains("calc_form")?i:d,console.log(v),(async(e,t)=>{let n=await fetch(e,{method:"POST",body:t});return await n.text()})(v,f).then(e=>{console.log(e),p.setAttribute("src",a),y.textContent=o}).catch(()=>{p.setAttribute("src",c),y.textContent=r}).finally(()=>{t.forEach(e=>{e.value=""}),n.forEach(e=>{e.previousElementSibling.textContent="Файл не выбран"}),setTimeout(()=>{m.remove(),e.style.display="block",e.classList.remove("fadeOutUp"),e.classList.add("fadeInUp")},5e3)})})})};var s=e=>{function t(e){let t=0,n="+7 (___) ___ __ __".replace(/\D/g,""),l=this.value.replace(/\D/g,"");n.length>=l.length&&(l=n),this.value="+7 (___) ___ __ __".replace(/./g,(function(e){return/[_\d]/.test(e)&&t<l.length?l.charAt(t++):t>=l.length?"":e})),"blur"===e.type?2==this.value.length&&(this.value=""):((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}})(this.value.length,this)}document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)})};var a=e=>{const t=document.querySelectorAll(e);t.forEach(e=>{e.addEventListener("keypress",(function(e){e.key.match(/[^а-яё 0-9]/gi)&&e.preventDefault()}))}),t.forEach(e=>{e.addEventListener("input",(function(t){e.value.match(/[^а-яё 0-9]/gi)||(e.value="")}))})};var c=(e,t)=>{document.querySelector(e).addEventListener("click",(function(){(async e=>{let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/styles").then(e=>{e.forEach(e=>{let{src:n,title:l,link:o}=e,r=document.createElement("div");r.classList.add("animated","fadeInUp","col-sm-3","col-sm-offset-0","col-xs-10","col-xs-offset-1"),r.innerHTML=`\n            <div class="styles-block">\n                <img src=${n} alt = "style">\n                <h4>${l}</h4>\n                <a href="${o}">Подробнее</a>\n\t\t\t</div>\n            `,document.querySelector(t).appendChild(r)})}).catch(e=>console.log("Error")),this.remove()}))};var i=(e,t,n,l,o)=>{const r=document.querySelector(e),s=document.querySelector(t),a=document.querySelector(n),c=document.querySelector(l),i=document.querySelector(o);let d=0;function u(){d=Math.round(+r.value*+s.value+ +a.value),""==r.value||""==s.value?i.textContent="Пожалуйста, выберите размер и материал картины":"IWANTPOPART"===c.value?(console.log(c.value),i.textContent=Math.round(.7*d)):i.textContent=d}r.addEventListener("change",u),s.addEventListener("change",u),a.addEventListener("change",u),c.addEventListener("input",u)};var d=()=>{const e=document.querySelector(".portfolio-menu"),t=e.querySelectorAll("li"),n=e.querySelector(".all"),l=e.querySelector(".lovers"),o=e.querySelector(".chef"),r=e.querySelector(".girl"),s=e.querySelector(".guy"),a=e.querySelector(".grandmother"),c=e.querySelector(".granddad"),i=document.querySelector(".portfolio-wrapper"),d=i.querySelectorAll(".all"),u=i.querySelectorAll(".girl"),m=i.querySelectorAll(".lovers"),p=(i.querySelectorAll(".grandmother"),i.querySelectorAll(".granddad"),i.querySelectorAll(".chef")),y=i.querySelectorAll(".guy"),f=document.querySelector(".portfolio-no"),v=e=>{d.forEach(e=>{e.style.display="none",e.classList.remove("animated","fadeIn")}),f.style.display="none",f.classList.remove("animated","fadeIn"),e?e.forEach(e=>{e.style.display="block",e.classList.add("animated","fadeIn")}):(f.style.display="block",f.classList.add("animated","fadeIn"))};n.addEventListener("click",()=>{v(d)}),l.addEventListener("click",()=>{v(m)}),o.addEventListener("click",()=>{v(p)}),s.addEventListener("click",()=>{v(y)}),r.addEventListener("click",()=>{v(u)}),a.addEventListener("click",()=>{v()}),c.addEventListener("click",()=>{v()}),e.addEventListener("click",e=>{let n=e.target;n&&"LI"==n.tagName&&(t.forEach(e=>e.classList.remove("active")),n.classList.add("active"))})};var u=e=>{document.querySelectorAll(e).forEach(e=>{e.addEventListener("mouseover",()=>{!function(e){const t=e.querySelector("img");t.src=t.src.slice(0,-4)+"-1.png",e.querySelectorAll("p:not(.sizes-hit)").forEach(e=>{e.style.display="none"})}(e)}),e.addEventListener("mouseout",()=>{!function(e){const t=e.querySelector("img");t.src=t.src.slice(0,-6)+".png",e.querySelectorAll("p:not(.sizes-hit)").forEach(e=>{e.style.display="block"})}(e)})})};var m=e=>{document.querySelectorAll(e).forEach(e=>{e.addEventListener("click",(function(){this.classList.toggle("active-style"),this.nextElementSibling.classList.toggle("active-content"),this.classList.contains("active-style")?this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+80+"px":this.nextElementSibling.style.maxHeight="0px"}))})};var p=(e,t)=>{const n=document.querySelector(e),l=document.querySelector(t);n.style.display="none",l.addEventListener("click",()=>{"none"==n.style.display&&window.screen.availWidth<993?n.style.display="block":n.style.display="none"}),window.addEventListener("resize",()=>{window.screen.availWidth>992&&(n.style.display="none")})};var y=e=>{const t=document.querySelector(e);window.addEventListener("scroll",()=>{document.documentElement.scrollTop>1650?(t.classList.add("animated","fadeIn"),t.classList.remove("fadeOut")):(t.classList.add("fadeOut"),t.classList.remove("fadeIn"))});let n=document.querySelectorAll('[href^="#"]');n.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=document.documentElement.scrollTop,n=this.hash,l=document.querySelector(n).getBoundingClientRect().top,o=null;requestAnimationFrame((function e(r){null===o&&(o=r);let s=r-o,a=l<0?Math.max(t-s/.3,t+l):Math.min(t+s/.3,t+l);document.documentElement.scrollTo(0,a),a!=t+l?requestAnimationFrame(e):location.hash=n}))}))})};var f=()=>{const e=document.querySelectorAll('[name = "upload"]');let t="";function n(e){e.preventDefault(),e.stopPropagation()}["dragenter","dragleave","dragover","drop"].forEach(t=>{e.forEach(e=>{e.addEventListener(t,n,!1)})}),["dragenter","dragover"].forEach(n=>{e.forEach(e=>{e.addEventListener(n,()=>{return n=e,t=window.getComputedStyle(n).backgroundColor,n.closest(".file_upload").style.border="5px solid yellow",void(n.closest(".file_upload").style.backgroundColor="rgba(0,0,0,.7)");var n},!1)})}),["dragleave","drop"].forEach(n=>{e.forEach(e=>{e.addEventListener(n,()=>{return(n=e).closest(".file_upload").style.border="none",void(n.closest(".file_upload").style.backgroundColor=t);var n},!1)})}),e.forEach(e=>{e.addEventListener("drop",t=>{let n;e.files=t.dataTransfer.files;const l=e.files[0].name.split(".");n=l[0].length>5?"...":".";const o=l[0].substring(0,6)+n+l[1];e.previousElementSibling.textContent=o})})};window.addEventListener("DOMContentLoaded",()=>{l(),o(".feedback-slider-item","horizontal",".main-prev-btn",".main-next-btn"),o(".main-slider-item","vertical"),r(),s('[name = "phone"]'),a('[name="name"]'),a('[name="message"]'),c(".button-styles","#styles .row"),i("#size","#material","#options",".promocode",".calc-price"),d(),u(".sizes-block"),m(".accordion-heading"),p(".burger-menu",".burger"),y(".pageup"),f()})}]);