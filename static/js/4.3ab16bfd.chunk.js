(this.webpackJsonpgify=this.webpackJsonpgify||[]).push([[4],{39:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(6),c=a(0),i=a.n(c),r=a(9),s=a.n(r),l=function(e){var t=e.gif,a=e.still,r=e.title,l=e.className,o=e.single,u=e.height,f=e.autoPlay,h=void 0!==f&&f,m=i.a.useRef(null),d=Object(c.useState)(h),b=Object(n.a)(d,2),g=b[0],v=b[1],O=Object(c.useCallback)((function(){h||v(!g)}),[h,g]),j=Object(c.useCallback)((function(){var e;null===m||void 0===m||null===(e=m.current)||void 0===e||e.remove()}),[]),p=s()("gif_player",l||"",{playing:g,single:o}),w={src:g?t||a:a||t,onLoad:j,onError:j},y=Math.floor(u-10);return o&&(w.key=w.src,w.height=y),i.a.createElement("div",{className:p,onClick:O,style:{height:"".concat(y,"px")}},i.a.createElement("div",{className:"play_button","data-test-id":r}),i.a.createElement("div",{className:"placeholder",ref:m}),i.a.createElement("img",Object.assign({"data-testid":"gif-image"},w,{alt:r})))}},41:function(e,t,a){e.exports=a.p+"static/media/loader.77228bc8.svg"},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(15),c=a(6),i=a(0),r=a.n(i),s=a(18),l=a(39),o=a(41),u=a.n(o),f=100,h=100,m=300,d=50,b=1e3,g=function(e){return e<500?f:h};var v=r.a.memo((function(e){var t=e.fetchGifs,a=Object(i.useState)([]),o=Object(c.a)(a,2),f=o[0],h=o[1],v=Object(i.useState)(0),O=Object(c.a)(v,2),j=O[0],p=O[1],w=Object(i.useState)([]),y=Object(c.a)(w,2),E=y[0],N=y[1],S=function(e){var t=e.scollThreshold,a=e.bottomThreshold,n=Object(i.useState)(!1),r=Object(c.a)(n,2),s=r[0],l=r[1],o=Object(i.useState)(0),u=Object(c.a)(o,2),f=u[0],h=u[1];return Object(i.useEffect)((function(){var e=t||0,n=window,c=n.pageYOffset,i=n.innerHeight,r=!1,o=function(){var t=window.pageYOffset,n=document.body.clientHeight;Math.abs(t-c)<e?r=!1:(c=t>0?t:0,r=!1,s||l(!!(n-(t+i)<a)))},u=function(){r||(h(window.requestAnimationFrame(o)),r=!0)};return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u),window.cancelAnimationFrame(f)}}),[]),{fetch:s,setFetching:l}}({scollThreshold:d,bottomThreshold:m}),k=S.fetch,A=S.setFetching,C=Object(i.useRef)(Object(s.a)((function(){var e=g(window.innerWidth);p((function(t){return t+e+1}))}),b,!1)).current;Object(i.useEffect)((function(){var e=window.innerWidth,a=g(e);t(j,a).then((function(t){var a=Object(s.b)({data:t.data instanceof Array?t.data:[t.data],screenWidth:e,cols:Object(s.c)(e)}),c=a.items,i=a.heights,r=0===E.length?E.map((function(e,t){return e+i[t]})):i;N(r),c=c||[];var l=f.length?f.map((function(e,t){return[].concat(Object(n.a)(f[t]),Object(n.a)(c[t]))})):c;h(l),A(!1)}))}),[t,j]),k&&f.length>0&&C();var F=Math.max.apply(Math,Object(n.a)(E));return r.a.createElement("div",{className:"gif-items-container"},r.a.createElement("div",{className:"gif-items-cols",style:{height:"".concat(F,"px")}},f.map((function(e,t){return r.a.createElement("div",{key:t,className:"gif-items-col"},e.map((function(e,t){return r.a.createElement(l.a,{className:"gif-item",key:t,gif:e.gif.url,still:e.still.url,title:e.title,height:e.height})})))}))),k&&r.a.createElement("img",{src:u.a,className:"loader-image",alt:"loader"}))}))},68:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(0),i=a.n(c),r=a(40),s=a(42),l=a(12),o=new r.GiphyFetch("dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk");t.default=i.a.memo((function(){var e=Object(c.useContext)(l.a),t=Object(n.a)(e,1)[0],a=Object(c.useCallback)((function(e,a){return o.search(t.query,{offset:e,limit:a})}),[t.query]);return!!t.query?i.a.createElement("div",null,i.a.createElement("h3",{className:"page-heading"},"Search Result..."),i.a.createElement(s.a,{fetchGifs:a})):i.a.createElement("h3",{className:"page-heading-center"},"Search Your GIF Above...")}))}}]);
//# sourceMappingURL=4.3ab16bfd.chunk.js.map