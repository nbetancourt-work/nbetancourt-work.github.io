(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[42],{7436:(t,e,r)=>{r.r(e),r.d(e,{FactsAndFigures:()=>f});var n=r(498);var a=r.n(n);var i=r(3920);var s=r(4013);var o=r(1112);var c=r(4022);function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(r||t):a.value}})(t,e,r||t)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(n,t);var r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=h(n),r;if(e){var a=h(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);var i;return(i=r)&&("object"==(i&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)||"function"==typeof i)?i:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function n(t){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),r.call(this,t,"div")}var i,f;return f=[{key:"getClassName",value:function(){return"FactsAndFigures"}}],i=[{key:"render",value:function(){this.detectDimensions();var t=this.options,e=this.root;var r=this.runtime={width:t.width,height:t.height};var n=r.width;var i=r.sheet=this.getSheetData();this.events.call("startAnimation"),e.selectAll(".igc-textual-entry").remove(),(0,s.Controls)(this,{width:n}),(0,c.DownloadButton)(this,t.style.legend),e.style("width",n);var l="shape.dimensions.width";var u="shape.dimensions.height";var h=i.categories,d=i.size;var f=h.data,p=h.colors;var v=e.selectAll(".igc-textual-entry").data(f).enter().append("div").attr("class","igc-textual-entry");i.showIcons&&v.append("div").attr("class","igc-textual-icon").append("svg").attr("width",d).attr("height",function(t){return Math.min(a().get(t,u)*d/a().get(t,l),d)||0}).attr("version","1.1").attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox",function(t){return"0 0 ".concat(a().get(t,l)||0," ").concat(a().get(t,u)||0)}).append("path").attr("class","igc-textual-path").attr("fill",function(t,e){return t.color||(0,o.getColor)(e,p)}).attr("fill-rule",function(t){return a().get(t,"shape.fillRule","evenodd")}).attr("transform",function(t){return"translate(".concat(0|a().get(t,"shape.dimensions.x"),", ").concat(a().get(t,"shape.dimensions.x")||0,")")}).attr("d",function(t){return a().get(t,"shape.path")});var g=v.append("div").attr("class","igc-textual-text innertext");g.append("div").attr("class","igc-textual-figure").html(function(t){return t.figure}).style("color",function(t,e){return t.color||(0,o.getColor)(e,p)}).style("-moz-transform",function(){return"scale(".concat(this.offsetWidth/this.scrollWidth,")")}).style("zoom",function(){return this.offsetWidth/this.scrollWidth}),g.append("div").attr("class","igc-textual-fact").html(function(t){return t.fact}),g.selectAll("a").attr("target","_blank"),this.events.call("endAnimation")}},{key:"defaults",value:function(){return a().merge({},u(h(n.prototype),"defaults",this).call(this),{animation:{duration:500}})}},{key:"applySheetOptions",value:function(t){t&&this.options.sheets.forEach(function(e,r){var n=t[r+1]||t[0];n.categories&&a().merge(e.categories,n.categories),n.size&&(e.size=n.size),e.showIcons=!a().has(n,"showIcons")||n.showIcons,e.series.forEach(function(t){a().merge(t,n.series&&n.series[0]||{})})})}}],l(n.prototype,i),f&&l(n,f),n}(i.Chart)},4013:(t,e,r)=>{r.r(e),r.d(e,{Controls:()=>o});var n=r(4010);var a=r(4011);var i=r(4014);var s={tab:n.TabSwitcher,player:a.Player,radio:i.RadioSwitcher};function o(t){var e=t.options.sheetSwitch;var r;s[null!==(r=null==e?void 0:e.type)&&void 0!==r?r:"radio"].apply(null,arguments)}},4014:(t,e,r)=>{r.r(e),r.d(e,{RadioSwitcher:()=>l});var n=r(498);var a=r.n(n);var i=r(1115);var s=r(4015);var o=r(4011);var c=r(4005);function l(t,e){var r=t.container,n=t.options,l=t.sheetIndex;var u=n.sheets;var h=t.interaction;if((0,o.removeSheetPlayer)(t),r.selectAll(".igc-sheets").remove(),!(0,c.sheetsEmpty)(t)){var d=a().get(n,"style.sheetSwitch.radio");var f;var p=(f=r.insert("span").attr("class","igc-sm-sheet-switch-radio").style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px").append("div").attr("class","igc-sheets").append("div").attr("class","igc-sheet").append("span").attr("class","igc-sheet-ico").node().offsetWidth,r.select(".igc-sm-sheet-switch-radio").remove(),f);var v=(0,s.TextItemMetrics)().width(e.width).texts(u.map(function(t){return t.categories.title})).style(d).parentContainer(r).reservedSize(p+20)();var g=r.insert("div",".igc-content").attr("class","igc-sheets").attr("role","radiogroup").attr("aria-label","select sheet").style("width","".concat(e.width,"px"));var y=g.selectAll(".igc-sheet").data(u.map(function(t,e){return{name:t.categories.title,sheetIndex:e}}));(y=y.merge(y.enter().append("div"))).attr("class","igc-sheet").attr("role","radio").attr("aria-checked",function(t){return t.sheetIndex===l?"true":"false"}).attr("aria-labelledby",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).attr("class",function(t){return t.sheetIndex===l?"igc-sheet active":"igc-sheet"}).style("max-width","".concat(v.width,"px")),y.append("span").attr("class","igc-sheet-ico").attr("role","presentation").attr("id",function(t){return"igc-sheet-".concat(t.sheetIndex)}),y.append("span").attr("class","igc-sheet-label").html(function(t){return t.name}).attr("id",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).styles(d).style("height","".concat(v.label.height,"px")).style("max-width","".concat(v.label.width,"px")),y.on("click",function(e,n){var a=(0,i.default)(this);h("sheetSwitch.item","click"),t.sheetIndex!==n.sheetIndex&&(r.selectAll(".igc-sheet.active").attr("class","igc-sheet").attr("aria-checked","false"),a.classed("active",!0).attr("aria-checked","true"),t.sheetIndex=n.sheetIndex,delete t.legendData,t.render())}),(0,c.subtractHeight)(t,g.node())}}},4015:(t,e,r)=>{r.r(e),r.d(e,{TextItemMetrics:()=>o,createMeasurement:()=>s});var n=r(3964);var a=r(1112);function i(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t.append("span").styles(e).style("white-space","nowrap").style("line-height",r).style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px")}function s(t){var e=t.style,r=t.container,n=t.lineHeight;return function(t){var s=i(r,e,n);var o=(0,a.measureTextHtml)(t,s.node());return s.remove(),o}}function o(){var t=function(){if(c){var t=i(c,s);var n=(0,a.measureTextHtmlHeight)(e,t.node());return t.remove(),{width:r,label:{width:r-o,height:n+n/4}}}};var e=[];var r=300;var s=(0,n.chartOptions)().style.legend;var o=0;var c;return Object.assign(t,{texts:function(r){return arguments.length?(e=r.slice(0),t):e},width:function(e){return arguments.length?(r=e,t):r},style:function(e){return arguments.length?(s=e,t):s},reservedSize:function(e){return arguments.length?(o=e,t):o},parentContainer:function(e){return arguments.length?(c=e,t):c}}),t}},7435:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n=r(498);var a=r.n(n);var i=r(7436);var s=r(7276);var o=Object.assign({},s.default);o.instanceClass=i.FactsAndFigures,o.setupChartOptionsDimensions=function(){},o.setupChartOptions=function(){s.default.setupChartOptions.call(this);var t=this.custom,e=this.chartOptions;a().has(t,"size")&&(e.size=parseInt(t.size,10))},o.setupChartSheetOptionsItem=function(t){var e=s.default.setupChartSheetOptionsItem.call(this,t);var r=t.size,n=t.showIcons;return e.size=r||50,e.showIcons=!1!==n,e};let c=Object.freeze(o)}}]);