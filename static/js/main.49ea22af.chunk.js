(this.webpackJsonpgify=this.webpackJsonpgify||[]).push([[3],{20:function(e,n,t){e.exports=t(31)},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),i=t(6);var l=r.a.memo((function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{className:"nav-item button",exact:!0,activeClassName:"active",to:"/"},"Home"),r.a.createElement(i.b,{className:"nav-item button",exact:!0,activeClassName:"active",to:"/trending"},"Trending"),r.a.createElement(i.b,{className:"nav-item button",exact:!0,activeClassName:"active",to:"/random"},"Random"))}));var s=function(){return r.a.createElement("div",{className:"search-bar"},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"search",id:"gif-search","aria-label":"Search GIFs",value:"asd",placeholder:"Search GIFs"}),r.a.createElement("button",{className:"action",onClick:function(){}},"Go")))};var u=r.a.memo((function(){return r.a.createElement("div",{className:"header"},r.a.createElement(s,null),r.a.createElement(l,null))})),m=t(1),f=t(16),d=t(17),v=t(19),h=t(18),p=function(e){var n=function(n){Object(v.a)(a,n);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Component:a.Component},e}return Object(d.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var n=this;this.state.Component||e().then((function(e){a.Component=e,n.setState({Component:e})}))}},{key:"render",value:function(){var e=this.state.Component;return e?r.a.createElement(e,this.props):null}}]),a}(a.Component);return n.Component=null,n},g=p((function(){return t.e(0).then(t.bind(null,32)).then((function(e){return e.default}))})),b=p((function(){return t.e(2).then(t.bind(null,33)).then((function(e){return e.default}))})),E=p((function(){return t.e(1).then(t.bind(null,34)).then((function(e){return e.default}))}));var w=function(){return r.a.createElement("div",{className:"gif-container"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(m.b,{path:"/trending"},r.a.createElement(b,null)),r.a.createElement(m.b,{path:"/random"},r.a.createElement(E,null)),r.a.createElement(m.b,null,r.a.createElement(m.a,{to:"/"}))))};var y=function(){return r.a.createElement(i.a,{basename:"/gify"},r.a.createElement(u,null),r.a.createElement(w,null))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(30);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gify",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/gify","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(n,e)}))}}()}},[[20,4,5]]]);
//# sourceMappingURL=main.49ea22af.chunk.js.map