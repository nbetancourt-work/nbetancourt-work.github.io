(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-22"],{7255:(t,r,e)=>{e.r(r),e.d(r,{falp:()=>l});var a=e(7256);var n=e.n(a);function o(t){return(t-t%4)/4}function i(t){var r=4*t;return Array.from({length:4},function(t,e){return r+e})}function l(t){var r=t.data,e=t.style,a=t.metrics,l=t.xScale,u=t.yScale,v=t.dataPointRadius,c=t.valueProperty,s=void 0===c?"yLabel":c,d=t.hideOverlapping,f=void 0===d||d;var h=[];var x=[];var y=l.bandwidth?l.bandwidth()/2:0;var g=Math.max.apply(null,u.range());var p=Math.max.apply(null,l.range());var b=[];var m=new(n())({width:g,height:p});var L;r.forEach(function(t,r){if(null===t.y||null===t.x){x.push(r);return}var e=a.collection[r];for(var n=0;n<4;n++){var o={x:l(t.x)+y,y:u(t.y),width:e.width,height:e.height,index:r,labelIndex:4*r+n,text:t.yLabel};!function(t,r,e,a){switch(t){case 0:r.x-=e.width/2,r.y-=Math.max(e.height/2,a)+e.height;return;case 1:r.x-=e.width/2,r.y+=Math.max(e.height/2,a);return;case 2:r.x-=e.width+a,r.y-=e.height/2;return;case 3:r.x+=a,r.y-=e.height/2}}(n,o,e,v),b[o.labelIndex]=o,m.push(o)}});var w=(L=Array(4*r.length).fill(0)).map(function(t,r){return L.map(function(t,e){return r===e?0:o(r)===o(e)?1:0})});m.each(function(t){var r=m.colliding(t);var e=!0,a=!1,n=void 0;try{for(var o=r[Symbol.iterator](),i;!(e=(i=o.next()).done);e=!0){var l=i.value;w[t.labelIndex][l.labelIndex]=1}}catch(t){a=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(a)throw n}}});var k=function(t){var r=function(t){var r=Number.MAX_SAFE_INTEGER;var e=[];for(var a=0,n=t.length;a<n;a++){var o=t[a].conflicts.length;o<=r&&(o===r?e.push(a):(e=[a],r=o))}return e};var e=function(t,r){var e=Number.MAX_SAFE_INTEGER;var a=-1;var n=Number.MAX_SAFE_INTEGER;var o=!0,i=!1,l=void 0;try{for(var u=t[Symbol.iterator](),v;!(o=(v=u.next()).done);o=!0)!function(){var t=v.value;var o=r[t];var i=r.filter(function(t){return t.point===o.point}).length;(i<e||e===i&&n>=o.point)&&(n=o.point,e=i,a=t)}()}catch(t){i=!0,l=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return a};var a=[];for(var n=t.length,l=0;l<n;l++){var u=o(l);var v={id:l,conflicts:[],point:u};for(var c=0;c<n;c++)l!==c&&1===t[l][c]&&v.conflicts.push(c);a.push(v)}var s=[];for(;a.length>0;)!function(){var t=r(a);var n=t[0];void 0!==t[1]&&(n=e(t,a));var o=[];var i=a[n];s.push(i.id),o.push(i.id),a.splice(n,1);for(var l=0,u=i.conflicts.length;l<u;l++)!function(t,r){var e=i.conflicts[t];var n=a.findIndex(function(t){return t.id===e});-1!==n&&(o.push(a[n].id),a.splice(n,1))}(l,0);var v=!0,c=!1,d=void 0;try{for(var f=a[Symbol.iterator](),h;!(v=(h=f.next()).done);v=!0){var x=h.value;x.conflicts=x.conflicts.filter(function(t){return!o.includes(t)})}}catch(t){c=!0,d=t}finally{try{v||null==f.return||f.return()}finally{if(c)throw d}}}();var d=t.length/4;if(s.length!==d){var f=s.map(function(t){return o(t)});for(var h=0;h<d;h++)!function(r){if(!f.includes(r)){var e=Number.MAX_SAFE_INTEGER;var a=-1;var n=i(r);var o=!0,l=!1,u=void 0;try{for(var v=n[Symbol.iterator](),c;!(o=(c=v.next()).done);o=!0)!function(){var r=c.value;var n=s.filter(function(e){return 1===t[r][e]}).length;e>n&&(e=n,a=r)}()}catch(t){l=!0,u=t}finally{try{o||null==v.return||v.return()}finally{if(l)throw u}}s.push(a)}}(h)}s.sort(function(t,r){return t-r});for(var x=0;x<5;x++){var y=function(r){var e=i(r);var a=Number.MAX_SAFE_INTEGER;var n=-1;var o=!0,l=!1,u=void 0;try{for(var v=e[Symbol.iterator](),c;!(o=(c=v.next()).done);o=!0){var d=function(){var e=c.value;var o=s.filter(function(a,n){return n!==r&&1===t[e][a]}).length;if(a>o&&(a=o,n=e),0===a)return"break"}();if("break"===d)break}}catch(t){l=!0,u=t}finally{try{o||null==v.return||v.return()}finally{if(l)throw u}}-1===n||s.includes(n)||(s[r]=n)};for(var g=0;g<d;g++)y(g)}return s}(w);if(f){m=new(n())({width:g,height:p});var I=!0,P=!1,E=void 0;try{for(var M=k[Symbol.iterator](),A;!(I=(A=M.next()).done);I=!0){var C=b[A.value];C&&m.push(C)}}catch(t){P=!0,E=t}finally{try{I||null==M.return||M.return()}finally{if(P)throw E}}}return r.forEach(function(t,r){var n;if(!x.includes(r)){var o=a.collection[r];var i=b[k[r]];var l={fillColor:e.color,textX:i.x,textY:i.y+o.baseLineOffset,textAnchor:"start",text:t[s],yPct:t.yPct,index:r,seriesIdx:t.seriesIdx,yLabel:t.yLabel,xLabel:t.xLabel,groupLabel:t.groupLabel,categoryLabel:t.categoryLabel,color:(null==t?void 0:null===(n=t.colors)||void 0===n?void 0:n[0])||(null==t?void 0:t.color)};if(f&&m.colliding(i).length>0){m.remove(i);return}h.push(l)}}),h}},7257:(t,r,e)=>{e.r(r),e.d(r,{HideMostColliding:()=>o});var a=e(7256);var n=e.n(a);function o(t){var r=t.data,e=t.metrics,a=t.style,o=t.xScale,i=t.yScale,l=t.dataPointRadius,u=t.valueProperty,v=void 0===u?"yLabel":u,c=t.hideOverlapping;var s=[];var d=[];var f=[];var h=o.bandwidth?o.bandwidth()/2:0;if(void 0===c||c){var x=Math.max.apply(null,i.range());var y=Math.max.apply(null,o.range());var g=new(n())({width:y,height:x});r.forEach(function(t,r){if(null===t.y||null===t.x){d.push(r);return}var a=e.collection[r];var n={x:o(t.x)-a.width/2+h,y:i(t.y)-l-a.baseLineOffset,width:a.width,height:a.height,index:r};g.push(n)}),g.each(function(t){var r=g.colliding(t).length;r&&f.push({collisions:r,item:t})}),f.sort(function(t,r){return r.collisions-t.collisions}),f.forEach(function(t){var r=t.item;g.colliding(r).length&&(g.remove(r),d.push(r.index))})}else r.forEach(function(t,r){(null===t.y||null===t.x)&&d.push(r)});return r.forEach(function(t,r){var e;if(!d.includes(r)){var n={fillColor:a.color,textX:o(t.x)+h,textY:i(t.y)-l,textAnchor:"middle",text:t[v],yPct:t.yPct,index:r,seriesIdx:t.seriesIdx,yLabel:t.yLabel,xLabel:t.xLabel,groupLabel:t.groupLabel,categoryLabel:t.categoryLabel,color:(null==t?void 0:null===(e=t.colors)||void 0===e?void 0:e[0])||(null==t?void 0:t.color)};s.push(n)}}),s}},7254:(t,r,e)=>{e.r(r),e.d(r,{ColumnHorizontal:()=>I,ColumnHorizontalMiddle:()=>w,ColumnVertical:()=>k,addOutline:()=>m,addOutlineAlways:()=>L,createAddMouseEvents:()=>E,createColumnLabelRenderer:()=>M,createLabel:()=>p,createLineLabelRenderer:()=>A,getColumnLayout:()=>P,labelInfo:()=>b,setupFillColor:()=>g});var a=e(4019);var n=e(498);var o=e.n(n);var i=e(1997);var l=e(1113);var u=e(1112);var v=e(4018);var c=e(1998);var s=e(7255);var d=e(7257);function f(t,r,e,a,n,o,i){try{var l=t[o](i);var u=l.value}catch(t){e(t);return}l.done?r(u):Promise.resolve(u).then(a,n)}function h(t){return function(){var r=this,e=arguments;return new Promise(function(a,n){var o=t.apply(r,e);function i(t){f(o,a,n,i,l,"next",t)}function l(t){f(o,a,n,i,l,"throw",t)}i(void 0)})}}function x(t,r){var e,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw TypeError("Generator is already executing.");for(;i;)try{if(e=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(t,i)}catch(t){o=[6,t],a=0}finally{e=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var y={falp:s.falp,"hide-most-colliding":d.HideMostColliding};function g(t){var r=o().get(t,"color.method","manual");var e=o().get(t,"color.".concat(r));var a;switch(r){case"manualWithControls":a=o().get(e,"fill.enabled",!1)?o().get(e,"fill.value","#000000"):function(t){return t.color};break;case"manual":a=o().get(e,"fill","#000000");break;default:var n,l,u;n=o().get(e,"dark","#000000"),l=o().get(e,"light","#ffffff"),u=o().get(e,"background","#ffffff"),a=function(t){return i.Colors.getContrastYIQ(t.inside?(0,c.rgb)(t.color).hex():(0,c.rgb)(u).hex(),(0,c.rgb)(n).hex(),(0,c.rgb)(l).hex())}}return a}function p(t,r,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t,r){return r};var n=g(e);var i=t.selectAll("text").data(r,a);return i.transition().duration(0),i.exit().remove(),(i=i.merge(i.enter().append("text").style("opacity",l.eps))).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("text-anchor",function(t){return t.textAnchor}).attr("fill",n).style("cursor","default").styles(o().omit(e,["color"])),i}function b(t){var r=o().get(t,"color.method","contrast");var e=o().get(t,"color.manual.stroke");var a=o().get(t,"color.manual.fill","#000000");if("manualWithControls"===r){var n,i,l,u,v,c,s,d,f,h;return{manual:null==t?void 0:null===(l=t.color)||void 0===l?void 0:null===(i=l.manualWithControls)||void 0===i?void 0:null===(n=i.stroke)||void 0===n?void 0:n.enabled,stroke:null==t?void 0:null===(c=t.color)||void 0===c?void 0:null===(v=c.manualWithControls)||void 0===v?void 0:null===(u=v.stroke)||void 0===u?void 0:u.value,fill:null===(h=o().style)||void 0===h?void 0:null===(f=h.color)||void 0===f?void 0:null===(d=f.manualWithControls)||void 0===d?void 0:null===(s=d.fill)||void 0===s?void 0:s.value}}return{manual:"manual"===r&&e&&e!==a,stroke:e,fill:a}}function m(t,r,e){var a=b(r);if(t.selectAll("tspan").remove(),a.manual){var n=a.stroke,o=a.fill;t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",n).attr("fill",n).attr("stroke-width","3px").attr("stroke-linejoin","round").text(e),t.append("tspan").attr("class","text-outline-fill").attr("fill",o).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).text(e)}else t.text(e)}function L(t,r){var e,a,n;var o;t.selectAll("tspan").remove();var l=null!==(o=null==r?void 0:null===(e=r.color)||void 0===e?void 0:e.method)&&void 0!==o?o:"manual";var u;var v=null!==(u=null==r?void 0:null===(a=r.color)||void 0===a?void 0:a.contrast)&&void 0!==u?u:{};var s;var d=null!==(s=null==r?void 0:null===(n=r.color)||void 0===n?void 0:n.manual)&&void 0!==s?s:{};var f;var h=null!==(f=null==v?void 0:v.dark)&&void 0!==f?f:"#000000";var x;var y=null!==(x=null==v?void 0:v.light)&&void 0!==x?x:"#ffffff";var g;var p="contrast"===l?function(t){return t.color}:null!==(g=d.stroke)&&void 0!==g?g:"#000000";var b;var m="contrast"===l?function(t){return i.Colors.getContrastYIQ((0,c.rgb)(t.color).hex(),(0,c.rgb)(h).hex(),(0,c.rgb)(y).hex())}:null!==(b=d.fill)&&void 0!==b?b:"#ffffff";"contrast"===l||"manual"===l&&p!==m?(t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",p).attr("fill",p).attr("stroke-width","3px").attr("stroke-linejoin","round").text(function(t){return t.text}),t.append("tspan").attr("class","text-outline-fill").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("fill",m).text(function(t){return t.text})):t.text(function(t){return t.text})}function w(t){var r=t.data,e=t.metrics,a=t.style;var n=[];var o=[];var i=function(t,r){var a=e.collection[r];var n=(0,u.extendBBox)({x:t.xPos,y:t.yPos-t.height/2+.25*a.height-a.baseLineOffset,width:a.width,height:a.height});return n.xLabel=t.xLabel,n};var l=r.length;for(var v=0;v<l;v++){var c=r[v];if(null===c.x&&o.push(v),!o.includes(v)){var s=i(c,v);for(var d=0;d<l;d++){var f=r[d];if(!o.includes(d)){var h=i(f,d);v===d||s.x>h.x2||s.x2<h.x||s.y>h.y2||s.y2<h.y||o.push(d)}}}}return r.forEach(function(t,r){if(!o.includes(r)){var i={};var l=e.collection[r].height;i.inside=!0,i.fillColor=a.color,i.textX=t.xPos+t.width/2,i.textY=Math.round(t.yPos-t.height/2+.25*l),i.transform=null,i.textAnchor="middle",i.text=t.yLabel,i.index=r,i.seriesIdx=t.seriesIdx,i.yLabel=t.yLabel,i.xLabel=t.xLabel,i.groupLabel=t.groupLabel,i.categoryLabel=t.categoryLabel,i.color=t.color,n.push(i)}}),n}function k(t){var r=t.data,e=t.metrics,n=t.style,o=t.scale,i=t.valuesOutside;var l=[];var u=(0,a.default)(o.range());var v=.25*e.height;return r.forEach(function(t,r){if(null!==t.x){var a={};var o=t.yPos;var c;var s=o;var d="start";var f=o;var h=u-o;var x=1;var y=!0;var g=e.collection[r].width+v;var p=Math.abs(t.height);var b=!i&&p>g;t.y<0&&(d="end",f=h,h=o,x=-1),b?s-=x*v:f>=p+g?s-=x*(p+v):h>=g?(s+=x*v,d="end"===d?"start":"end"):y=!1,y&&(a.inside=b,a.fillColor=n.color,a.textX=c=t.xPos+t.width/2+v,a.textY=s,a.transform="rotate(-90,".concat(c,",").concat(s,")"),a.textAnchor=d,a.text=t.yLabel,a.index=r,a.seriesIdx=t.seriesIdx,a.yLabel=t.yLabel,a.xLabel=t.xLabel,a.groupLabel=t.groupLabel,a.categoryLabel=t.categoryLabel,a.color=t.color,l.push(a))}}),l}function I(t){var r=t.data,e=t.style,n=t.scale,o=t.metrics,i=t.valuesOutside;var l=(0,a.default)(n.range());var u=[];return r.forEach(function(t,r){var a=t.y,n=t.xPos,v=t.yPos,c=t.width,s=t.height,d=t.seriesIdx,f=t.xLabel,h=t.yLabel,x=t.groupLabel,y=t.categoryLabel,g=t.color;var p=v;var b=v;var m=l-v;var L=1;var w=!0;var k=o.collection[r];var I=.25*k.height;var P=k.height;var E=P+I;var M=Math.abs(s);var A=!i&&M>E;a<0&&(b=m,m=v,L=-1),A?p-=L*(a<0?P-1:I):b>=M+E?p-=L*(M+(a<0?P-1:I)):m>=E?p+=L*(a<0?I+1:P):w=!1,w&&u.push({inside:A,fillColor:e.color,textX:n+c/2,textY:p,transform:null,textAnchor:"middle",text:h,index:r,seriesIdx:d,yLabel:h,xLabel:f,groupLabel:x,categoryLabel:y,color:g})}),u}function P(t){var r=t.metrics,e=t.data,a=t.isStacked,n=t.padding;var i=o().get(e,"[0].width",0);var l=i>=r.height;var u=i>=r.width;if(!a)return{vertical:l,horizontal:u};var v={horizontal:0,vertical:0};var c=r.height;var s=c-r.baseLineOffset;null!=n||(n=.25*c);var d=n-s;r.collection.reduce(function(t,r,a){var o=e[a];var i=Math.abs(o.width);var l=Math.abs(o.height);var u=r.height+d;var v=r.width+n;return t.horizontal+=+(r.width<=i&&u<=l),t.vertical+=+(v<=l&&r.height<=i),t},v);var f=0===v.horizontal&&v.horizontal===v.vertical;return u=v.horizontal>=v.vertical,{horizontal:u=!f&&u,vertical:!f&&!u}}function E(t){var r=t.dispatch,e=t.legend,a=t.opacity,n=void 0===a?null:a,o=t.tooltip,i=t.chartId,l=t.tooltipText,c=t.tooltipValue,s=t.colors;return function(t){(0,v.addMouseEvents)(t,r,o,l,c),t.on("mousemove",function(t,r){var a=(0,u.getMousePosition)(t);var v=r.color||(0,u.getColor)(r.seriesIdx,s);var d=l(r);var f=c(r);o().setText(d).setValue(f).setPosition(a,v),null!==n&&e&&e.sendListeners(r.seriesIdx,i,"highlightStart")}).on("mouseout.labels",function(t,r){null!==n&&e&&e.sendListeners(r.seriesIdx,i,"highlightEnd")})}}function M(t){var r=t.textStyle,e=t.showValues,a=t.scale,n=t.isWaterfall,o=t.isStacked,i=t.valuesOutside,l=t.textFormat,v=t.transitionTiming,c=t.addMouseEvents,s=t.listenToLegendText,d=t.opacity,f=t.hideOverlapping,y=void 0===f||f;var g=0;var b;return b=h(function(t,f){var h,b,L,E,M,A,C;return x(this,function(x){if(t.selectAll("text").transition().duration(0).remove(),!e||(h=f.map(function(t){return l({text:t.yLabel})}),E=(L=P({metrics:b=(0,u.getAllTextDimensions)(h,r),data:f,isStacked:o})).horizontal||L.vertical||!y,M=[],!E))return[2];if(A={data:f,metrics:b,style:r,scale:a,hideOverlapping:y},n)M=w(A);else if(o){var S,O,T,X,z,Y;var R;var F;var N;var _;A.horizontal=L.horizontal,S=A.data,O=A.metrics,T=A.style,X=A.horizontal,Y=void 0===(z=A.hideOverlapping)||z,R=[],N=(F=O.height)-O.baseLineOffset,_=.25*F,S.forEach(function(t,r){if(null!==t.x){var e={};var a=O.collection[r];var n=Math.abs(t.width);var o=Math.abs(t.height);var i=a[X?"width":"height"];var l=a[X?"height":"width"]+(X?_-N:_);var u=t.y<0;var v=u?-1:1;var c=t.xPos+t.width/2+_;var s=t.yPos-v*_;(i<=n&&l<=o||!Y)&&(e.y=t.y,e.inside=!0,e.fillColor=T.color,e.textX=c,e.textY=s,e.textAnchor=u?"end":"start",e.transform="rotate(-90,".concat(c,",").concat(s,")"),X&&(e.textAnchor="middle",e.transform=null,e.textX=t.xPos+t.width/2,e.textY=t.yPos-v*(u?O.baseLineOffset+1:_)),e.yLabel=t.yLabel,e.xLabel=t.xLabel,e.groupLabel=t.groupLabel,e.categoryLabel=t.categoryLabel,e.text=t.yLabel,e.seriesIdx=t.seriesIdx,e.color=t.color,R.push(e))}}),M=R}else L.horizontal?(A.valuesOutside=i,M=I(A)):(A.valuesOutside=i,M=k(A));return M.length?((C=p(t,M,r)).attr("transform",function(t){return t.transform}),m(C,r,l),[2,new Promise(function(t){C.transition().duration(v.duration.text).style("opacity",d||1).on("start",function(){return g++}).on("end",function(){--g||(c(C.filter(function(t){return t.inside})),s(C),t())})})]):[2]})}),function(t,r){return b.apply(this,arguments)}}function A(t){var r=t.textStyle,e=t.showValues,a=t.textFormat,n=t.transitionTiming,o=t.listenToLegendText,i=t.addMouseEvents,l=void 0===i?function(){}:i,v=t.opacity,c=t.xScale,s=t.yScale,f=t.dataPointRadius,g=t.valueProperty,b=void 0===g?"yLabel":g,L=t.strategy,w=void 0===L?"hide-most-colliding":L,k=t.showDataPoints,I=void 0===k||k,P=t.hideOverlapping,E=void 0===P||P;var M=0;var A;return A=h(function(t,i){var h,g,L,k;return x(this,function(x){return(t.selectAll("text").transition().duration(0).remove(),e&&(h=i.map(function(t){return a({text:t[b]})}),g=(0,u.getAllTextDimensions)(h,r),L=[],(L=(y[w]||d.HideMostColliding)({data:i,metrics:g,style:r,xScale:c,yScale:s,dataPointRadius:I?f:0,valueProperty:b,hideOverlapping:E})).length))?(m(k=p(t,L,r),r,a),[2,new Promise(function(t){k.transition().duration(n.duration.text).style("opacity",v||1).on("start",function(){return M++}).on("end",function(){--M||(o(k),l(k),t())})})]):[2]})}),function(t,r){return A.apply(this,arguments)}}},7242:(t,r,e)=>{function a(t){return"number"==typeof t[1]&&"number"==typeof t[0]?Math.abs(t[1]-t[0]):1/0}function n(t,r){var e=t[0];var a=t[1];var n=0;if(void 0===e||void 0===a)return n;var o=Math.abs(a-e);return o>=r?n:(n=r/o,0==r%o?n-1:Math.floor(n))}function o(t,r,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;var n=t.length;var o=[];var i=[];var l=[];if(!n)return{range:o,domain:i,domainIndex:l};var u=e+1;var v=Math.ceil(n/u);var c=-1===a?n-1-(v-1)*u:0;for(var s=0,d=c;s<v;s++,d+=u)o.push(t[d]),i.push(r[d]),l.push(d);return{range:o,domain:i,domainIndex:l}}function i(t,r,e){var a=t.bandwidth()/2;var i=t.domain().map(function(r){return t(r)});var l=i.length-1;var u=0;for(var v=0,c=i.length;v<c;v++){var s;if(i[s=v]+a-e.collection[s].height/2>=0){u=v;break}}var d=n(i=i.slice(u),r.height);return o(i,i,d).domainIndex.map(function(t){return u+t}).filter(function(t){return t<=l})}e.r(r),e.d(r,{filterOverlappingCategories:()=>i,filterToFit:()=>o,getRangeStep:()=>a,stepFromPositionsByWidth:()=>n})}}]);