(this.webpackJsonpgify=this.webpackJsonpgify||[]).push([[6],{39:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a(6),n=a(0),l=a.n(n),c=a(9),s=a.n(c),r=function(e){var t=e.gif,a=e.still,c=e.title,r=e.className,o=e.single,u=e.height,d=e.autoPlay,f=void 0!==d&&d,m=l.a.useRef(null),g=Object(n.useState)(f),h=Object(i.a)(g,2),b=h[0],v=h[1],j=Object(n.useCallback)((function(){f||v(!b)}),[f,b]),p=Object(n.useCallback)((function(){var e;null===m||void 0===m||null===(e=m.current)||void 0===e||e.remove()}),[]),O=s()("gif_player",r||"",{playing:b,single:o}),E={src:b?t||a:a||t,onLoad:p,onError:p};return E.heigh=u,o&&(E.key=E.src),l.a.createElement("div",{className:O,onClick:j,style:{height:"".concat(u,"px")}},l.a.createElement("div",{className:"play_button","data-test-id":c}),l.a.createElement("div",{className:"placeholder",ref:m}),l.a.createElement("img",Object.assign({"data-testid":"gif-image"},E,{alt:c})))}},69:function(e,t,a){"use strict";a.r(t);var i=a(6),n=a(0),l=a.n(n),c=a(40),s=a(39),r=new c.GiphyFetch("dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk");t.default=l.a.memo((function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),u=Object(i.a)(o,2),d=u[0],f=u[1],m=Object(n.useCallback)((function(){return r.random({offset:d,limit:1}).then((function(e){var t=e.data.images.fixed_width;c({gif:t.url,still:t.url,title:e.data.title,height:t.height,width:t.width})}))}),[d]);Object(n.useEffect)((function(){m()}),[m]);var g=Object(n.useCallback)((function(){f(d+1)}),[d]);return l.a.createElement("div",{className:"random-container"},a?l.a.createElement(s.a,{className:"gif-item",gif:a.gif,still:a.still,title:a.title,single:!0,height:a.height,autoPlay:!0}):l.a.createElement("div",{className:"gif-loading"},"...Loading"),l.a.createElement("div",{className:"load-new"},l.a.createElement("button",{className:"btn action",onClick:g},"Another Random GIF")))}))}}]);
//# sourceMappingURL=6.b5997b79.chunk.js.map