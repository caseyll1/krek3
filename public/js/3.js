(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{xfSd:function(t,e,r){"use strict";r.r(e);var o=r("L2JU"),s=(r("dD1E"),r("xG9w")),i=r("e5cX"),n=r("3WHO");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n.d.register(n.p,n.q,n.f,n.h,n.c,n.k,n.i,n.o);var p={name:"ScatterChart",components:{Scatter:i.a},methods:{handleChartClick:function(t){var e=this.$refs.scatterChart,r=e.getElementsAtEvent(t);if(r.length>0){var o=r[0]._datasetIndex,s=r[0]._index;e.chartData.datasets[o].data[s]}}},computed:c(c({},Object(o.b)({properties:function(t){return t.properties.properties}})),{},{chartData:function(){var t=this;return{datasets:[{label:"properties",data:this.properties.filter((function(e){null==e||e.VQCA;if(t.isSliderFilter){var r=parseInt(null==e?void 0:e.v),o=parseInt(null==e?void 0:e.q),s=parseInt(null==e?void 0:e.c),i=parseInt(null==e?void 0:e.a),n=(Math.abs(r-parseInt(searchView)),parseInt(searchView)===r),a=parseInt(searchQuality)===o,l=parseInt(searchCondition)===s,c=parseInt(searchAmenities)===i;return n||a||l||c}return!0})).map((function(t,e){return{x:t.soldPrice,y:t.yTotal,title:t.streetAddress,streetAddress:t.streetAddress,postalCity:t.postalCity,state:t.state,MLS:t.MLS,opinionTotal:t.opinionTotal,YTotal:t.yTotal,soldPrice:t.soldPrice,zipCode:t.zipCode,date:t.date,DO:t.difference_in_opinion,v:t.v,q:t.q,c:t.c,a:t.a,id:t.id,images:t.images}})),borderColor:function(e){var r=t.properties[e.dataIndex];return null!=r&&r.difference_in_opinion?"white":"yellow"},pointRadius:function(){return 6}}]}}}),data:function(){var t=this;return{isSliderFilter:!1,zipCode:"",chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{y:{ticks:{beginAtZero:!0}}},onClick:function(e,r,o){if(r[0]){var s=r[0].index,i=o.data.datasets[0].data[s];t.$store.dispatch("properties/selectProperty",i)}},plugins:{tooltip:{callbacks:{label:function(t,e){var r="";return r+=t.raw.x,r+="\n ",r+=t.raw.y,r},beforeBody:function(t,e){return["Title: "+t[0].raw.title]},afterBody:function(t,e){return["Date: "+t[0].raw.x,"Price"+t[0].raw.y,!t[0].raw.DO?"Subject Property":"Reference Property"]},labelColor:function(t){return{borderColor:"rgb(0, 0, 255)",backgroundColor:"rgb(255, 0, 0)",borderWidth:2,borderDash:[2,2],borderRadius:2}},labelTextColor:function(t){return"white"},labelPointStyle:function(t){return{pointStyle:"triangle",rotation:0}},title:function(t){return"Details"}}}}}}}},d=r("KHd+"),f=Object(d.a)(p,(function(){return(0,this._self._c)("Scatter",{ref:"scatterChart",attrs:{"chart-options":this.chartOptions,"chart-data":this.chartData},on:{click:this.handleChartClick}})}),[],!1,null,null,null).exports,m={props:["containerClass"]},h=Object(d.a)(m,(function(){var t=this._self._c;return t("svg",{class:this.containerClass,attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512"}},[t("path",{attrs:{d:"m16 90.259h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.088 72.778-58.508h90.839c8.836 0 16-7.164 16-16s-7.164-16-16-16h-90.847c-7.356-33.402-37.241-58.507-72.77-58.507-35.548 0-65.419 25.101-72.772 58.507h-243.611c-8.836 0-16 7.164-16 16s7.164 16 16 16zm273.877-15.958c0-.057.001-.115.001-.172.07-23.367 19.137-42.376 42.505-42.376 23.335 0 42.403 18.983 42.504 42.339l.003.235c-.037 23.407-19.091 42.441-42.507 42.441-23.406 0-42.454-19.015-42.507-42.408zm206.123 347.439h-90.847c-7.357-33.401-37.241-58.507-72.77-58.507-35.548 0-65.419 25.102-72.772 58.507h-243.611c-8.836 0-16 7.163-16 16s7.164 16 16 16h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.089 72.778-58.508h90.839c8.836 0 16-7.163 16-16s-7.164-16-16-16zm-163.617 58.508c-23.406 0-42.454-19.015-42.507-42.408l.001-.058c0-.058.001-.115.001-.172.07-23.367 19.137-42.377 42.505-42.377 23.335 0 42.403 18.983 42.504 42.338l.003.235c-.034 23.41-19.089 42.442-42.507 42.442zm163.617-240.248h-243.605c-7.342-33.419-37.186-58.507-72.778-58.507s-65.436 25.088-72.778 58.507h-90.839c-8.836 0-16 7.164-16 16 0 8.837 7.164 16 16 16h90.847c7.357 33.401 37.241 58.507 72.77 58.507 35.548 0 65.419-25.102 72.772-58.507h243.611c8.836 0 16-7.163 16-16 0-8.836-7.164-16-16-16zm-273.877 15.958c0 .058-.001.115-.001.172-.07 23.367-19.137 42.376-42.505 42.376-23.335 0-42.403-18.983-42.504-42.338l-.003-.234c.035-23.41 19.09-42.441 42.507-42.441 23.406 0 42.454 19.014 42.507 42.408z"}})])}),[],!1,null,null,null).exports;function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===b(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w={props:["showing"],computed:g(g({},Object(o.b)({date_from:function(t){return t.properties.date_from},date_to:function(t){return t.properties.date_to},sold_from:function(t){return t.properties.sold_from},sold_to:function(t){return t.properties.sold_to}})),{},{dateFrom:{get:function(){return this.date_from},set:function(t){this.$store.commit("properties/setDateFrom",t)}},dateTo:{get:function(){return this.date_to},set:function(t){this.$store.commit("properties/setDateTo",t)}},soldFrom:{get:function(){return this.sold_from},set:function(t){this.$store.commit("properties/setSoldFrom",t)}},soldTo:{get:function(){return this.sold_to},set:function(t){this.$store.commit("properties/setSoldTo",t)}}}),methods:{close:function(){this.$emit("close")},compare:function(){var t=this;this.$store.dispatch("properties/get",(function(){t.$emit("close")}))}}};function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function _(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==x(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===x(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P={name:"MainShell",data:function(){return{show_slideover:!1,is_typing:!1,search_query:""}},mounted:function(){this.search_query=this.zipCode,this.$store.dispatch("properties/get")},components:{ScatterChart:f,FilterIcon:h,Slideover:Object(d.a)(w,(function(){var t=this,e=t._self._c;return t.showing?e("div",{staticClass:"relative z-50",attrs:{"aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",class:{"opacity-0":!t.showing,"opacity-100":t.showing}}),t._v(" "),e("div",{staticClass:"fixed inset-0 overflow-hidden"},[e("div",{staticClass:"absolute inset-0 overflow-hidden"},[e("div",{staticClass:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},[e("div",{staticClass:"transform transition ease-in-out duration-500 sm:duration-700 pointer-events-auto relative w-screen max-w-md",class:{"w-0":!t.showing,"w-full":t.showing}},[e("div",{staticClass:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",class:{"opacity-0":!t.showing,"opacity-100":t.showing}},[e("button",{staticClass:"rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",attrs:{type:"button"},on:{click:function(e){return t.close()}}},[e("span",{staticClass:"sr-only"},[t._v("Close panel")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),e("div",{staticClass:"flex h-full flex-col overflow-y-scroll bg-gray-900 py-6 shadow-xl"},[t._m(0),t._v(" "),e("div",{staticClass:"relative mt-6 flex-1 px-4 sm:px-6"},[e("div",{staticClass:"flex flex-1 flex-col"},[e("div",[e("div",[e("label",{staticClass:"block text-sm font-medium leading-6 text-white",attrs:{for:"dateFrom"}},[t._v("Sold date from")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dateFrom,expression:"dateFrom"}],staticClass:"block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{type:"date",name:"dateFrom"},domProps:{value:t.dateFrom},on:{input:function(e){e.target.composing||(t.dateFrom=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"mt-6"},[e("label",{staticClass:"block text-sm font-medium leading-6 text-white",attrs:{for:"dateTo"}},[t._v("Sold date to")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dateTo,expression:"dateTo"}],staticClass:"block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{type:"date",name:"dateTo"},domProps:{value:t.dateTo},on:{input:function(e){e.target.composing||(t.dateTo=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"mt-6"},[e("div",[e("label",{staticClass:"block text-sm font-medium leading-6 text-white",attrs:{for:"soldFrom"}},[t._v("Min sold price")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.soldFrom,expression:"soldFrom"}],staticClass:"block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{type:"number",name:"soldFrom"},domProps:{value:t.soldFrom},on:{input:function(e){e.target.composing||(t.soldFrom=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"mt-6"},[e("label",{staticClass:"block text-sm font-medium leading-6 text-white",attrs:{for:"soldTo"}},[t._v("Max sold price")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.soldTo,expression:"soldTo"}],staticClass:"block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{type:"number",name:"soldTo"},domProps:{value:t.soldTo},on:{input:function(e){e.target.composing||(t.soldTo=e.target.value)}}})])])]),t._v(" "),e("button",{staticClass:"mt-6 rounded-md bg-blue-500 px-3 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",attrs:{type:"button"},on:{click:t.compare}},[t._v("Filter")])])])])])])])])]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"px-4 sm:px-6"},[t("h2",{staticClass:"text-base font-semibold leading-6 text-white"},[this._v("Filter properties")])])}],!1,null,null,null).exports},watch:{search_query:s.a.debounce((function(){this.is_typing=!1}),1e3),is_typing:function(t){t||(this.$store.commit("properties/setZipCode",this.search_query),this.$store.dispatch("properties/get"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.b)({properties:function(t){return t.properties.properties},subjectProperty:function(t){return t.properties.subjectProperty},comparisonProperty:function(t){return t.properties.comparisonProperty},zipCode:function(t){return t.properties.zip_code}})),methods:{showSlideover:function(){this.show_slideover=!0},closeSlideover:function(){this.show_slideover=!1},compare:function(){this.$router.push("/comparison")},clearSubjectProperty:function(){this.$store.dispatch("properties/clearSubjectProperty")},clearComparisonProperty:function(){this.$store.dispatch("properties/clearComparisonProperty")}}},O=Object(d.a)(P,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"h-screen bg-gray-900"},[e("div",{staticClass:"fixed inset-y-0 z-50 flex w-72 flex-col"},[e("div",{staticClass:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 border-r border-white px-6 h-full"},[t._m(0),t._v(" "),e("nav",{staticClass:"flex flex-1 flex-col"},[e("ul",{staticClass:"flex flex-1 flex-col gap-y-7",attrs:{role:"list"}},[e("li",[e("ul",{staticClass:"-mx-2 space-y-1",attrs:{role:"list"}},[e("li",[e("p",{staticClass:"text-white"},[t._v("Subject Property")]),t._v(" "),t.subjectProperty.hasOwnProperty("id")?e("a",{staticClass:"text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 py-1 pl-0 text-sm leading-6 font-semibold",attrs:{href:"#"},domProps:{textContent:t._s(t.subjectProperty.streetAddress)},on:{click:t.clearSubjectProperty}}):e("a",{staticClass:"text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 pl-0 text-sm leading-6 font-semibold",attrs:{href:"#"}},[t._v("\n                    Please select\n                  ")])]),t._v(" "),t.subjectProperty.hasOwnProperty("id")?e("li",{staticClass:"pt-6"},[e("p",{staticClass:"text-white"},[t._v("Comparison Property")]),t._v(" "),t.comparisonProperty.hasOwnProperty("id")?e("a",{staticClass:"text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 py-1 pl-0 text-sm leading-6 font-semibold",attrs:{href:"#"},domProps:{textContent:t._s(t.comparisonProperty.streetAddress)},on:{click:t.clearComparisonProperty}}):e("a",{staticClass:"text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 pl-0 text-sm leading-6 font-semibold",attrs:{href:"#"}},[t._v("\n                    Please select\n                  ")])]):t._e(),t._v(" "),t.subjectProperty.hasOwnProperty("id")&&t.comparisonProperty.hasOwnProperty("id")?e("li",{staticClass:"pt-6"},[e("button",{staticClass:"rounded-md bg-blue-500 px-3 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",attrs:{type:"button"},on:{click:t.compare}},[t._v("Compare")])]):t._e()])]),t._v(" "),t._m(1)])])])]),t._v(" "),e("div",{staticClass:"pl-72"},[e("div",{staticClass:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8"},[e("div",{staticClass:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6"},[e("form",{staticClass:"flex flex-1",attrs:{action:"#",method:"GET"}},[e("label",{staticClass:"sr-only",attrs:{for:"search-field"}},[t._v("Search")]),t._v(" "),e("div",{staticClass:"relative w-full"},[e("svg",{staticClass:"pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500",attrs:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_query,expression:"search_query"}],staticClass:"block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm",attrs:{id:"search-field",placeholder:"Search by zip code...",type:"search",name:"search"},domProps:{value:t.search_query},on:{input:[function(e){e.target.composing||(t.search_query=e.target.value)},function(e){t.is_typing=!0}]}})])])]),t._v(" "),e("button",{staticClass:"-m-2.5 p-2.5 text-white",attrs:{type:"button"},on:{click:t.showSlideover}},[e("span",{staticClass:"sr-only"},[t._v("Open sidebar")]),t._v(" "),e("FilterIcon",{staticClass:"h-5 w-5 text-white"})],1)]),t._v(" "),e("main",[e("div",{staticClass:"border-t border-white/10 p-12 pb-0 mb-8"},[t.properties.length>0?e("ScatterChart"):t._e()],1)])])]),t._v(" "),e("Slideover",{attrs:{showing:t.show_slideover},on:{close:t.closeSlideover}})],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"flex h-16 shrink-0 items-center"},[t("img",{staticClass:"h-8 w-auto",attrs:{src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",alt:"Your Company"}}),this._v(" "),t("p",{staticClass:"text-white font-bold ml-4"},[this._v("CREX")])])},function(){var t=this._self._c;return t("li",{staticClass:"-mx-6 mt-auto",attrs:{onClick:"{logout}"}},[t("a",{staticClass:"flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800",attrs:{href:"#"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("Logout")])])])}],!1,null,null,null);e.default=O.exports}}]);