(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[62],{7367:(a,t,e)=>{e.r(t),e.d(t,{default:()=>u});var i=e(498);var s=e.n(i);var r=e(7365);var n=e(7276);var m=e(7282);var l=e(7283);var o=e(7284);var p=Object.assign({},n.default);p.instanceClass=r.Scatter,p.setupChartSheetOptionsItem=function(a){var t=this.sheetOptionsItemDefaults(a);var e=t.axis[0];var i=t.axis[1];e.title=a.xlabel?a.xlabel:"",i.title=a.ylabel?a.ylabel:"","number"==typeof a.xmin&&(e.minLimit=a.xmin),"number"==typeof a.xmax&&(e.maxLimit=a.xmax),"number"==typeof a.ymin&&(i.minLimit=a.ymin),"number"==typeof a.ymax&&(i.maxLimit=a.ymax),s().has(a,"dataPointRadius")&&s().set(t,"graphOptions.dataPointRadius",a.dataPointRadius);var r=s().get(a,"dataInputFormat.type","number");if(t.categories.xAxisTimeBased="date"===r,t.categories.xAxisTimeBased){var n=s().get(a,"dataInputFormat.date");var p=s().get(a,"labels.axis.x.tick.timeFormat",n);s().set(t,"series[0].parseFormat.x",n),s().set(e,"timeFormat",p)}return(0,l.assignTrendline)(t,a,this.themeStyleColor),(0,m.assignAxisTickInterval)(t,a),(0,m.assignAxisTicks)(t,a),(0,o.assignNumberFormatValues)({sheetOptions:t,custom:a,axis:[{id:"x",path:""},{id:"x1",path:"axis.x"},{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,o.assignNumberFormatLabels)({sheetOptions:t,custom:a,affixes:[{id:"x",path:""},{id:"y",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,m.assignCategoryLabelLayout)(t,a),t};let u=Object.freeze(p)},7364:(a,t,e)=>{e.r(t),e.d(t,{default:()=>n});var i=e(7365);var s=e(7367);var r=Object.assign({},s.default);r.instanceClass=i.Scatter,r.initVariables=function(){if(s.default.initVariables.apply(this,arguments),this.data){var a=[];this.data.forEach(function(t){if(a.push([]),this.transposeImport())a[a.length-1]=t.slice(0,3);else{var e=a[a.length-1];t.forEach(function(a){e.push(a.slice(0,3))})}},this),this.data=a}};let n=Object.freeze(r)}}]);