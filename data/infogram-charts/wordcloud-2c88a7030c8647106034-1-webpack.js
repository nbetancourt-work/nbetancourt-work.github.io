(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[72],{7399:(t,e,r)=>{r.r(e),r.d(e,{Wordcloud:()=>m});var n=r(498);var a=r.n(n);var o=r(3975);var i=r(3920);var l=r(4025);var u=r(1112);var c=r(7259);var s=r(4013);var f=r(1111);var h=r(4022);var v=r(3974);var d=r(7400);function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(r||t):a.value}})(t,e,r||t)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(0,v.putGraph)("wordcloud",d.Wordcloud);var m=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(n,t);var r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=g(n),r;if(e){var a=g(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);var o;return(o=r)&&("object"==(o&&"undefined"!=typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)||"function"==typeof o)?o:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function n(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),r.apply(this,arguments)}var i,v;return v=[{key:"getClassName",value:function(){return"Wordcloud"}}],i=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.root,r=this.options;var n=new c.Renderer({instance:this});var a=this.getSheetData();var i=(0,l.formatHelper)(a);var u=this.runtime={width:r.width,height:r.height,sheet:a,formatter:i};if((0,s.Controls)(this,{width:u.width}),(0,h.DownloadButton)(this,r.style.legend),!this.sheetsNotFound()){var f=this.prepareSheetData(a);var v=this.createAnimationCounter(2);this.containerSetup(),n.add(function(){e.attr("width",u.width).attr("height",u.height).datum(t).transition().ease(o[r.animation.ease]).duration(r.animation.duration).on("start",function(){t.events.call("startAnimation")}).on("end",function(){v()})}),n.addGraph([{graphs:[f],bounds:{width:u.width,height:u.height},offset:{left:0,top:0},transitionDuration:r.animation.duration,animationEnd:v}]),n.start()}}},{key:"graphInstanceSetup",value:function(t,e,r,n,a){var o=e.data.length;var i=this.runtime.formatter;t.data(e.data).groupId(a).bounds(n.bounds).offset(n.offset).textDirection(e.textDirection).transitionDelay(function(t,e){return e/o*n.transitionDuration}).labelOptions(e.labels).transitionDuration(n.transitionDuration).tooltip((0,f.createStyledTooltip)(this)).tooltipText(function(t){return t.categoryLabel}).tooltipValue(function(t){return i.tooltip.x.format(t.valueLabel)}),t.dispatch().on("animationEnd",n.animationEnd)}},{key:"defaults",value:function(){return a().merge({},p(g(n.prototype),"defaults",this).call(this),{animation:{duration:700}})}},{key:"emptySheetData",value:function(){return a().merge({},p(g(n.prototype),"emptySheetData",this).call(this),{labels:{fontFamily:"Arial"},axis:[{}],series:[{title:"",type:"wordcloud",showValues:!1,sort:"none"}]})}},{key:"prepareSheetData",value:function(t){var e=t.series[0];var r=[];var n=t.categories.colors;return e.data.forEach(function(a,o){var i={categoryLabel:(0,u.replaceBlank)(t.categories.data[o],""),valueLabel:(0,u.replaceBlank)(e.rawData[o]),size:(0,u.replaceBlank)(a,null),color:(0,u.getColor)(o,n),link:e.links?e.links[o]:null};null!==i.size&&(i.sizeAbs=Math.abs(i.size),r.push(i))}),{type:e.type,data:r,textDirection:t.categories.textDirection,labels:t.labels}}},{key:"applySheetOptions",value:function(t){t&&this.options.sheets.forEach(function(e,r){var n=t[r+1]||t[0];n.labels&&a().merge(e.labels,n.labels),n.axis&&a().merge(e.axis,n.axis),n.tooltip&&(e.tooltip=e.tooltip||{},a().merge(e.tooltip,n.tooltip)),n.categories&&a().merge(e.categories,n.categories)})}}],y(n.prototype,i),v&&y(n,v),n}(i.Chart)},7401:(t,e,r)=>{r.r(e),r.d(e,{Cloud:()=>o});var n=r(420);var a=Math.PI/180;function o(){var t=function(t){t.width=t.height=1;var e=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/e,t.height=2048/e;var r=t.getContext("2d");return r.fillStyle=r.strokeStyle="red",r.textAlign="center",{context:r,ratio:e}};var e=function(t,e,n){var a=e.x;var o=e.y;var i=Math.sqrt(r[0]*r[0]+r[1]*r[1]);var l=D(r);var u=-1;var c;var s;var f;for(;(c=l(u+=1))&&!(Math.min(Math.abs(s=~~c[0]),Math.abs(f=~~c[1]))>=i);)if(e.x=a+s,e.y=o+f,(!n||!function(t,e,r){r>>=5;var n=t.sprite;var a=t.width>>5;var o=t.x-(a<<4);var i=127&o;var l=32-i;var u=t.y1-t.y0;var c=(t.y+t.y0)*r+(o>>5);var s;for(var f=0;f<u;f++){s=0;for(var h=0;h<=a;h++)if((s<<l|(h<a?(s=n[f*a+h])>>>i:0))&e[c+h])return!0;c+=r}return!1}(e,t,r[0]))&&(!n||e.x+e.x1>n[0].x&&e.x+e.x0<n[1].x&&e.y+e.y1>n[0].y&&e.y+e.y0<n[1].y)){var h=e.sprite;var v=e.width>>5;var d=r[0]>>5;var y=e.x-(v<<4);var p=127&y;var g=32-p;var x=e.y1-e.y0;var m=(e.y+e.y0)*d+(y>>5);var b=void 0;for(var w=0;w<x;w++){b=0;for(var S=0;S<=v;S++)t[m+S]|=b<<g|(S<v?(b=h[w*v+S])>>>p:0);m+=d}return delete e.sprite,!0}return!1};var r=[256,256];var o;var p=i;var g=l;var x=c;var m=u;var b=u;var w=s;var S=f;var D=h;var z=[];var M=1/0;var k=(0,n.default)("word","end");var O=null;var C=Math.random;var E={};var P=v;return E.canvas=function(t){return arguments.length?(P=d(t),E):P},E.start=function(){var n=function(){var t=Date.now();for(;Date.now()-t<M&&++s<c&&O;){var n=h[s];o?(n.x=o[0],n.y=o[1]):(n.x=r[0]*(Math.random()+.5)>>1,n.y=r[1]*(Math.random()+.5)>>1),function(t,e,r,n){if(!e.sprite){var o=t.context;var i=t.ratio;o.clearRect(0,0,2048/i,2048/i);var l=0;var u=0;var c=0;var s=r.length;for(--n;++n<s;){e=r[n],o.save(),o.font=e.style+" "+e.weight+" "+~~((e.size+1)/i)+"px "+e.font;var f=o.measureText(e.text+"m").width*i;var h=e.size<<1;if(e.rotate){var v=Math.sin(e.rotate*a);var d=Math.cos(e.rotate*a);var y=f*d;var p=f*v;var g=h*d;var x=h*v;f=Math.max(Math.abs(y+x),Math.abs(y-x))+31>>5<<5,h=~~Math.max(Math.abs(p+g),Math.abs(p-g))}else f=f+31>>5<<5;if(h>c&&(c=h),l+f>=2048&&(l=0,u+=c,c=0),u+h>=2048)break;o.translate((l+(f>>1))/i,(u+(h>>1))/i),e.rotate&&o.rotate(e.rotate*a),o.fillText(e.text,0,0),e.padding&&(o.lineWidth=2*e.padding,o.strokeText(e.text,0,0)),o.restore(),e.width=f,e.height=h,e.xoff=l,e.yoff=u,e.x1=f>>1,e.y1=h>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,l+=f}var m=o.getImageData(0,0,2048/i,2048/i).data;var b=[];for(;--n>=0;)if((e=r[n]).hasText){var w=e.width;var S=w>>5;var D=e.y1-e.y0;for(var z=0;z<D*S;z++)b[z]=0;if(null==(l=e.xoff))return;u=e.yoff;var M=0;var k=-1;for(var O=0;O<D;O++){for(var C=0;C<w;C++){var E=S*O+(C>>5);var P=m[(u+O)*2048+(l+C)<<2]?1<<31-C%32:0;b[E]|=P,M|=P}M?k=O:(e.y0++,D--,O--,u++)}e.y1=e.y0+k,e.sprite=b.slice(0,(e.y1-e.y0)*S)}}}(i,n,h,s),n.hasText&&e(l,n,u)&&(f.push(n),k.call("word",null,n),u?function(t,e){var r=t[0];var n=t[1];e.x+e.x0<r.x&&(r.x=e.x+e.x0),e.y+e.y0<r.y&&(r.y=e.y+e.y0),e.x+e.x1>n.x&&(n.x=e.x+e.x1),e.y+e.y1>n.y&&(n.y=e.y+e.y1)}(u,n):u=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=r[0]>>1,n.y-=r[1]>>1)}s>=c&&(E.stop(),k.call("end",null,f,u))};var i=t(P());var l=function(t){var e=[];var r=-1;for(;++r<t;)e[r]=0;return e}((r[0]>>5)*r[1]);var u=null;var c=z.length;var s=-1;var f=[];var h=z.map(function(t,e){return t.text=p.call(this,t,e),t.font=g.call(this,t,e),t.style=m.call(this,t,e),t.weight=b.call(this,t,e),t.rotate=w.call(this,t,e),t.size=~~x.call(this,t,e),t.padding=S.call(this,t,e),t}).sort(function(t,e){return e.size-t.size});return O&&clearInterval(O),O=setInterval(n,0),n(),E},E.stop=function(){return O&&(clearInterval(O),O=null),E},E.timeInterval=function(t){return arguments.length?(M=null==t?1/0:t,E):M},E.words=function(t){return arguments.length?(z=t,E):z},E.size=function(t){return arguments.length?(r=[+t[0],+t[1]],E):r},E.startPoint=function(t){return arguments.length?(o=[+t[0],+t[1]],E):o},E.font=function(t){return arguments.length?(g=d(t),E):g},E.fontStyle=function(t){return arguments.length?(m=d(t),E):m},E.fontWeight=function(t){return arguments.length?(b=d(t),E):b},E.rotate=function(t){return arguments.length?(w=d(t),E):w},E.text=function(t){return arguments.length?(p=d(t),E):p},E.spiral=function(t){return arguments.length?(D=y[t]||t,E):D},E.fontSize=function(t){return arguments.length?(x=d(t),E):x},E.padding=function(t){return arguments.length?(S=d(t),E):S},E.random=function(t){return arguments.length?(C=t,E):C},E.on=function(){var t=k.on.apply(k,arguments);return t===k?E:t},E}function i(t){return t.text}function l(){return"serif"}function u(){return"normal"}function c(t){return Math.sqrt(t.value)}function s(){return(~~(6*Math.random())-3)*30}function f(){return 1}function h(t){var e=t[0]/t[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function v(){return document.createElement("canvas")}function d(t){return"function"==typeof t?t:function(){return t}}var y={archimedean:h,rectangular:function(t){var e=4*t[0]/t[1];var r=0;var n=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:r+=e;break;case 1:n+=4;break;case 2:r-=e;break;default:n-=4}return[r,n]}}}},7400:(t,e,r)=>{r.r(e),r.d(e,{Wordcloud:()=>v});var n=r(498);var a=r.n(n);var o=r(420);var i=r(3989);var l=r(1115);var u=r(1113);var c=r(1111);var s=r(1112);var f=r(7401);var h=r(4018);function v(){var t=function(t){t.each(function(){var t=(0,l.default)(this);if(!y.length){t.selectAll(".igc-wc-node").remove(),M.call("animationEnd");return}if(0===g.width||0===g.height){M.call("animationEnd");return}k=p.left+(g.width>>1),O=p.top+(g.height>>1);var n=(y=y.slice(0).sort(function(t,e){return e.sizeAbs-t.sizeAbs})).length;"string"==typeof(T=a().get(z,"fontSize",T))&&(T=Number(T.replace(/(px|pt)$/gi,"")));var o=(0,i.default)().range([5,T]).domain([+y[n-1].sizeAbs||1,+y[0].sizeAbs]);(0,f.Cloud)().size([g.width,g.height]).startPoint([g.width/2,g.height/2]).padding(1).spiral("archimedean").rotate(w).font(z.fontFamily).fontStyle(z.fontStyle).fontWeight(z.fontWeight).fontSize(function(t){return o(t.sizeAbs)}).text(function(t){return t.categoryLabel}).on("end",function(n){var a=t.selectAll(".igc-wc-node").data(n);a.exit().remove(),(a=a.merge(a.enter().append("text").attr("text-anchor","middle").attr("class","igc-wc-node"))).call(e),t.call(r),a.transition().duration(D).delay(S).style("opacity",1).on("start",function(){b++}).on("end",function(){0==--b&&((0,h.addMouseEvents)(a,M,A,C,E),M.call("animationEnd"))})}).stop().words(y).start()})};var e=function(t){t.style("font-size",function(t){return t.size+"px"}).styles({"font-family":z.fontFamily,"font-weight":z.fontWeight,"font-style":z.fontStyle}).text(function(t){return t.text}).attr("fill",function(t){return t.color}).attr("transform",function(t){return"translate("+[t.x+k,t.y+O]+") rotate("+t.rotate+")"}).style("opacity",u.eps)};var r=function(t){var e=P(t.node());var r=g.width;var a=g.height;var o=u.math.fitToSize(e.width,e.height,r,a).width/e.width;var i="scale(".concat(o,")");t.attr("transform",i);var l=n(t.node(),o);var c=p.left-l.x+(r-l.width)/2;var s=p.top-l.y+(a-l.height)/2;t.attr("transform","translate(".concat(c,",").concat(s,") ").concat(i))};var n=function(t,e){var r=P(t);var n=t.ownerSVGElement;var a={x:r.x,y:r.y,width:r.width,height:r.height};var o=[n.createSVGPoint(),n.createSVGPoint(),n.createSVGPoint(),n.createSVGPoint()];o[0].x=r.x,o[0].y=r.y,o[1].x=r.x+r.width,o[1].y=r.y,o[2].x=r.x+r.width,o[2].y=r.y+r.height,o[3].x=r.x,o[3].y=r.y+r.height;var i=1/0;var l=-1/0;var u=1/0;var c=-1/0;return o.forEach(function(t){i=Math.min(i,t.x*e),l=Math.max(l,t.x*e),u=Math.min(u,t.y*e),c=Math.max(c,t.y*e)}),a.x=i,a.width=l-i,a.y=u,a.height=c-u,a};var d=v.TextDirection;var y=[];var p={x:0,y:0};var g={width:0,height:0};var x;var m;var b=0;var w=d.horizontalVertical;var S=0;var D=700;var z={fontFamily:"serif",fontStyle:"normal",fontWeight:"normal"};var M=(0,o.default)("animationEnd","openUrl");var k=0;var O=0;var C=function(t){return t.categoryLabel};var E=function(t){return t.sizeAbs};var P=(0,s.setupBBox)();var T=40;var A=c.getTooltip;return Object.assign(t,{data:function(e){return arguments.length?(y=e,t):y},groupId:function(e){return arguments.length?(m=e,t):m},chartId:function(e){return arguments.length?(x=e,t):x},bounds:function(e){return arguments.length?(g.width="number"==typeof e.width?e.width:g.width,g.height="number"==typeof e.height?e.height:g.height,t):g},offset:function(e){return arguments.length?(p.left="number"==typeof e.left?e.left:p.left,p.top="number"==typeof e.top?e.top:p.top,t):p},transitionDelay:function(e){return arguments.length?(S=e,t):S},transitionDuration:function(e){return arguments.length?(D=e,t):D},dispatch:function(){return M},textDirection:function(e){return arguments.length?(w=e in d?d[e]:w,t):w},labelOptions:function(e){return arguments.length?(z=a().merge(z,e),t):z},tooltip:function(e){return arguments.length?(A=e,t):A},tooltipText:function(e){return arguments.length?(C=e,t):C},tooltipValue:function(e){return arguments.length?(E=e,t):E}}),t}v.TextDirection={horizontal:0,vertical:-90,horizontalVertical:function(t,e){return e%2?-90:0},any:function(t,e){return e%2?-45:45}}},7398:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var n=r(498);var a=r.n(n);var o=r(7399);var i=r(7276);var l=r(7402);var u=r(7284);var c=Object.assign({},l.default);c.instanceClass=o.Wordcloud,c.setupChartSheetOptionsItem=function(t){var e=i.default.setupChartSheetOptionsItem.call(this,t);var r={"[0,-90,90,0]":"horizontalVertical","[0]":"horizontal","[90,-90]":"vertical","[45,-45]":"any"};e.axis=[{}],(0,u.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"x",path:"",ignoreCheck:!0}],inputDecimalSeparator:this.inputDecimalSeparator}),e.categories.textDirection=a().has(t,"rotate")?r[t.rotate]:r["[0,-90,90,0]"],e.labels=a().merge({},a().get(this,"charts.wordcloud.labels",{}));var n=a().get(t,"labels.graph.item.name.font-family");return n&&(e.labels.fontFamily=n),e};let s=Object.freeze(c)}}]);