(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[40],{7348:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(498);var i=a.n(s);var r=a(7345);var n=a(7276);var o=a(2300);var u=a(7281);var l=a(7282);var p=a(7284);var h=a(7285);var m=Object.assign({},n.default);m.instanceClass=r.Combo,m.setupChartOptions=function(){n.default.setupChartOptions.call(this);var e=this.custom;this.chartOptions.series.dataPoints=!1!==e.showPoints},m.setupChartSheetOptionsItem=function(e){var t=this.sheetOptionsItemDefaults(e);var a=t.axis[1];var s=t.axis[2]={};var r=o.DEFAULTS.types;var n=o.DEFAULTS.axis;var m=i().get(e,"series",{});var v=i().merge([],r,m.types||[]);var c=i().merge([],n,m.axis||[]);t.series=[],v.forEach(function(a,s){var i=t.series[s]={type:"column"===a?"column-g":"line",axisIndex:c[s]};!0===e.smooth&&(i.interpolation="monotone")}),t.series[1]||(t.series[1]={type:r[1],axisIndex:n[1]},!0!==e.smooth||(t.series[1].interpolation="monotone"));var y=!1;var d;c.forEach(function(e){void 0!==d&&e!==d&&(y=!0),d=e}),y&&(a.ticks=s.ticks=!0),a.title=e.ylabel?e.ylabel:"",s.title=e.y2label?e.y2label:"";var x=!0===e.showInLineValues;var f;return a.showValues=x,s.showValues=x,"number"==typeof e.ymin&&(a.minLimit=e.ymin),"number"==typeof e.ymax&&(a.maxLimit=e.ymax),"number"==typeof e.y2min&&(s.minLimit=e.y2min),"number"==typeof e.y2max&&(s.maxLimit=e.y2max),t.style={pointStrokeColor:null!==(f=null==e?void 0:e.pointStrokeColor)&&void 0!==f?f:(0,h.getPointStrokeColorDefaults)(null===this||void 0===this?void 0:this.charts)},(0,u.default)(t,e),(0,l.assignAxisTickInterval)(t,e),(0,p.assignNumberFormatValues)({sheetOptions:t,custom:e,axis:[{id:"y2",path:"axis.y2"},{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,p.assignNumberFormatLabels)({sheetOptions:t,custom:e,affixes:[{id:"y2",path:"axis.y2"},{id:"y",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,l.assignAxisInverse)(t,e,"y"),(0,l.assignAxisInverse)(t,e,"y2"),(0,l.assignAxisTicks)(t,e),(0,l.assignCategoryLabelLayout)(t,e),t};let v=Object.freeze(m)},2300:(e,t,a)=>{a.r(t),a.d(t,{DEFAULTS:()=>n,getPath:()=>o,getSeriesProp:()=>l,getSeriesProps:()=>p});var s=a(498);var i=a.n(s);var r=a(1975);var n={types:["column","line"],axis:[1,2]};function o(e,t){return"series.".concat(e,"[").concat(t,"]")}function u(e,t){var a=n[e];return a[t]||a[0]}function l(e){var t=e.chart,a=e.sheetIndex,s=e.seriesIndex,n=e.prop;var l=(0,r.default)({chart:t,sheetIndex:a}).getCustomStrict();var p=o(n,s);return i().get(l,p,u(n,s))}function p(e){var t=e.chart,a=e.sheetIndex,s=e.prop,n=e.seriesCount;var l=(0,r.default)({chart:t,sheetIndex:a}).getCustomStrict();var p=[];for(var h=0;h<n;h++){var m=o(s,h);p.push(i().get(l,m,u(s,h)))}return p}}}]);