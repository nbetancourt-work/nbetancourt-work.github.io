(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[31],{4013:(t,e,a)=>{a.r(e),a.d(e,{Controls:()=>o});var i=a(4010);var r=a(4011);var n=a(4014);var s={tab:i.TabSwitcher,player:r.Player,radio:n.RadioSwitcher};function o(t){var e=t.options.sheetSwitch;var a;s[null!==(a=null==e?void 0:e.type)&&void 0!==a?a:"radio"].apply(null,arguments)}},4014:(t,e,a)=>{a.r(e),a.d(e,{RadioSwitcher:()=>c});var i=a(498);var r=a.n(i);var n=a(1115);var s=a(4015);var o=a(4011);var l=a(4005);function c(t,e){var a=t.container,i=t.options,c=t.sheetIndex;var u=i.sheets;var h=t.interaction;if((0,o.removeSheetPlayer)(t),a.selectAll(".igc-sheets").remove(),!(0,l.sheetsEmpty)(t)){var v=r().get(i,"style.sheetSwitch.radio");var f;var d=(f=a.insert("span").attr("class","igc-sm-sheet-switch-radio").style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px").append("div").attr("class","igc-sheets").append("div").attr("class","igc-sheet").append("span").attr("class","igc-sheet-ico").node().offsetWidth,a.select(".igc-sm-sheet-switch-radio").remove(),f);var p=(0,s.TextItemMetrics)().width(e.width).texts(u.map(function(t){return t.categories.title})).style(v).parentContainer(a).reservedSize(d+20)();var m=a.insert("div",".igc-content").attr("class","igc-sheets").attr("role","radiogroup").attr("aria-label","select sheet").style("width","".concat(e.width,"px"));var g=m.selectAll(".igc-sheet").data(u.map(function(t,e){return{name:t.categories.title,sheetIndex:e}}));(g=g.merge(g.enter().append("div"))).attr("class","igc-sheet").attr("role","radio").attr("aria-checked",function(t){return t.sheetIndex===c?"true":"false"}).attr("aria-labelledby",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).attr("class",function(t){return t.sheetIndex===c?"igc-sheet active":"igc-sheet"}).style("max-width","".concat(p.width,"px")),g.append("span").attr("class","igc-sheet-ico").attr("role","presentation").attr("id",function(t){return"igc-sheet-".concat(t.sheetIndex)}),g.append("span").attr("class","igc-sheet-label").html(function(t){return t.name}).attr("id",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).styles(v).style("height","".concat(p.label.height,"px")).style("max-width","".concat(p.label.width,"px")),g.on("click",function(e,i){var r=(0,n.default)(this);h("sheetSwitch.item","click"),t.sheetIndex!==i.sheetIndex&&(a.selectAll(".igc-sheet.active").attr("class","igc-sheet").attr("aria-checked","false"),r.classed("active",!0).attr("aria-checked","true"),t.sheetIndex=i.sheetIndex,delete t.legendData,t.render())}),(0,l.subtractHeight)(t,m.node())}}},4024:(t,e,a)=>{a.r(e),a.d(e,{inanimated:()=>n,removeAnimation:()=>s,removeDelay:()=>o});var i=a(498);var r=a.n(i);function n(t){return 0===r().get(t,"animation.duration")}function s(t){t.forEach(function(t){if(r().has(t,"animationDuration")){t.animationDuration(0);return}r().has(t,"animate")&&t.animate(!1)})}function o(t,e){return r().get(t,"runtime.inanimate")?function(){return 0}:e}},4015:(t,e,a)=>{a.r(e),a.d(e,{TextItemMetrics:()=>o,createMeasurement:()=>s});var i=a(3964);var r=a(1112);function n(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t.append("span").styles(e).style("white-space","nowrap").style("line-height",a).style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px")}function s(t){var e=t.style,a=t.container,i=t.lineHeight;return function(t){var s=n(a,e,i);var o=(0,r.measureTextHtml)(t,s.node());return s.remove(),o}}function o(){var t=function(){if(l){var t=n(l,s);var i=(0,r.measureTextHtmlHeight)(e,t.node());return t.remove(),{width:a,label:{width:a-o,height:i+i/4}}}};var e=[];var a=300;var s=(0,i.chartOptions)().style.legend;var o=0;var l;return Object.assign(t,{texts:function(a){return arguments.length?(e=a.slice(0),t):e},width:function(e){return arguments.length?(a=e,t):a},style:function(e){return arguments.length?(s=e,t):s},reservedSize:function(e){return arguments.length?(o=e,t):o},parentContainer:function(e){return arguments.length?(l=e,t):l}}),t}},1111:(t,e,a)=>{a.r(e),a.d(e,{createStyledTooltip:()=>c,getTooltip:()=>l,setTooltip:()=>o,tooltipDummy:()=>n});var i=a(1112);var r=a(843);var n={setText:function(){return this},setValue:function(){return this},setPosition:function(){return this},show:function(){return(0,r.logError)("Trying to show dummy tooltip"),this},interaction:function(){return this},hide:function(){return s!==n&&s.hide.apply(s,arguments),this},mute:function(){return this},unmute:function(){return this},isVisible:function(){return this},setKey:function(){return this},getKey:function(){return this}};var s=n;function o(t){s=t}function l(){return s}function c(t){var e,a,r,o,l,c,u,h;var v=t.createInteractionCaller();var f=null==t?void 0:null===(a=t.options)||void 0===a?void 0:null===(e=a.tooltip)||void 0===e?void 0:e.enabled;var d=null==t?void 0:null===(l=t.options)||void 0===l?void 0:null===(o=l.style)||void 0===o?void 0:null===(r=o.tooltip)||void 0===r?void 0:r.text;var p=null==t?void 0:null===(h=t.options)||void 0===h?void 0:null===(u=h.style)||void 0===u?void 0:null===(c=u.tooltip)||void 0===c?void 0:c.value;d=d&&(0,i.camelizeObject)(d),p=p&&(0,i.camelizeObject)(p);var m=(0,i.createGetScale)(t.root.node());var g,y;return g=d,y=p,f?function(){return{setText:function(t){return s.setText(t,g),this},setValue:function(t){return"string"!=typeof t||s.setValue(t,y),this},setPosition:function(t,e){return s.setPosition(t,{color:e,scale:m().x}),this},interaction:function(t){return v("tooltip",t),this},show:function(){return s.show.apply(s,arguments),this},hide:function(){return s.hide.apply(s,arguments),this},isVisible:function(){return s.isVisible()},mute:function(){return s.mute(),this},unmute:function(){return s.unmute(),this},setKey:function(){return s.setKey.apply(s,arguments),this},getKey:function(){return s.getKey()}}}:function(){return n}}},7315:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var i=a(498);var r=a.n(i);var n=a(7292);var s=Object.assign({},n.default);s.setupChartOptions=function(){n.default.setupChartOptions.call(this),this.chartOptions.series.percent=!0,this.chartOptions.series.data="separate"},s.setupChartSheetOptionsItem=function(t){var e=n.default.setupChartSheetOptionsItem.apply(this,arguments);return r().set(e,"tooltip.showPercent",r().get(t,"tooltip.showPercent",!0)),e};let o=Object.freeze(s)},7292:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var i=a(498);var r=a.n(i);var n=a(7293);var s=a(7286);var o=a(7277);var l=a(7279);var c=a(7280);var u=a(7282);var h=a(7284);var v=Object.assign({},s.default);v.instanceClass=n.BarStacked,v.setupChartOptions=function(){var t,e,a,i;s.default.setupChartOptions.call(this);var r=this.custom,n=this.chartOptions;var o;var l;n.style.graph.item.value.hideOverlapping=null===(o=null==r?void 0:r.hideOverlapValues)||void 0===o||o,n.style.graph.item.value.align=null!==(l=null==r?void 0:null===(i=r.labels)||void 0===i?void 0:null===(a=i.graph)||void 0===a?void 0:null===(e=a.item)||void 0===e?void 0:null===(t=e.value)||void 0===t?void 0:t.align)&&void 0!==l?l:"left"},v.setupChartSheetOptionsItem=function(t){var e={categories:{colors:r().merge([],this.themeColors,t.colors||this.colors)},grid:{vertical:!0,horizontal:!1},graphOptions:{bar:{showValues:!!t.showInLineValues}},axis:[{},{}]};(0,o.default)(e,t,this.charts);var a=e.axis[0];var i=e.axis[1];return t.enableHeight||(e.categories.categoryHeight=t.categoryHeight||this.defaultCategoryHeight),a.title=t.xlabel||"",i.title=t.ylabel||"",r().has(t,"axis.x.ticks")&&(a.ticks=r().get(t,"axis.x.ticks")),r().has(t,"axis.y.ticks")&&(i.ticks=r().get(t,"axis.y.ticks")),"number"==typeof t.xmin&&(a.minLimit=t.xmin),"number"==typeof t.xmax&&(a.maxLimit=t.xmax),e.grid.vertical=(0,l.getGridSettingsVertical)(t),e.grid.verticalZero=(0,c.getZeroBaselineVertical)(t),(0,u.assignAxisTickInterval)(e,t),(0,u.assignAxisTicks)(e,t),(0,h.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"x",path:""},{id:"x1",path:"axis.x"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,h.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"x",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),e};let f=Object.freeze(v)},7282:(t,e,a)=>{a.r(e),a.d(e,{assignAxisInverse:()=>h,assignAxisLimits:()=>l,assignAxisTickInterval:()=>u,assignAxisTicks:()=>c,assignAxisTitles:()=>o,assignCategoryLabelLayout:()=>v});var i=a(498);var r=a.n(i);var n=["x","y","y2"];var s=["min","max"];function o(t,e,a){var i=!0,r=!1,s=void 0;try{for(var o=a[Symbol.iterator](),l;!(i=(l=o.next()).done);i=!0){var c=l.value;t.axis[n.indexOf(c)].title=e["".concat(c,"label")]||""}}catch(t){r=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}}function l(t,e,a){var i=!0,r=!1,o=void 0;try{for(var l=a[Symbol.iterator](),c;!(i=(c=l.next()).done);i=!0){var u=c.value;var h=!0,v=!1,f=void 0;try{for(var d=s[Symbol.iterator](),p;!(h=(p=d.next()).done);h=!0){var m=p.value;var g=e["".concat(u).concat(m)];"number"==typeof g&&(t.axis[n.indexOf(u)]["".concat(m,"Limit")]=g)}}catch(t){v=!0,f=t}finally{try{h||null==d.return||d.return()}finally{if(v)throw f}}}}catch(t){r=!0,o=t}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}}function c(t,e){t.axis.forEach(function(t,a){t.ticks=r().get(e,"labels.axis.".concat(n[a],".tick.enabled"),!0)})}function u(t,e){t.axis.forEach(function(t,a){var i=r().get(e,"axis.".concat(n[a],".ticks"));void 0!==i&&(t.tickInterval=i)})}function h(t,e,a){var i=n.indexOf(a);r().set(t,"axis[".concat(i,"].invert"),r().get(e,"axis.".concat(a,".invert"),!1))}function v(t,e){"tilted"===e.categoryLayout&&r().set(t,"categories.layout","tilted")}},7284:(t,e,a)=>{a.r(e),a.d(e,{assignNumberFormatLabels:()=>c,assignNumberFormatValues:()=>l});var i=a(498);var r=a.n(i);var n=a(1991);var s={label:{libraryTargetPath:"labels.format",customAffixPath:"labels.graph.item.format.affix"},x:{libraryTargetPath:"tooltip.format.x",customAffixPath:"labels.tooltip.format.x.affix"},y:{libraryTargetPath:"tooltip.format.y",customAffixPath:"labels.tooltip.format.y.affix"},y2:{libraryTargetPath:"tooltip.format.y2",customAffixPath:"labels.tooltip.format.y2.affix"}};function o(t,e,a){var i=e.decimalSeparator,s=e.groupingSymbol;s&&r().set(t,"grouping","none"===s?"":s);var o=!1===i;r().set(t,"decimal",o?".,":i);var l=a?new n.default("firstNumber",a):new n.default(o?"legacy":"firstNumber",i);r().set(t,"numberParser",l)}function l(t){var e=t.sheetOptions,a=t.custom,i=t.axis,n=t.inputDecimalSeparator;var s={x:0,y:1,y2:2,x1:0,y1:1};i.forEach(function(t){var i=t.id,l=t.path;var c=l?r().get(a,l,{}):a;var h=e.axis[s[i]];r().has(h,"format")||r().set(h,"format",{});var v=h.format;if(u(v,c),!["x1","y1"].includes(i)){o(v,c,n);var f=["useSIPrefixes"];r().get(a,"axis.".concat(i,".affix"),!0)&&f.push("prefix","suffix"),f.forEach(function(t){var e=r().get(c,t);void 0!==e&&r().set(v,t,e)})}})}function c(t){var e=t.sheetOptions,a=t.custom,i=t.affixes,n=t.inputDecimalSeparator;(void 0===i?[]:i).forEach(function(t){var i=t.id,l=t.path,c=t.ignoreCheck,h=t.defaultValue;var v=s[i];var f=v.libraryTargetPath,d=v.customAffixPath;var p=l?r().get(a,l,{}):a;var m=r().pick(p,"prefix","suffix");u(m,p),o(m,p,n),c||r().get(a,d,h)||(r().unset(m,"prefix"),r().unset(m,"suffix")),r().set(e,f,m)})}function u(t,e){var a=e.decimalPlaces,i=e.decimalPlacesValue;a&&void 0!==i&&r().set(t,"decimalPlaces",i)}},7249:(t,e,a)=>{function i(t,e){var a=0;if(void 0===e){var i=!0,r=!1,n=void 0;try{for(var s=t[Symbol.iterator](),o;!(i=(o=s.next()).done);i=!0){var l=o.value;(l=+l)&&(a+=l)}}catch(t){r=!0,n=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw n}}}else{var c=-1;var u=!0,h=!1,v=void 0;try{for(var f=t[Symbol.iterator](),d;!(u=(d=f.next()).done);u=!0){var p=d.value;(p=+e(p,++c,t))&&(a+=p)}}catch(t){h=!0,v=t}finally{try{u||null==f.return||f.return()}finally{if(h)throw v}}}return a}a.r(e),a.d(e,{default:()=>i})}}]);