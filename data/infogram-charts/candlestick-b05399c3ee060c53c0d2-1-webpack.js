(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[34],{7428:(t,e,r)=>{r.r(e),r.d(e,{Candlestick:()=>w});var a=r(498);var n=r.n(a);var i=r(7231);var o=r(1977);var s=r(4028);var l=r(4019);var c=r(7227);var u=r(1112);var f=r(1113);var v=r(7244);var h=r(1111);var d=r(3974);var p=r(7429);var y=r(7258);function g(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function m(t,e,r){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var a=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(a){var n=Object.getOwnPropertyDescriptor(a,e);return n.get?n.get.call(r||t):n.value}})(t,e,r||t)}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(0,d.putGraph)("candlestick",p.Candlestick);var k=["open","high","low","close"];var w=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(a,t);var r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=x(a),r;if(e){var n=x(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);var i;return(i=r)&&("object"==(i&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)||"function"==typeof i)?i:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function a(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),r.apply(this,arguments)}var c,d;return d=[{key:"getClassName",value:function(){return"Candlestick"}}],c=[{key:"emptySheetData",value:function(){return n().merge({},m(x(a.prototype),"emptySheetData",this).call(this),{series:[{type:"candlestick",parseFormat:{x:"%d-%m-%Y"}}],graphOptions:{candlestick:{hiloOnly:!1}},style:{up:{stroke:"#000000",fill:"#ffffff"},down:{stroke:"#000000",fill:"#000000"}}})}},{key:"defaults",value:function(){return n().merge({},m(x(a.prototype),"defaults",this).call(this),{series:{dataPoints:!1,data:"separate"}})}},{key:"createXScale",value:function(){var t=this.runtime;var e=t.graphs;var r;return t.xDomain=((r=[(0,s.default)(e,function(t){return(0,s.default)(t.data,function(t){return+t.x})}),(0,l.default)(e,function(t){return(0,l.default)(t.data,function(t){return+t.x})})])[0]===r[1]&&(r[0]-=36e5,r[1]+=36e5),[new Date(r[0]),new Date(r[1])]),t.xScale=(0,i.default)().domain(t.xDomain).range([0,t.graphWidth],0),this.adjustXDomain(),this.runtime.xScale}},{key:"adjustXDomain",value:function(){var t=this.runtime;var e=t.graphs,r=t.xScale;var a=n().get(e,"[0].data.length",0);var i=.7*t.graphWidth/(a+1);var o=r.domain()[0];var s=r.domain()[1];var l=i/2;function c(t){var e=r.range()[0];var a=r.invert(e-t);r.domain([a,s]);var n=r(o)-r(a);if(n<l){var i=f.math.preciseNumber(l-n);i>.01&&c(i)}}function u(t){var e=r.range()[1];var a=r.invert(e+t);r.domain([o,a]);var n=r(a)-r(s);if(n<l){var i=f.math.preciseNumber(l-n);i>.01&&u(i)}}c(l),o=r.domain()[0],u(l),s=r.domain()[1],c(l),o=r.domain()[0],u(l),s=r.domain()[1],t.xDomain=[o,s]}},{key:"createCategoryLabels",value:function(){var t=this.runtime.categoryLayout;return v.Bottom.createLabels(this,t)}},{key:"graphInstanceSetup",value:function(t,e,r,a){var i=this.runtime.formatter;var o=n().get(this,"runtime.sheet.categories.data",[]);var s={};k.reduce(function(t,e,r){return t[e]=(0,u.replaceBlank)(o[r]),t},s),t.scaleX(a.x).scaleY(a.y).data(e.data).colors(e.colors).groupId(r).tooltip((0,h.createStyledTooltip)(this)).hiloOnly(e.hiloOnly).style(n().get(this,"runtime.sheet.style",{})).tooltipValue(function(t){return k.map(function(e){return"".concat(s[e],": ").concat(i.tooltip.y.format(t["".concat(e,"Raw")]))}).join(", ")}).dispatch().on("animationEnd",a.animationEnd)}},{key:"getDomain",value:function(t){return(0,y.getGraphsDomainByProperty)(t,k)}},{key:"prepareSheetData",value:function(t){var e=this.emptySheetData().series[0].type;var r=t.categories.colors;var a=n().get(t,"series[0].parseFormat.x");var i=(0,o.timeParse)(a);var s=[];var l=n().get(t,"series[0].links",[]);var c=n().get(t,"series[0].rawData",[]);return n().get(t,"series[0].data",[]).reduce(function(t,e,r){var a=i(n().get(e,"[0]",null));if(null===a)return t;var o={};n().set(o,"x",a),n().set(o,"link",n().get(l,"[".concat(r,"]"),null));for(var s=1;s<5;s++){var f=(0,u.replaceBlank)(e[s],null);if(null===f)return t;n().set(o,k[s-1],Number(f)),n().set(o,"".concat(k[s-1],"Raw"),(0,u.replaceBlank)(n().get(c,"[".concat(r,"][").concat(s,"]")),""))}return t.push(o),t},s),[{type:e,data:s,colors:r,hiloOnly:n().get(t,"graphOptions.candlestick.hiloOnly",!1)}]}},{key:"renderDataPoints",value:function(t,e){e.animationEnd()}}],g(a.prototype,c),d&&g(a,d),a}(c.Line)},4013:(t,e,r)=>{r.r(e),r.d(e,{Controls:()=>s});var a=r(4010);var n=r(4011);var i=r(4014);var o={tab:a.TabSwitcher,player:n.Player,radio:i.RadioSwitcher};function s(t){var e=t.options.sheetSwitch;var r;o[null!==(r=null==e?void 0:e.type)&&void 0!==r?r:"radio"].apply(null,arguments)}},4014:(t,e,r)=>{r.r(e),r.d(e,{RadioSwitcher:()=>c});var a=r(498);var n=r.n(a);var i=r(1115);var o=r(4015);var s=r(4011);var l=r(4005);function c(t,e){var r=t.container,a=t.options,c=t.sheetIndex;var u=a.sheets;var f=t.interaction;if((0,s.removeSheetPlayer)(t),r.selectAll(".igc-sheets").remove(),!(0,l.sheetsEmpty)(t)){var v=n().get(a,"style.sheetSwitch.radio");var h;var d=(h=r.insert("span").attr("class","igc-sm-sheet-switch-radio").style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px").append("div").attr("class","igc-sheets").append("div").attr("class","igc-sheet").append("span").attr("class","igc-sheet-ico").node().offsetWidth,r.select(".igc-sm-sheet-switch-radio").remove(),h);var p=(0,o.TextItemMetrics)().width(e.width).texts(u.map(function(t){return t.categories.title})).style(v).parentContainer(r).reservedSize(d+20)();var y=r.insert("div",".igc-content").attr("class","igc-sheets").attr("role","radiogroup").attr("aria-label","select sheet").style("width","".concat(e.width,"px"));var g=y.selectAll(".igc-sheet").data(u.map(function(t,e){return{name:t.categories.title,sheetIndex:e}}));(g=g.merge(g.enter().append("div"))).attr("class","igc-sheet").attr("role","radio").attr("aria-checked",function(t){return t.sheetIndex===c?"true":"false"}).attr("aria-labelledby",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).attr("class",function(t){return t.sheetIndex===c?"igc-sheet active":"igc-sheet"}).style("max-width","".concat(p.width,"px")),g.append("span").attr("class","igc-sheet-ico").attr("role","presentation").attr("id",function(t){return"igc-sheet-".concat(t.sheetIndex)}),g.append("span").attr("class","igc-sheet-label").html(function(t){return t.name}).attr("id",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).styles(v).style("height","".concat(p.label.height,"px")).style("max-width","".concat(p.label.width,"px")),g.on("click",function(e,a){var n=(0,i.default)(this);f("sheetSwitch.item","click"),t.sheetIndex!==a.sheetIndex&&(r.selectAll(".igc-sheet.active").attr("class","igc-sheet").attr("aria-checked","false"),n.classed("active",!0).attr("aria-checked","true"),t.sheetIndex=a.sheetIndex,delete t.legendData,t.render())}),(0,l.subtractHeight)(t,y.node())}}},7429:(t,e,r)=>{r.r(e),r.d(e,{Candlestick:()=>h});var a=r(498);var n=r.n(a);var i=r(420);var o=r(3989);var s=r(1115);var l=r(1111);var c=r(1112);var u=r(4018);var f=".igc-graph-candle-hilo";var v=".igc-graph-candle";function h(){var t=function(t){g.length&&t.each(function(){var t=(0,s.default)(this);var e=this.__chart__=p.copy();var i=this.__chart__=y.copy();var o=.7*e.range()[1]/(n().get(g,"length",0)+1);var l=t.selectAll(f).data(g);if((l=l.enter().append("path").attr("class",f.slice(1)).merge(l)).attr("d",function(t){return h(e(t.x),i(t.high-(t.high-t.low)/2),2,Math.abs(i(t.high)-i(t.low)))}).style("stroke","none").style("fill",r).style("stroke-width",0),!P){var c=t.selectAll(v).data(g);(c=c.enter().append("path").attr("rect",v.slice(1)).merge(c)).attr("d",function(t){return h(e(t.x),i(t.open-(t.open-t.close)/2),o,Math.abs(i(t.close)-i(t.open)))}).style("stroke",r).style("fill",a).style("stroke-width",2),d(c)}k.call("animationEnd")})};var e=function(t,e){var r=t.open>t.close?"down":"up";return n().get(T,"".concat(r,".").concat(e))};var r=function(t){return e(t,"stroke")};var a=function(t){return e(t,"fill")};var h=function(t,e,r,a){var n=t-r/2;var i=e-a/2;return[["M",n,i].join(" "),["h",r].join(" "),["v",a].join(" "),["h",-r].join(" "),["L",n,i].join(" ")].join("")};var d=function(t){(0,u.addMouseEvents)(t,k,S,O,w),t.on("mousemove",function(t,e){var r=(0,c.getMousePosition)(t);var n=O(e);var i=w(e);S().setText(n).setValue(i).setPosition(r,a(e))})};var p=(0,o.default)();var y=(0,o.default)();var g=[];var m=c.schemeCategory10;var x;var b;var k=(0,i.default)("animationEnd","openUrl");var w=function(){return""};var O=function(){return""};var S=l.getTooltip;var P=!1;var T={up:{stroke:"#000000",fill:"#ffffff"},down:{stroke:"#000000",fill:"#000000"}};return Object.assign(t,{scaleX:function(e){return arguments.length?(p=e,t):p},scaleY:function(e){return arguments.length?(y=e,t):y},data:function(e){return arguments.length?(g=e,t):g},colors:function(e){return arguments.length?(m=e,t):m},groupId:function(e){return arguments.length?(b=e,t):b},chartId:function(e){return arguments.length?(x=e,t):x},dispatch:function(){return k},tooltip:function(e){return arguments.length?(S=e,t):S},tooltipText:function(e){return arguments.length?(O=e,t):O},tooltipValue:function(e){return arguments.length?(w=e,t):w},hiloOnly:function(e){return arguments.length?(P=e,t):P},style:function(e){return arguments.length?(T=e,t):T}}),t}},4024:(t,e,r)=>{r.r(e),r.d(e,{inanimated:()=>i,removeAnimation:()=>o,removeDelay:()=>s});var a=r(498);var n=r.n(a);function i(t){return 0===n().get(t,"animation.duration")}function o(t){t.forEach(function(t){if(n().has(t,"animationDuration")){t.animationDuration(0);return}n().has(t,"animate")&&t.animate(!1)})}function s(t,e){return n().get(t,"runtime.inanimate")?function(){return 0}:e}},4015:(t,e,r)=>{r.r(e),r.d(e,{TextItemMetrics:()=>s,createMeasurement:()=>o});var a=r(3964);var n=r(1112);function i(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t.append("span").styles(e).style("white-space","nowrap").style("line-height",r).style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px")}function o(t){var e=t.style,r=t.container,a=t.lineHeight;return function(t){var o=i(r,e,a);var s=(0,n.measureTextHtml)(t,o.node());return o.remove(),s}}function s(){var t=function(){if(l){var t=i(l,o);var a=(0,n.measureTextHtmlHeight)(e,t.node());return t.remove(),{width:r,label:{width:r-s,height:a+a/4}}}};var e=[];var r=300;var o=(0,a.chartOptions)().style.legend;var s=0;var l;return Object.assign(t,{texts:function(r){return arguments.length?(e=r.slice(0),t):e},width:function(e){return arguments.length?(r=e,t):r},style:function(e){return arguments.length?(o=e,t):o},reservedSize:function(e){return arguments.length?(s=e,t):s},parentContainer:function(e){return arguments.length?(l=e,t):l}}),t}},1111:(t,e,r)=>{r.r(e),r.d(e,{createStyledTooltip:()=>c,getTooltip:()=>l,setTooltip:()=>s,tooltipDummy:()=>i});var a=r(1112);var n=r(843);var i={setText:function(){return this},setValue:function(){return this},setPosition:function(){return this},show:function(){return(0,n.logError)("Trying to show dummy tooltip"),this},interaction:function(){return this},hide:function(){return o!==i&&o.hide.apply(o,arguments),this},mute:function(){return this},unmute:function(){return this},isVisible:function(){return this},setKey:function(){return this},getKey:function(){return this}};var o=i;function s(t){o=t}function l(){return o}function c(t){var e,r,n,s,l,c,u,f;var v=t.createInteractionCaller();var h=null==t?void 0:null===(r=t.options)||void 0===r?void 0:null===(e=r.tooltip)||void 0===e?void 0:e.enabled;var d=null==t?void 0:null===(l=t.options)||void 0===l?void 0:null===(s=l.style)||void 0===s?void 0:null===(n=s.tooltip)||void 0===n?void 0:n.text;var p=null==t?void 0:null===(f=t.options)||void 0===f?void 0:null===(u=f.style)||void 0===u?void 0:null===(c=u.tooltip)||void 0===c?void 0:c.value;d=d&&(0,a.camelizeObject)(d),p=p&&(0,a.camelizeObject)(p);var y=(0,a.createGetScale)(t.root.node());var g,m;return g=d,m=p,h?function(){return{setText:function(t){return o.setText(t,g),this},setValue:function(t){return"string"!=typeof t||o.setValue(t,m),this},setPosition:function(t,e){return o.setPosition(t,{color:e,scale:y().x}),this},interaction:function(t){return v("tooltip",t),this},show:function(){return o.show.apply(o,arguments),this},hide:function(){return o.hide.apply(o,arguments),this},isVisible:function(){return o.isVisible()},mute:function(){return o.mute(),this},unmute:function(){return o.unmute(),this},setKey:function(){return o.setKey.apply(o,arguments),this},getKey:function(){return o.getKey()}}}:function(){return i}}},7427:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var a=r(498);var n=r.n(a);var i=r(7428);var o=r(7276);var s=r(7282);var l=r(2014);var c=r(7284);var u=Object.assign({},o.default);u.instanceClass=i.Candlestick,u.setupChartSheetOptionsItem=function(t){var e=this.sheetOptionsItemDefaults(t);var r=e.axis[0];var a=e.axis[1];var i="basic"===n().get(t,"type","basic");r.title=t.xlabel?t.xlabel:"",a.title=t.ylabel?t.ylabel:"",n().set(r,"timeFormat",n().get(t,"labels.axis.x.tick.timeFormat")),n().set(e,"graphOptions.candlestick.hiloOnly",n().get(t,"hilo",!1)),n().set(e,"series[0].parseFormat.x",n().get(t,"dataInputFormat.date","%d-%b")),n().set(e,"legend.enabled",!!n().has(t,"showLegend")&&t.showLegend);var o=this.chart.get("defaultColors");var u=n().get(e,"categories.colors[0]",n().get(o,"[0]"));if(n().set(e,"style.down.stroke",u),n().set(e,"style.down.fill",u),i){var f=(0,l.getChartBackgroundColor)(this.themeStyleColor);n().set(e,"style.up.stroke",u),n().set(e,"style.up.fill",f)}else{var v=n().get(e,"categories.colors[1]",n().get(o,"[1]"));n().set(e,"style.up.stroke",v),n().set(e,"style.up.fill",v)}return e.categories.xAxisTimeBased=!0,"number"==typeof t.ymin&&(a.minLimit=t.ymin),"number"==typeof t.ymax&&(a.maxLimit=t.ymax),(0,s.assignAxisTickInterval)(e,t),(0,s.assignAxisTicks)(e,t),(0,c.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,c.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"y",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,s.assignCategoryLabelLayout)(e,t),e};let f=Object.freeze(u)},7282:(t,e,r)=>{r.r(e),r.d(e,{assignAxisInverse:()=>f,assignAxisLimits:()=>l,assignAxisTickInterval:()=>u,assignAxisTicks:()=>c,assignAxisTitles:()=>s,assignCategoryLabelLayout:()=>v});var a=r(498);var n=r.n(a);var i=["x","y","y2"];var o=["min","max"];function s(t,e,r){var a=!0,n=!1,o=void 0;try{for(var s=r[Symbol.iterator](),l;!(a=(l=s.next()).done);a=!0){var c=l.value;t.axis[i.indexOf(c)].title=e["".concat(c,"label")]||""}}catch(t){n=!0,o=t}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}}function l(t,e,r){var a=!0,n=!1,s=void 0;try{for(var l=r[Symbol.iterator](),c;!(a=(c=l.next()).done);a=!0){var u=c.value;var f=!0,v=!1,h=void 0;try{for(var d=o[Symbol.iterator](),p;!(f=(p=d.next()).done);f=!0){var y=p.value;var g=e["".concat(u).concat(y)];"number"==typeof g&&(t.axis[i.indexOf(u)]["".concat(y,"Limit")]=g)}}catch(t){v=!0,h=t}finally{try{f||null==d.return||d.return()}finally{if(v)throw h}}}}catch(t){n=!0,s=t}finally{try{a||null==l.return||l.return()}finally{if(n)throw s}}}function c(t,e){t.axis.forEach(function(t,r){t.ticks=n().get(e,"labels.axis.".concat(i[r],".tick.enabled"),!0)})}function u(t,e){t.axis.forEach(function(t,r){var a=n().get(e,"axis.".concat(i[r],".ticks"));void 0!==a&&(t.tickInterval=a)})}function f(t,e,r){var a=i.indexOf(r);n().set(t,"axis[".concat(a,"].invert"),n().get(e,"axis.".concat(r,".invert"),!1))}function v(t,e){"tilted"===e.categoryLayout&&n().set(t,"categories.layout","tilted")}},7284:(t,e,r)=>{r.r(e),r.d(e,{assignNumberFormatLabels:()=>c,assignNumberFormatValues:()=>l});var a=r(498);var n=r.n(a);var i=r(1991);var o={label:{libraryTargetPath:"labels.format",customAffixPath:"labels.graph.item.format.affix"},x:{libraryTargetPath:"tooltip.format.x",customAffixPath:"labels.tooltip.format.x.affix"},y:{libraryTargetPath:"tooltip.format.y",customAffixPath:"labels.tooltip.format.y.affix"},y2:{libraryTargetPath:"tooltip.format.y2",customAffixPath:"labels.tooltip.format.y2.affix"}};function s(t,e,r){var a=e.decimalSeparator,o=e.groupingSymbol;o&&n().set(t,"grouping","none"===o?"":o);var s=!1===a;n().set(t,"decimal",s?".,":a);var l=r?new i.default("firstNumber",r):new i.default(s?"legacy":"firstNumber",a);n().set(t,"numberParser",l)}function l(t){var e=t.sheetOptions,r=t.custom,a=t.axis,i=t.inputDecimalSeparator;var o={x:0,y:1,y2:2,x1:0,y1:1};a.forEach(function(t){var a=t.id,l=t.path;var c=l?n().get(r,l,{}):r;var f=e.axis[o[a]];n().has(f,"format")||n().set(f,"format",{});var v=f.format;if(u(v,c),!["x1","y1"].includes(a)){s(v,c,i);var h=["useSIPrefixes"];n().get(r,"axis.".concat(a,".affix"),!0)&&h.push("prefix","suffix"),h.forEach(function(t){var e=n().get(c,t);void 0!==e&&n().set(v,t,e)})}})}function c(t){var e=t.sheetOptions,r=t.custom,a=t.affixes,i=t.inputDecimalSeparator;(void 0===a?[]:a).forEach(function(t){var a=t.id,l=t.path,c=t.ignoreCheck,f=t.defaultValue;var v=o[a];var h=v.libraryTargetPath,d=v.customAffixPath;var p=l?n().get(r,l,{}):r;var y=n().pick(p,"prefix","suffix");u(y,p),s(y,p,i),c||n().get(r,d,f)||(n().unset(y,"prefix"),n().unset(y,"suffix")),n().set(e,h,y)})}function u(t,e){var r=e.decimalPlaces,a=e.decimalPlacesValue;r&&void 0!==a&&n().set(t,"decimalPlaces",a)}}}]);