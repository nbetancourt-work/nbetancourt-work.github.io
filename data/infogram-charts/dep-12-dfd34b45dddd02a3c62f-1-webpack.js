(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-12"],{7309:(n,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(7265);var e=a(7266);var u=a(7306);function i(n){return n.innerRadius}function l(n){return n.outerRadius}function o(n){return n.startAngle}function c(n){return n.endAngle}function s(n){return n&&n.padAngle}function f(n,t,a,r,e,i,l){var o=n-a,c=t-r,s=(l?i:-i)/(0,u.sqrt)(o*o+c*c),f=s*c,p=-s*o,y=n+f,h=t+p,d=a+f,v=r+p,x=(y+d)/2,g=(h+v)/2,m=d-y,A=v-h,M=m*m+A*A,b=e-i,q=y*v-d*h,T=(A<0?-1:1)*(0,u.sqrt)((0,u.max)(0,b*b*M-q*q)),k=(q*A-m*T)/M,R=(-q*m-A*T)/M,P=(q*A+m*T)/M,w=(-q*m+A*T)/M,C=k-x,N=R-g,I=P-x,V=w-g;return C*C+N*N>I*I+V*V&&(k=P,R=w),{cx:k,cy:R,x01:-f,y01:-p,x11:k*(e/b-1),y11:R*(e/b-1)}}function p(){var n=function(){var n,e,i=+t.apply(this,arguments),l=+a.apply(this,arguments),o=h.apply(this,arguments)-u.halfPi,c=d.apply(this,arguments)-u.halfPi,s=(0,u.abs)(c-o),g=c>o;if(x||(x=n=(0,r.path)()),l<i&&(e=l,l=i,i=e),l>u.epsilon){if(s>u.tau-u.epsilon)x.moveTo(l*(0,u.cos)(o),l*(0,u.sin)(o)),x.arc(0,0,l,o,c,!g),i>u.epsilon&&(x.moveTo(i*(0,u.cos)(c),i*(0,u.sin)(c)),x.arc(0,0,i,c,o,g));else{var m=o,A=c,M=o,b=c,q=s,T=s,k=v.apply(this,arguments)/2,R=k>u.epsilon&&(y?+y.apply(this,arguments):(0,u.sqrt)(i*i+l*l)),P=(0,u.min)((0,u.abs)(l-i)/2,+p.apply(this,arguments)),w=P,C=P,N,I;if(R>u.epsilon){var V=(0,u.asin)(R/i*(0,u.sin)(k)),j=(0,u.asin)(R/l*(0,u.sin)(k));(q-=2*V)>u.epsilon?(V*=g?1:-1,M+=V,b-=V):(q=0,M=b=(o+c)/2),(T-=2*j)>u.epsilon?(j*=g?1:-1,m+=j,A-=j):(T=0,m=A=(o+c)/2)}var z=l*(0,u.cos)(m),B=l*(0,u.sin)(m),D=i*(0,u.cos)(b),E=i*(0,u.sin)(b);if(P>u.epsilon){var F=l*(0,u.cos)(A),G=l*(0,u.sin)(A),H=i*(0,u.cos)(M),J=i*(0,u.sin)(M),K;if(s<u.pi&&(K=function(n,t,a,r,e,i,l,o){var c=a-n,s=r-t,f=l-e,p=o-i,y=p*c-f*s;if(!(y*y<u.epsilon))return y=(f*(t-i)-p*(n-e))/y,[n+y*c,t+y*s]}(z,B,H,J,F,G,D,E))){var L=z-K[0],O=B-K[1],Q=F-K[0],S=G-K[1],U=1/(0,u.sin)((0,u.acos)((L*Q+O*S)/((0,u.sqrt)(L*L+O*O)*(0,u.sqrt)(Q*Q+S*S)))/2),W=(0,u.sqrt)(K[0]*K[0]+K[1]*K[1]);w=(0,u.min)(P,(i-W)/(U-1)),C=(0,u.min)(P,(l-W)/(U+1))}}T>u.epsilon?C>u.epsilon?(N=f(H,J,z,B,l,C,g),I=f(F,G,D,E,l,C,g),x.moveTo(N.cx+N.x01,N.cy+N.y01),C<P?x.arc(N.cx,N.cy,C,(0,u.atan2)(N.y01,N.x01),(0,u.atan2)(I.y01,I.x01),!g):(x.arc(N.cx,N.cy,C,(0,u.atan2)(N.y01,N.x01),(0,u.atan2)(N.y11,N.x11),!g),x.arc(0,0,l,(0,u.atan2)(N.cy+N.y11,N.cx+N.x11),(0,u.atan2)(I.cy+I.y11,I.cx+I.x11),!g),x.arc(I.cx,I.cy,C,(0,u.atan2)(I.y11,I.x11),(0,u.atan2)(I.y01,I.x01),!g))):(x.moveTo(z,B),x.arc(0,0,l,m,A,!g)):x.moveTo(z,B),i>u.epsilon&&q>u.epsilon?w>u.epsilon?(N=f(D,E,F,G,i,-w,g),I=f(z,B,H,J,i,-w,g),x.lineTo(N.cx+N.x01,N.cy+N.y01),w<P?x.arc(N.cx,N.cy,w,(0,u.atan2)(N.y01,N.x01),(0,u.atan2)(I.y01,I.x01),!g):(x.arc(N.cx,N.cy,w,(0,u.atan2)(N.y01,N.x01),(0,u.atan2)(N.y11,N.x11),!g),x.arc(0,0,i,(0,u.atan2)(N.cy+N.y11,N.cx+N.x11),(0,u.atan2)(I.cy+I.y11,I.cx+I.x11),g),x.arc(I.cx,I.cy,w,(0,u.atan2)(I.y11,I.x11),(0,u.atan2)(I.y01,I.x01),!g))):x.arc(0,0,i,b,M,g):x.lineTo(D,E)}}else x.moveTo(0,0);if(x.closePath(),n)return x=null,n+""||null};var t=i,a=l,p=(0,e.default)(0),y=null,h=o,d=c,v=s,x=null;return n.centroid=function(){var n=(+t.apply(this,arguments)+ +a.apply(this,arguments))/2,r=(+h.apply(this,arguments)+ +d.apply(this,arguments))/2-u.pi/2;return[(0,u.cos)(r)*n,(0,u.sin)(r)*n]},n.innerRadius=function(a){return arguments.length?(t="function"==typeof a?a:(0,e.default)(+a),n):t},n.outerRadius=function(t){return arguments.length?(a="function"==typeof t?t:(0,e.default)(+t),n):a},n.cornerRadius=function(t){return arguments.length?(p="function"==typeof t?t:(0,e.default)(+t),n):p},n.padRadius=function(t){return arguments.length?(y=null==t?null:"function"==typeof t?t:(0,e.default)(+t),n):y},n.startAngle=function(t){return arguments.length?(h="function"==typeof t?t:(0,e.default)(+t),n):h},n.endAngle=function(t){return arguments.length?(d="function"==typeof t?t:(0,e.default)(+t),n):d},n.padAngle=function(t){return arguments.length?(v="function"==typeof t?t:(0,e.default)(+t),n):v},n.context=function(t){return arguments.length?(x=null==t?null:t,n):x},n}},7308:(n,t,a)=>{function r(n,t){return t<n?-1:t>n?1:t>=n?0:NaN}a.r(t),a.d(t,{default:()=>r})},7307:(n,t,a)=>{function r(n){return n}a.r(t),a.d(t,{default:()=>r})},7306:(n,t,a)=>{a.r(t),a.d(t,{abs:()=>r,acos:()=>h,asin:()=>d,atan2:()=>e,cos:()=>u,epsilon:()=>s,halfPi:()=>p,max:()=>i,min:()=>l,pi:()=>f,sin:()=>o,sqrt:()=>c,tau:()=>y});var r=Math.abs;var e=Math.atan2;var u=Math.cos;var i=Math.max;var l=Math.min;var o=Math.sin;var c=Math.sqrt;var s=1e-12;var f=Math.PI;var p=f/2;var y=2*f;function h(n){return n>1?0:n<-1?f:Math.acos(n)}function d(n){return n>=1?p:n<=-1?-p:Math.asin(n)}},7305:(n,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(7264);var e=a(7266);var u=a(7308);var i=a(7307);var l=a(7306);function o(){var n=function(n){var e,u=(n=(0,r.default)(n)).length,i,p,y=0,h=Array(u),d=Array(u),v=+c.apply(this,arguments),x=Math.min(l.tau,Math.max(-l.tau,s.apply(this,arguments)-v)),g,m=Math.min(Math.abs(x)/u,f.apply(this,arguments)),A=m*(x<0?-1:1),M;for(e=0;e<u;++e)(M=d[h[e]=e]=+t(n[e],e,n))>0&&(y+=M);for(null!=a?h.sort(function(n,t){return a(d[n],d[t])}):null!=o&&h.sort(function(t,a){return o(n[t],n[a])}),e=0,p=y?(x-u*A)/y:0;e<u;++e,v=g)g=v+((M=d[i=h[e]])>0?M*p:0)+A,d[i]={data:n[i],index:e,value:M,startAngle:v,endAngle:g,padAngle:m};return d};var t=i.default,a=u.default,o=null,c=(0,e.default)(0),s=(0,e.default)(l.tau),f=(0,e.default)(0);return n.value=function(a){return arguments.length?(t="function"==typeof a?a:(0,e.default)(+a),n):t},n.sortValues=function(t){return arguments.length?(a=t,o=null,n):a},n.sort=function(t){return arguments.length?(o=t,a=null,n):o},n.startAngle=function(t){return arguments.length?(c="function"==typeof t?t:(0,e.default)(+t),n):c},n.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:(0,e.default)(+t),n):s},n.padAngle=function(t){return arguments.length?(f="function"==typeof t?t:(0,e.default)(+t),n):f},n}}}]);