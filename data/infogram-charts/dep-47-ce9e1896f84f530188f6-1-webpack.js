(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-47"],{3985:(e,t,a)=>{a.r(t),a.d(t,{Controls:()=>c});var n=a(498);var r=a.n(n);var i=a(3986);var o=a(4004);var l=a(1112);var s=a(4005);function c(e){var t=e.instance,a=e.seriesDuration,n=e.duration,c=e.onPlay,v=void 0===c?l.noop:c,u=e.onPause,h=void 0===u?l.noop:u,d=e.onInput,p=void 0===d?l.noop:d,f=e.playable;var g=t.container,b=t.options;var w=t.runtime.width;if("BarRace"===t.getClassName()){var y=r().get(b,"dataSet.order.visible",!0);g.selectAll(".igc-tabs, .igc-tab-container").remove(),y&&(0,o.OrderTabs)(t,{width:w})}g.selectAll(".igc-sheet-player").remove(),t.sheetPlayer=new i.SeriesPlayer({container:g,width:b.width,colors:r().get(b,"style.sheetSwitch.play.colors"),onInput:p,onPlay:v,onPause:h,step:a?n/a*100:void 0,playable:f});var m=g.select(".sheet-player").node();(0,s.subtractHeight)(t,m)}},4004:(e,t,a)=>{a.r(t),a.d(t,{ORDER:()=>v,OrderTabs:()=>u});var n=a(498);var r=a.n(n);var i=a(1115);var o=a(4005);var l=a(4008);var s=a(4009);var c=a(4010);var v=["descending","ascending"];function u(e,t){var a=0;var n=0;var u=e.options,h=e.container;var d=u.sheetSwitch;var p=e.createInteractionCaller();var f=(t.width-1*l.TABS_SPACING-2*l.TABS_BORDER)/2;var g=(0,c.setupStyle)(r().get(u,"style.sheetSwitch.tab"));var b=r().get(u,"dataSet.order.tabs",[]);var w=[b[0]||"Highest",b[1]||"Lowest"];a=v.indexOf(r().get(u,"dataSet.order.type",v[a])),function c(){function v(){var i=document.createElement("textarea");i.innerText=w[a];var l=i.value;var v=(0,s.Dropdown)({container:h,width:t.width,data:w,currentIndex:a,title:l,showArrows:!!r().get(d,"tabOptions.navigationArrows"),style:g,controlsColorsEnabled:r().get(u,"style.sheetSwitch.controlsColorsEnabled"),onRightArrowClick:function(){n=a,a++,p("sheetSwitcher.arrow-right","click"),a>1&&(a=0),e.events.call("tabChanged",null,{sheetIndex:a,name:w[a]}),c()},onLeftArrowClick:function(){n=a,a--,p("sheetSwitcher.arrow-left","click"),a<0&&(a=1),e.events.call("tabChanged",null,{sheetIndex:a,name:w[a]}),c()},onChange:function(){var t=this.options[this.selectedIndex];p("sheetSwitcher.select","change"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),n=a,a=parseInt(t.value,10),e.events.call("tabChanged",null,{sheetIndex:a,name:w[a]}),c()}});(0,o.subtractFromRuntimeHeight)(e,v)}if(h.selectAll(".igc-tabs, .igc-tab-container").remove(),f>100){var b=(0,l.Tabs)({container:h,width:t.width,data:w,currentIndex:a,previousIndex:n,style:g,controlsColorsEnabled:r().get(u,"style.sheetSwitch.controlsColorsEnabled"),onSwitch:function(t,r){var o=r.sheetIndex;("keypress"!==t.type||13===t.keyCode)&&(p("sheetSwitcher.item","click"),a!==o&&(h.selectAll(".igc-tab.active").attr("class","igc-tab").attr("aria-selected","false"),(0,i.default)(this).classed("active",!0).attr("aria-selected","true"),n=a,a=o,e.events.call("tabChanged",null,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};var n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){var n;n=a[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r)),c()))}});b.fits?(0,o.subtractFromRuntimeHeight)(e,b.height):(h.selectAll(".igc-tabs, .igc-tab-container").remove(),v())}else v();h.selectAll(".igc-tabs").on("keydown",function(t){var r=!0;var i;var o=a;switch(t.code){case"ArrowLeft":case"ArrowUp":i=o>0?o-1:1;break;case"ArrowRight":case"ArrowDown":i=o>=1?0:o+1;break;default:r=!1}r&&(n=a,a=i,e.events.call("tabChanged",null,{sheetIndex:i,name:w[i]}),c(),h.select(".igc-tab").node().focus(),t.preventDefault(),t.stopPropagation())})}()}},3986:(e,t,a)=>{a.r(t),a.d(t,{SeriesPlayer:()=>f});var n=a(3987);var r=a(3988);function i(e,t,a){if(!t.has(e))throw TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}function o(e,t){var a=i(e,t,"get");return a.get?a.get.call(e):a.value}function l(e,t,a){!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,a)}function s(e,t,a){var n=i(e,t,"set");return!function(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=a}}(e,n,a),a}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap;var f=function(){"use strict";function e(t){var a=t.container,i=t.colors,c=t.width,f=t.min,g=t.max,b=t.step,w=t.onInput,y=t.onPlay,m=t.onPause,k=t.playable,C=void 0===k||k;var P=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),l(this,v,{writable:!0,value:void 0}),l(this,u,{writable:!0,value:void 0}),l(this,h,{writable:!0,value:void 0}),l(this,d,{writable:!0,value:void 0}),l(this,p,{writable:!0,value:void 0});var S=s(this,v,a.append("div").attr("class","igc-sheet-player")).append("div").attr("class","sheet-player").append("div").attr("class","sheet-player-inner");s(this,p,m),s(this,d,!1),s(this,u,new n.PlayButton({parent:S,color:i.background,colorHover:i.backgroundHover,iconColor:i.icon,iconHover:i.iconHover,onClick:function(){C&&(P.setPlaying(!o(P,d)),o(P,d)?y():m())}})),s(this,h,new r.Range({width:c-50,parent:S,progressColor:i.progressBar,progressHover:i.progressBarHover,handleColor:i.handle,handleHover:i.handleHover,railColor:i.rail,min:void 0===f?0:f,max:void 0===g?100:g,step:void 0===b?.01:b,animate:!1,onDragStart:function(){P.stop()},onDrag:function(e){w(e)},onClick:function(e){P.stop(),w(e)}}))}var t,a;return t=[{key:"setValue",value:function(e){o(this,h).setValue(e)}},{key:"setPlaying",value:function(e){s(this,d,e),o(this,u).toggle(e)}},{key:"isPlaying",value:function(){return o(this,d)}},{key:"stop",value:function(){this.isPlaying()&&this.setPlaying(!1)}},{key:"remove",value:function(){o(this,p)&&o(this,p).call(this),o(this,v).remove()}}],c(e.prototype,t),a&&c(e,a),e}()},4024:(e,t,a)=>{a.r(t),a.d(t,{inanimated:()=>i,removeAnimation:()=>o,removeDelay:()=>l});var n=a(498);var r=a.n(n);function i(e){return 0===r().get(e,"animation.duration")}function o(e){e.forEach(function(e){if(r().has(e,"animationDuration")){e.animationDuration(0);return}r().has(e,"animate")&&e.animate(!1)})}function l(e,t){return r().get(e,"runtime.inanimate")?function(){return 0}:t}}}]);