import"./assets/styles-3694e8d9.js";import{f,i as h}from"./assets/vendor-77e16229.js";const y=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s;f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){s=t[0],s>new Date?e.disabled=!1:(e.disabled=!0,h.show({title:"Error",message:"Illegal options",position:"topRight",backgroundColor:"#ef4040",color:"#fff"}))}});e.addEventListener("click",()=>{e.disabled===!1&&(setInterval(d,1e3),e.disabled=!0,y.disabled=!0)});function d(){const o=s-new Date;if(o<=0){clearInterval(d);return}const{days:a,hours:c,minutes:u,seconds:r}=C(o);p.textContent=n(a),D.textContent=n(c),S.textContent=n(u),b.textContent=n(r)}function n(t){return t.toString().padStart(2,"0")}function C(t){const r=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:i,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
