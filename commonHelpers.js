import"./assets/styles-ab9e8793.js";import{f,i as h}from"./assets/vendor-77e16229.js";const t={input:document.querySelector("#datetime-picker"),btn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let s;f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){s=e[0],s>new Date?t.btn.disabled=!1:(t.btn.disabled=!0,h.show({title:"Error",message:"Illegal options",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff"}))}});t.btn.addEventListener("click",()=>{t.btn.disabled===!1&&(setInterval(d,1e3),t.btn.disabled=!0,t.input.disabled=!0)});function d(){const n=s-new Date;if(n<=0){clearInterval(d);return}const{days:a,hours:u,minutes:c,seconds:r}=y(n);t.days.textContent=o(a),t.hours.textContent=o(u),t.minutes.textContent=o(c),t.seconds.textContent=o(r)}function o(e){return e.toString().padStart(2,"0")}function y(e){const r=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:i,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
