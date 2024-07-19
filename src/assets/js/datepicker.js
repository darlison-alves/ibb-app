(()=>{"use strict";function e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t(e){return e[e.length-1]}function i(e,...t){return t.forEach((t=>{e.includes(t)||e.push(t)})),e}function a(e,t){return e?e.split(t):[]}function s(e,t,i){return(void 0===t||e>=t)&&(void 0===i||e<=i)}function r(e,t,i){return e<t?t:e>i?i:e}function n(e,t,i={},a=0,s=""){s+=`<${Object.keys(i).reduce(((e,t)=>{let s=i[t];return"function"==typeof s&&(s=s(a)),`${e} ${t}="${s}"`}),e)}></${e}>`;const r=a+1;return r<t?n(e,t,i,r,s):s}function d(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}function o(e){return new Date(e).setHours(0,0,0,0)}function c(){return(new Date).setHours(0,0,0,0)}function l(...e){switch(e.length){case 0:return c();case 1:return o(e[0])}const t=new Date(0);return t.setFullYear(...e),t.setHours(0,0,0,0)}function h(e,t){const i=new Date(e);return i.setDate(i.getDate()+t)}function u(e,t){const i=new Date(e),a=i.getMonth()+t;let s=a%12;s<0&&(s+=12);const r=i.setMonth(a);return i.getMonth()!==s?i.setDate(0):r}function g(e,t){const i=new Date(e),a=i.getMonth(),s=i.setFullYear(i.getFullYear()+t);return 1===a&&2===i.getMonth()?i.setDate(0):s}function f(e,t){return(e-t+7)%7}function p(e,t,i=0){const a=new Date(e).getDay();return h(e,f(t,i)-f(a,i))}function m(e,t){const i=new Date(e).getFullYear();return Math.floor(i/t)*t}const b=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,w=/[\s!-/:-@[-`{-~年月日]+/;let y={};const k={y:(e,t)=>new Date(e).setFullYear(parseInt(t,10)),m(e,t,i){const a=new Date(e);let s=parseInt(t,10)-1;if(isNaN(s)){if(!t)return NaN;const e=t.toLowerCase(),a=t=>t.toLowerCase().startsWith(e);if(s=i.monthsShort.findIndex(a),s<0&&(s=i.months.findIndex(a)),s<0)return NaN}return a.setMonth(s),a.getMonth()!==D(s)?a.setDate(0):a.getTime()},d:(e,t)=>new Date(e).setDate(parseInt(t,10))},v={d:e=>e.getDate(),dd:e=>x(e.getDate(),2),D:(e,t)=>t.daysShort[e.getDay()],DD:(e,t)=>t.days[e.getDay()],m:e=>e.getMonth()+1,mm:e=>x(e.getMonth()+1,2),M:(e,t)=>t.monthsShort[e.getMonth()],MM:(e,t)=>t.months[e.getMonth()],y:e=>e.getFullYear(),yy:e=>x(e.getFullYear(),2).slice(-2),yyyy:e=>x(e.getFullYear(),4)};function D(e){return e>-1?e%12:D(e+12)}function x(e,t){return e.toString().padStart(t,"0")}function M(e){if("string"!=typeof e)throw new Error("Invalid date format.");if(e in y)return y[e];const i=e.split(b),a=e.match(new RegExp(b,"g"));if(0===i.length||!a)throw new Error("Invalid date format.");const s=a.map((e=>v[e])),r=Object.keys(k).reduce(((e,t)=>(a.find((e=>"D"!==e[0]&&e[0].toLowerCase()===t))&&e.push(t),e)),[]);return y[e]={parser(e,t){const i=e.split(w).reduce(((e,t,i)=>{if(t.length>0&&a[i]){const s=a[i][0];"M"===s?e.m=t:"D"!==s&&(e[s]=t)}return e}),{});return r.reduce(((e,a)=>{const s=k[a](e,i[a],t);return isNaN(s)?e:s}),c())},formatter:(e,a)=>s.reduce(((t,s,r)=>t+`${i[r]}${s(e,a)}`),"")+t(i)}}function S(e,t,i){if(e instanceof Date||"number"==typeof e){const t=o(e);return isNaN(t)?void 0:t}if(e){if("today"===e)return c();if(t&&t.toValue){const a=t.toValue(e,t,i);return isNaN(a)?void 0:o(a)}return M(t).parser(e,i)}}function O(e,t,i){if(isNaN(e)||!e&&0!==e)return"";const a="number"==typeof e?new Date(e):e;return t.toDisplay?t.toDisplay(a,t,i):M(t).formatter(a,i)}const C=new WeakMap,{addEventListener:E,removeEventListener:F}=EventTarget.prototype;function L(e,t){let i=C.get(e);i||(i=[],C.set(e,i)),t.forEach((e=>{E.call(...e),i.push(e)}))}function V(e){let t=C.get(e);t&&(t.forEach((e=>{F.call(...e)})),C.delete(e))}if(!Event.prototype.composedPath){const e=(t,i=[])=>{let a;return i.push(t),t.parentNode?a=t.parentNode:t.host?a=t.host:t.defaultView&&(a=t.defaultView),a?e(a,i):i};Event.prototype.composedPath=function(){return e(this.target)}}function A(e,t,i,a=0){const s=e[a];return t(s)?s:s!==i&&s.parentElement?A(e,t,i,a+1):void 0}function N(e,t){const i="function"==typeof t?t:e=>e.matches(t);return A(e.composedPath(),i,e.currentTarget)}const B={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},Y={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',orientation:"auto",pickLevel:0,prevArrow:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>',showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},W=document.createRange();function H(e){return W.createContextualFragment(e)}function _(e){"none"!==e.style.display&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function K(e){"none"===e.style.display&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function j(e){e.firstChild&&(e.removeChild(e.firstChild),j(e))}const{language:T,format:$,weekStart:I}=Y;function P(e,t){return e.length<6&&t>=0&&t<7?i(e,t):e}function R(e){return(e+6)%7}function q(e,t,i,a){const s=S(e,t,i);return void 0!==s?s:a}function J(e,t,i=3){const a=parseInt(e,10);return a>=0&&a<=i?a:t}function z(t,a){const s=Object.assign({},t),r={},n=a.constructor.locales;let{format:d,language:o,locale:c,maxDate:h,maxView:u,minDate:g,pickLevel:f,startView:p,weekStart:m}=a.config||{};if(s.language){let e;if(s.language!==o&&(n[s.language]?e=s.language:(e=s.language.split("-")[0],void 0===n[e]&&(e=!1))),delete s.language,e){o=r.language=e;const t=c||n[T];c=Object.assign({format:$,weekStart:I},n[T]),o!==T&&Object.assign(c,n[o]),r.locale=c,d===t.format&&(d=r.format=c.format),m===t.weekStart&&(m=r.weekStart=c.weekStart,r.weekEnd=R(c.weekStart))}}if(s.format){const e="function"==typeof s.format.toDisplay,t="function"==typeof s.format.toValue,i=b.test(s.format);(e&&t||i)&&(d=r.format=s.format),delete s.format}let w=g,y=h;if(void 0!==s.minDate&&(w=null===s.minDate?l(0,0,1):q(s.minDate,d,c,w),delete s.minDate),void 0!==s.maxDate&&(y=null===s.maxDate?void 0:q(s.maxDate,d,c,y),delete s.maxDate),y<w?(g=r.minDate=y,h=r.maxDate=w):(g!==w&&(g=r.minDate=w),h!==y&&(h=r.maxDate=y)),s.datesDisabled&&(r.datesDisabled=s.datesDisabled.reduce(((e,t)=>{const a=S(t,d,c);return void 0!==a?i(e,a):e}),[]),delete s.datesDisabled),void 0!==s.defaultViewDate){const e=S(s.defaultViewDate,d,c);void 0!==e&&(r.defaultViewDate=e),delete s.defaultViewDate}if(void 0!==s.weekStart){const e=Number(s.weekStart)%7;isNaN(e)||(m=r.weekStart=e,r.weekEnd=R(e)),delete s.weekStart}if(s.daysOfWeekDisabled&&(r.daysOfWeekDisabled=s.daysOfWeekDisabled.reduce(P,[]),delete s.daysOfWeekDisabled),s.daysOfWeekHighlighted&&(r.daysOfWeekHighlighted=s.daysOfWeekHighlighted.reduce(P,[]),delete s.daysOfWeekHighlighted),void 0!==s.maxNumberOfDates){const e=parseInt(s.maxNumberOfDates,10);e>=0&&(r.maxNumberOfDates=e,r.multidate=1!==e),delete s.maxNumberOfDates}s.dateDelimiter&&(r.dateDelimiter=String(s.dateDelimiter),delete s.dateDelimiter);let k=f;void 0!==s.pickLevel&&(k=J(s.pickLevel,2),delete s.pickLevel),k!==f&&(f=r.pickLevel=k);let v=u;void 0!==s.maxView&&(v=J(s.maxView,u),delete s.maxView),v=f>v?f:v,v!==u&&(u=r.maxView=v);let D=p;if(void 0!==s.startView&&(D=J(s.startView,D),delete s.startView),D<f?D=f:D>u&&(D=u),D!==p&&(r.startView=D),s.prevArrow){const e=H(s.prevArrow);e.childNodes.length>0&&(r.prevArrow=e.childNodes),delete s.prevArrow}if(s.nextArrow){const e=H(s.nextArrow);e.childNodes.length>0&&(r.nextArrow=e.childNodes),delete s.nextArrow}if(void 0!==s.disableTouchKeyboard&&(r.disableTouchKeyboard="ontouchstart"in document&&!!s.disableTouchKeyboard,delete s.disableTouchKeyboard),s.orientation){const e=s.orientation.toLowerCase().split(/\s+/g);r.orientation={x:e.find((e=>"left"===e||"right"===e))||"auto",y:e.find((e=>"top"===e||"bottom"===e))||"auto"},delete s.orientation}if(void 0!==s.todayBtnMode){switch(s.todayBtnMode){case 0:case 1:r.todayBtnMode=s.todayBtnMode}delete s.todayBtnMode}return Object.keys(s).forEach((t=>{void 0!==s[t]&&e(Y,t)&&(r[t]=s[t])})),r}const U=d('<div class="datepicker hidden">\n  <div class="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">\n    <div class="datepicker-header">\n      <div class="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold"></div>\n      <div class="datepicker-controls flex justify-between mb-2">\n        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"></button>\n        <button type="button" class="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"></button>\n        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main p-1"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls flex space-x-2 mt-2">\n        <button type="button" class="%buttonClass% today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>\n        <button type="button" class="%buttonClass% clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>\n      </div>\n    </div>\n  </div>\n</div>'),X=d(`<div class="days">\n  <div class="days-of-week grid grid-cols-7 mb-1">${n("span",7,{class:"dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"})}</div>\n  <div class="datepicker-grid w-64 grid grid-cols-7">${n("span",42,{class:"block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"})}</div>\n</div>`),G=d(`<div class="calendar-weeks">\n  <div class="days-of-week flex"><span class="dow h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"></span></div>\n  <div class="weeks">${n("span",6,{class:"week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"})}</div>\n</div>`);class Q{constructor(e,t){Object.assign(this,t,{picker:e,element:H('<div class="datepicker-view flex"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}init(e){void 0!==e.pickLevel&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}performBeforeHook(e,t,a){let s=this.beforeShow(new Date(a));switch(typeof s){case"boolean":s={enabled:s};break;case"string":s={classes:s}}if(s){if(!1===s.enabled&&(e.classList.add("disabled"),i(this.disabled,t)),s.classes){const a=s.classes.split(/\s+/);e.classList.add(...a),a.includes("disabled")&&i(this.disabled,t)}s.content&&function(e,t){j(e),t instanceof DocumentFragment?e.appendChild(t):"string"==typeof t?e.appendChild(H(t)):"function"==typeof t.forEach&&t.forEach((t=>{e.appendChild(t)}))}(e,s.content)}}}class Z extends Q{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const e=H(X).firstChild;this.dow=e.firstChild,this.grid=e.lastChild,this.element.appendChild(e)}super.init(e)}setOptions(t){let i;if(e(t,"minDate")&&(this.minDate=t.minDate),e(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,i=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,i=!0),t.locale){const e=this.locale=t.locale;this.dayNames=e.daysMin,this.switchLabelFormat=e.titleFormat,i=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const e=H(G).firstChild;this.calendarWeeks={element:e,dow:e.firstChild,weeks:e.lastChild},this.element.insertBefore(e,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(K(this.dow),this.calendarWeeks&&K(this.calendarWeeks.dow)):(_(this.dow),this.calendarWeeks&&_(this.calendarWeeks.dow))),i&&Array.from(this.dow.children).forEach(((e,t)=>{const i=(this.weekStart+t)%7;e.textContent=this.dayNames[i],e.className=this.daysOfWeekDisabled.includes(i)?"dow disabled text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed":"dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"}))}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),a=l(t,i,1),s=p(a,this.weekStart,this.weekStart);this.first=a,this.last=l(t,i+1,0),this.start=s,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){this.today=this.todayHighlight?c():void 0,this.disabled=[...this.datesDisabled];const e=O(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(e),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const e=p(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach(((t,i)=>{t.textContent=function(e){const t=p(e,4,1),i=p(new Date(t).setMonth(0,4),4,1);return Math.round((t-i)/6048e5)+1}(h(e,7*i))}))}Array.from(this.grid.children).forEach(((e,t)=>{const a=e.classList,s=h(this.start,t),r=new Date(s),n=r.getDay();if(e.className=`datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ${this.cellClass}`,e.dataset.date=s,e.textContent=r.getDate(),s<this.first?a.add("prev","text-gray-500","dark:text-white"):s>this.last&&a.add("next","text-gray-500","dark:text-white"),this.today===s&&a.add("today","bg-gray-100","dark:bg-gray-600"),(s<this.minDate||s>this.maxDate||this.disabled.includes(s))&&a.add("disabled","cursor-not-allowed"),this.daysOfWeekDisabled.includes(n)&&(a.add("disabled","cursor-not-allowed"),i(this.disabled,s)),this.daysOfWeekHighlighted.includes(n)&&a.add("highlighted"),this.range){const[e,t]=this.range;s>e&&s<t&&(a.add("range","bg-gray-200","dark:bg-gray-600"),a.remove("rounded-lg","rounded-l-lg","rounded-r-lg")),s===e&&(a.add("range-start","bg-gray-100","dark:bg-gray-600","rounded-l-lg"),a.remove("rounded-lg","rounded-r-lg")),s===t&&(a.add("range-end","bg-gray-100","dark:bg-gray-600","rounded-r-lg"),a.remove("rounded-lg","rounded-l-lg"))}this.selected.includes(s)&&(a.add("selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white"),a.remove("text-gray-900","text-gray-500","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600","dark:bg-gray-600","bg-gray-100","bg-gray-200")),s===this.focused&&a.add("focused"),this.beforeShow&&this.performBeforeHook(e,s,s)}))}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((e=>{e.classList.remove("range","range-start","range-end","selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white","focused"),e.classList.add("text-gray-900","rounded-lg","dark:text-white")})),Array.from(this.grid.children).forEach((i=>{const a=Number(i.dataset.date),s=i.classList;s.remove("bg-gray-200","dark:bg-gray-600","rounded-l-lg","rounded-r-lg"),a>e&&a<t&&(s.add("range","bg-gray-200","dark:bg-gray-600"),s.remove("rounded-lg")),a===e&&(s.add("range-start","bg-gray-200","dark:bg-gray-600","rounded-l-lg"),s.remove("rounded-lg","rounded-r-lg")),a===t&&(s.add("range-end","bg-gray-200","dark:bg-gray-600","rounded-r-lg"),s.remove("rounded-lg","rounded-l-lg")),this.selected.includes(a)&&(s.add("selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white"),s.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600","bg-gray-100","bg-gray-200","dark:bg-gray-600")),a===this.focused&&s.add("focused")}))}refreshFocus(){const e=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[e].classList.add("focused")}}function ee(e,t){if(!e||!e[0]||!e[1])return;const[[i,a],[s,r]]=e;return i>t||s<t?void 0:[i===t?a:-1,s===t?r:12]}class te extends Q{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid","w-64","grid","grid-cols-4"),this.grid.appendChild(H(n("span",12,{"data-month":e=>e})))),super.init(e)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),e(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(e(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=l(this.maxYear,this.maxMonth+1,0)}void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce(((e,t)=>{const a=new Date(t),s=a.getFullYear(),r=a.getMonth();return void 0===e[s]?e[s]=[r]:i(e[s],r),e}),{}),t&&t.dates&&(this.range=t.dates.map((e=>{const t=new Date(e);return isNaN(t)?void 0:[t.getFullYear(),t.getMonth()]})))}render(){this.disabled=[],this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,a=this.year===this.maxYear,s=ee(this.range,this.year);Array.from(this.grid.children).forEach(((r,n)=>{const d=r.classList,o=l(this.year,n,1);if(r.className=`datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ${this.cellClass}`,this.isMinView&&(r.dataset.date=o),r.textContent=this.monthNames[n],(t||i&&n<this.minMonth||a&&n>this.maxMonth)&&d.add("disabled"),s){const[e,t]=s;n>e&&n<t&&d.add("range"),n===e&&d.add("range-start"),n===t&&d.add("range-end")}e.includes(n)&&(d.add("selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white"),d.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),n===this.focused&&d.add("focused"),this.beforeShow&&this.performBeforeHook(r,n,o)}))}refresh(){const e=this.selected[this.year]||[],[t,i]=ee(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((e=>{e.classList.remove("range","range-start","range-end","selected","bg-blue-700","dark:bg-blue-600","dark:text-white","text-white","focused"),e.classList.add("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")})),Array.from(this.grid.children).forEach(((a,s)=>{const r=a.classList;s>t&&s<i&&r.add("range"),s===t&&r.add("range-start"),s===i&&r.add("range-end"),e.includes(s)&&(r.add("selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white"),r.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),s===this.focused&&r.add("focused")}))}refreshFocus(){this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[this.focused].classList.add("focused")}}class ie extends Q{constructor(e,t){super(e,t)}init(e,t=!0){var i;t&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${i=this.cellClass,[...i].reduce(((e,t,i)=>e+(i?t:t.toUpperCase())),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid","w-64","grid","grid-cols-4"),this.grid.appendChild(H(n("span",12)))),super.init(e)}setOptions(t){if(e(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=m(t.minDate,this.step),this.minDate=l(this.minYear,0,1))),e(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=m(t.maxDate,this.step),this.maxDate=l(this.maxYear,11,31))),void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=m(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=m(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce(((e,t)=>i(e,m(t,this.step))),[]),t&&t.dates&&(this.range=t.dates.map((e=>{if(void 0!==e)return m(e,this.step)})))}render(){this.disabled=[],this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach(((e,t)=>{const i=e.classList,a=this.start+t*this.step,s=l(a,0,1);if(e.className=`datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ${this.cellClass}`,this.isMinView&&(e.dataset.date=s),e.textContent=e.dataset.year=a,0===t?i.add("prev"):11===t&&i.add("next"),(a<this.minYear||a>this.maxYear)&&i.add("disabled"),this.range){const[e,t]=this.range;a>e&&a<t&&i.add("range"),a===e&&i.add("range-start"),a===t&&i.add("range-end")}this.selected.includes(a)&&(i.add("selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white"),i.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),a===this.focused&&i.add("focused"),this.beforeShow&&this.performBeforeHook(e,a,s)}))}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((e=>{e.classList.remove("range","range-start","range-end","selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white","focused")})),Array.from(this.grid.children).forEach((i=>{const a=Number(i.textContent),s=i.classList;a>e&&a<t&&s.add("range"),a===e&&s.add("range-start"),a===t&&s.add("range-end"),this.selected.includes(a)&&(s.add("selected","bg-blue-700","text-white","dark:bg-blue-600","dark:text-white"),s.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),a===this.focused&&s.add("focused")}))}refreshFocus(){const e=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[e].classList.add("focused")}}function ae(e,t){const i={date:e.getDate(),viewDate:new Date(e.picker.viewDate),viewId:e.picker.currentView.id,datepicker:e};e.element.dispatchEvent(new CustomEvent(t,{detail:i}))}function se(e,t){const{minDate:i,maxDate:a}=e.config,{currentView:s,viewDate:n}=e.picker;let d;switch(s.id){case 0:d=u(n,t);break;case 1:d=g(n,t);break;default:d=g(n,t*s.navStep)}d=r(d,i,a),e.picker.changeFocus(d).render()}function re(e){const t=e.picker.currentView.id;t!==e.config.maxView&&e.picker.changeView(t+1).render()}function ne(e){e.config.updateOnBlur?e.update({autohide:!0}):(e.refresh("input"),e.hide())}function de(e,t){const i=e.picker,a=new Date(i.viewDate),s=i.currentView.id,r=1===s?u(a,t-a.getMonth()):g(a,t-a.getFullYear());i.changeFocus(r).changeView(s-1).render()}function oe(e){const t=e.picker,i=c();if(1===e.config.todayBtnMode){if(e.config.autohide)return void e.setDate(i);e.setDate(i,{render:!1}),t.update()}t.viewDate!==i&&t.changeFocus(i),t.changeView(0).render()}function ce(e){e.setDate({clear:!0})}function le(e){re(e)}function he(e){se(e,-1)}function ue(e){se(e,1)}function ge(e,t){const i=N(t,".datepicker-cell");if(!i||i.classList.contains("disabled"))return;const{id:a,isMinView:s}=e.picker.currentView;s?e.setDate(Number(i.dataset.date)):de(e,Number(1===a?i.dataset.month:i.dataset.year))}function fe(e){e.inline||e.config.disableTouchKeyboard||e.inputField.focus()}function pe(t,i){if(void 0!==i.title&&(i.title?(t.controls.title.textContent=i.title,K(t.controls.title)):(t.controls.title.textContent="",_(t.controls.title))),i.prevArrow){const e=t.controls.prevBtn;j(e),i.prevArrow.forEach((t=>{e.appendChild(t.cloneNode(!0))}))}if(i.nextArrow){const e=t.controls.nextBtn;j(e),i.nextArrow.forEach((t=>{e.appendChild(t.cloneNode(!0))}))}if(i.locale&&(t.controls.todayBtn.textContent=i.locale.today,t.controls.clearBtn.textContent=i.locale.clear),void 0!==i.todayBtn&&(i.todayBtn?K(t.controls.todayBtn):_(t.controls.todayBtn)),e(i,"minDate")||e(i,"maxDate")){const{minDate:e,maxDate:i}=t.datepicker.config;t.controls.todayBtn.disabled=!s(c(),e,i)}void 0!==i.clearBtn&&(i.clearBtn?K(t.controls.clearBtn):_(t.controls.clearBtn))}function me(e){const{dates:i,config:a}=e;return r(i.length>0?t(i):a.defaultViewDate,a.minDate,a.maxDate)}function be(e,t){const i=new Date(e.viewDate),a=new Date(t),{id:s,year:r,first:n,last:d}=e.currentView,o=a.getFullYear();switch(e.viewDate=t,o!==i.getFullYear()&&ae(e.datepicker,"changeYear"),a.getMonth()!==i.getMonth()&&ae(e.datepicker,"changeMonth"),s){case 0:return t<n||t>d;case 1:return o!==r;default:return o<n||o>d}}function we(e){return window.getComputedStyle(e).direction}class ye{constructor(e){this.datepicker=e;const t=U.replace(/%buttonClass%/g,e.config.buttonClass),i=this.element=H(t).firstChild,[a,s,r]=i.firstChild.children,n=a.firstElementChild,[d,o,c]=a.lastElementChild.children,[l,h]=r.firstChild.children,u={title:n,prevBtn:d,viewSwitch:o,nextBtn:c,todayBtn:l,clearBtn:h};this.main=s,this.controls=u;const g=e.inline?"inline":"dropdown";i.classList.add(`datepicker-${g}`),"dropdown"===g&&i.classList.add("dropdown","absolute","top-0","left-0","z-50","pt-2"),pe(this,e.config),this.viewDate=me(e),L(e,[[i,"click",fe.bind(null,e),{capture:!0}],[s,"click",ge.bind(null,e)],[u.viewSwitch,"click",le.bind(null,e)],[u.prevBtn,"click",he.bind(null,e)],[u.nextBtn,"click",ue.bind(null,e)],[u.todayBtn,"click",oe.bind(null,e)],[u.clearBtn,"click",ce.bind(null,e)]]),this.views=[new Z(this),new te(this),new ie(this,{id:2,name:"years",cellClass:"year",step:1}),new ie(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.config.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.config.container.appendChild(this.element)}setOptions(e){pe(this,e),this.views.forEach((t=>{t.init(e,!1)})),this.currentView.render()}detach(){this.datepicker.config.container.removeChild(this.element)}show(){if(this.active)return;this.element.classList.add("active","block"),this.element.classList.remove("hidden"),this.active=!0;const e=this.datepicker;if(!e.inline){const t=we(e.inputField);t!==we(e.config.container)?this.element.dir=t:this.element.dir&&this.element.removeAttribute("dir"),this.place(),e.config.disableTouchKeyboard&&e.inputField.blur()}ae(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active","block"),this.element.classList.add("active","block","hidden"),this.active=!1,ae(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element,{config:i,inputField:a}=this.datepicker,s=i.container,{width:r,height:n}=this.element.getBoundingClientRect(),{left:d,top:o,width:c}=s.getBoundingClientRect(),{left:l,top:h,width:u,height:g}=a.getBoundingClientRect();let f,p,m,{x:b,y:w}=i.orientation;s===document.body?(f=window.scrollY,p=l+window.scrollX,m=h+f):(f=s.scrollTop,p=l-d,m=h-o+f),"auto"===b&&(p<0?(b="left",p=10):b=p+r>c||"rtl"===we(a)?"right":"left"),"right"===b&&(p-=r-u),"auto"===w&&(w=m-n<f?"bottom":"top"),"top"===w?m-=n:m+=g,e.remove("datepicker-orient-top","datepicker-orient-bottom","datepicker-orient-right","datepicker-orient-left"),e.add(`datepicker-orient-${w}`,`datepicker-orient-${b}`),t.top=m?`${m}px`:m,t.left=p?`${p}px`:p}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevBtnDisabled(e){this.controls.prevBtn.disabled=e}setNextBtnDisabled(e){this.controls.nextBtn.disabled=e}changeView(e){const t=this.currentView,i=this.views[e];return i.id!==t.id&&(this.currentView=i,this._renderMethod="render",ae(this.datepicker,"changeView"),this.main.replaceChild(i.element,t.element)),this}changeFocus(e){return this._renderMethod=be(this,e)?"render":"refreshFocus",this.views.forEach((e=>{e.updateFocus()})),this}update(){const e=me(this.datepicker);return this._renderMethod=be(this,e)?"render":"refresh",this.views.forEach((e=>{e.updateFocus(),e.updateSelection()})),this}render(e=!0){const t=e&&this._renderMethod||"render";delete this._renderMethod,this.currentView[t]()}}function ke(e,t,i,a,r,n){if(s(e,r,n)){if(a(e)){return ke(t(e,i),t,i,a,r,n)}return e}}function ve(e,t,i,a){const s=e.picker,r=s.currentView,n=r.step||1;let d,o,c=s.viewDate;switch(r.id){case 0:c=a?h(c,7*i):t.ctrlKey||t.metaKey?g(c,i):h(c,i),d=h,o=e=>r.disabled.includes(e);break;case 1:c=u(c,a?4*i:i),d=u,o=e=>{const t=new Date(e),{year:i,disabled:a}=r;return t.getFullYear()===i&&a.includes(t.getMonth())};break;default:c=g(c,i*(a?4:1)*n),d=g,o=e=>r.disabled.includes(m(e,n))}c=ke(c,d,i<0?-n:n,o,r.minDate,r.maxDate),void 0!==c&&s.changeFocus(c).render()}function De(e,t){if("Tab"===t.key)return void ne(e);const i=e.picker,{id:a,isMinView:s}=i.currentView;if(i.active)if(e.editMode)switch(t.key){case"Escape":i.hide();break;case"Enter":e.exitEditMode({update:!0,autohide:e.config.autohide});break;default:return}else switch(t.key){case"Escape":i.hide();break;case"ArrowLeft":if(t.ctrlKey||t.metaKey)se(e,-1);else{if(t.shiftKey)return void e.enterEditMode();ve(e,t,-1,!1)}break;case"ArrowRight":if(t.ctrlKey||t.metaKey)se(e,1);else{if(t.shiftKey)return void e.enterEditMode();ve(e,t,1,!1)}break;case"ArrowUp":if(t.ctrlKey||t.metaKey)re(e);else{if(t.shiftKey)return void e.enterEditMode();ve(e,t,-1,!0)}break;case"ArrowDown":if(t.shiftKey&&!t.ctrlKey&&!t.metaKey)return void e.enterEditMode();ve(e,t,1,!0);break;case"Enter":s?e.setDate(i.viewDate):i.changeView(a-1).render();break;case"Backspace":case"Delete":return void e.enterEditMode();default:return void(1!==t.key.length||t.ctrlKey||t.metaKey||e.enterEditMode())}else switch(t.key){case"ArrowDown":case"Escape":i.show();break;case"Enter":e.update();break;default:return}t.preventDefault(),t.stopPropagation()}function xe(e){e.config.showOnFocus&&!e._showing&&e.show()}function Me(e,t){const i=t.target;(e.picker.active||e.config.showOnClick)&&(i._active=i===document.activeElement,i._clicking=setTimeout((()=>{delete i._active,delete i._clicking}),2e3))}function Se(e,t){const i=t.target;i._clicking&&(clearTimeout(i._clicking),delete i._clicking,i._active&&e.enterEditMode(),delete i._active,e.config.showOnClick&&e.show())}function Oe(e,t){t.clipboardData.types.includes("text/plain")&&e.enterEditMode()}function Ce(e,t){const i=e.element;if(i!==document.activeElement)return;const a=e.picker.element;N(t,(e=>e===i||e===a))||ne(e)}function Ee(e,t){return e.map((e=>O(e,t.format,t.locale))).join(t.dateDelimiter)}function Fe(e,t,i=!1){const{config:a,dates:r,rangepicker:n}=e;if(0===t.length)return i?[]:void 0;const d=n&&e===n.datepickers[1];let o=t.reduce(((e,t)=>{let i=S(t,a.format,a.locale);if(void 0===i)return e;if(a.pickLevel>0){const e=new Date(i);i=1===a.pickLevel?d?e.setMonth(e.getMonth()+1,0):e.setDate(1):d?e.setFullYear(e.getFullYear()+1,0,0):e.setMonth(0,1)}return!s(i,a.minDate,a.maxDate)||e.includes(i)||a.datesDisabled.includes(i)||a.daysOfWeekDisabled.includes(new Date(i).getDay())||e.push(i),e}),[]);return 0!==o.length?(a.multidate&&!i&&(o=o.reduce(((e,t)=>(r.includes(t)||e.push(t),e)),r.filter((e=>!o.includes(e))))),a.maxNumberOfDates&&o.length>a.maxNumberOfDates?o.slice(-1*a.maxNumberOfDates):o):void 0}function Le(e,t=3,i=!0){const{config:a,picker:s,inputField:r}=e;if(2&t){const e=s.active?a.pickLevel:a.startView;s.update().changeView(e).render(i)}1&t&&r&&(r.value=Ee(e.dates,a))}function Ve(e,t,i){let{clear:a,render:s,autohide:r}=i;void 0===s&&(s=!0),s?void 0===r&&(r=e.config.autohide):r=!1;const n=Fe(e,t,a);n&&(n.toString()!==e.dates.toString()?(e.dates=n,Le(e,s?3:1),ae(e,"changeDate")):Le(e,1),r&&e.hide())}class Ae{constructor(e,t={},i){e.datepicker=this,this.element=e;const s=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:document.body,defaultViewDate:c(),maxDate:void 0,minDate:void 0},z(Y,this));this._options=t,Object.assign(s,z(t,this));const r=this.inline="INPUT"!==e.tagName;let n,d;if(r)s.container=e,d=a(e.dataset.date,s.dateDelimiter),delete e.dataset.date;else{const i=t.container?document.querySelector(t.container):null;i&&(s.container=i),n=this.inputField=e,n.classList.add("datepicker-input"),d=a(n.value,s.dateDelimiter)}if(i){const e=i.inputs.indexOf(n),t=i.datepickers;if(e<0||e>1||!Array.isArray(t))throw Error("Invalid rangepicker object.");t[e]=this,Object.defineProperty(this,"rangepicker",{get:()=>i})}this.dates=[];const o=Fe(this,d);o&&o.length>0&&(this.dates=o),n&&(n.value=Ee(this.dates,s));const l=this.picker=new ye(this);if(r)this.show();else{const e=Ce.bind(null,this);L(this,[[n,"keydown",De.bind(null,this)],[n,"focus",xe.bind(null,this)],[n,"mousedown",Me.bind(null,this)],[n,"click",Se.bind(null,this)],[n,"paste",Oe.bind(null,this)],[document,"mousedown",e],[document,"touchstart",e],[window,"resize",l.place.bind(l)]])}}static formatDate(e,t,i){return O(e,t,i&&B[i]||B.en)}static parseDate(e,t,i){return S(e,t,i&&B[i]||B.en)}static get locales(){return B}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=this.picker,i=z(e,this);Object.assign(this._options,e),Object.assign(this.config,i),t.setOptions(i),Le(this,3)}show(){if(this.inputField){if(this.inputField.disabled)return;this.inputField!==document.activeElement&&(this._showing=!0,this.inputField.focus(),delete this._showing)}this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),V(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(e){const t=e?t=>O(t,e,this.config.locale):e=>new Date(e);return this.config.multidate?this.dates.map(t):this.dates.length>0?t(this.dates[0]):void 0}setDate(...e){const i=[...e],a={},s=t(e);"object"!=typeof s||Array.isArray(s)||s instanceof Date||!s||Object.assign(a,i.pop());Ve(this,Array.isArray(i[0])?i[0]:i,a)}update(e){if(this.inline)return;const t={clear:!0,autohide:!(!e||!e.autohide)};Ve(this,a(this.inputField.value,this.config.dateDelimiter),t)}refresh(e,t=!1){let i;e&&"string"!=typeof e&&(t=e,e=void 0),i="picker"===e?2:"input"===e?1:3,Le(this,i,!t)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit","border-blue-700"))}exitEditMode(e){if(this.inline||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit","border-blue-700"),t.update&&this.update(t)}}function Ne(e){const t=Object.assign({},e);return delete t.inputs,delete t.allowOneSidedRange,delete t.maxNumberOfDates,t}function Be(e,t,i,a){L(e,[[i,"changeDate",t]]),new Ae(i,a,e)}function Ye(e,t){if(e._updating)return;e._updating=!0;const i=t.target;if(void 0===i.datepicker)return;const a=e.datepickers,s={render:!1},r=e.inputs.indexOf(i),n=0===r?1:0,d=a[r].dates[0],o=a[n].dates[0];void 0!==d&&void 0!==o?0===r&&d>o?(a[0].setDate(o,s),a[1].setDate(d,s)):1===r&&d<o&&(a[0].setDate(d,s),a[1].setDate(o,s)):e.allowOneSidedRange||void 0===d&&void 0===o||(s.clear=!0,a[n].setDate(a[r].dates,s)),a[0].picker.update().render(),a[1].picker.update().render(),delete e._updating}class We{constructor(e,t={}){const i=Array.isArray(t.inputs)?t.inputs:Array.from(e.querySelectorAll("input"));if(i.length<2)return;e.rangepicker=this,this.element=e,this.inputs=i.slice(0,2),this.allowOneSidedRange=!!t.allowOneSidedRange;const a=Ye.bind(null,this),s=Ne(t),r=[];Object.defineProperty(this,"datepickers",{get:()=>r}),Be(this,a,this.inputs[0],s),Be(this,a,this.inputs[1],s),Object.freeze(r),r[0].dates.length>0?Ye(this,{target:this.inputs[0]}):r[1].dates.length>0&&Ye(this,{target:this.inputs[1]})}get dates(){return 2===this.datepickers.length?[this.datepickers[0].dates[0],this.datepickers[1].dates[0]]:void 0}setOptions(e){this.allowOneSidedRange=!!e.allowOneSidedRange;const t=Ne(e);this.datepickers[0].setOptions(t),this.datepickers[1].setOptions(t)}destroy(){this.datepickers[0].destroy(),this.datepickers[1].destroy(),V(this),delete this.element.rangepicker}getDates(e){const t=e?t=>O(t,e,this.datepickers[0].config.locale):e=>new Date(e);return this.dates.map((e=>void 0===e?e:t(e)))}setDates(e,t){const[i,a]=this.datepickers,s=this.dates;this._updating=!0,i.setDate(e),a.setDate(t),delete this._updating,a.dates[0]!==s[1]?Ye(this,{target:this.inputs[1]}):i.dates[0]!==s[0]&&Ye(this,{target:this.inputs[0]})}}var He=function(e){var t=e.hasAttribute("datepicker-buttons"),i=e.hasAttribute("datepicker-autohide"),a=e.hasAttribute("datepicker-format"),s=e.hasAttribute("datepicker-orientation"),r=e.hasAttribute("datepicker-title"),n={};return t&&(n.todayBtn=!0,n.clearBtn=!0),i&&(n.autohide=!0),a&&(n.format=e.getAttribute("datepicker-format")),s&&(n.orientation=e.getAttribute("datepicker-orientation")),r&&(n.title=e.getAttribute("datepicker-title")),n};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[datepicker]").forEach((function(e){new Ae(e,He(e))})),document.querySelectorAll("[inline-datepicker]").forEach((function(e){new Ae(e,He(e))})),document.querySelectorAll("[date-rangepicker]").forEach((function(e){new We(e,He(e))}))}))})();
//# sourceMappingURL=datepicker.js.map