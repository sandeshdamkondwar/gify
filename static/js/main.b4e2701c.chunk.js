(this.webpackJsonpgify=this.webpackJsonpgify||[]).push([[3],{20:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),i=t.n(r),c=t(6);var l=o.a.memo((function(){return o.a.createElement("ul",{className:"nav"},o.a.createElement("li",null,o.a.createElement(c.b,{activeClassName:"active",to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(c.b,{activeClassName:"active",to:"/trending"},"Trending")),o.a.createElement("li",null,o.a.createElement(c.b,{activeClassName:"active",to:"/random"},"Random")))})),u=t(1),s=t(16),f=t(17),m=t(19),d=t(18),h=function(e){var n=function(n){Object(m.a)(a,n);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={Component:a.Component},e}return Object(f.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var n=this;this.state.Component||e().then((function(e){a.Component=e,n.setState({Component:e})}))}},{key:"render",value:function(){var e=this.state.Component;return e?o.a.createElement(e,this.props):null}}]),a}(a.Component);return n.Component=null,n},v=h((function(){return t.e(0).then(t.bind(null,31)).then((function(e){return e.default}))})),p=h((function(){return t.e(2).then(t.bind(null,32)).then((function(e){return e.default}))})),g=h((function(){return t.e(1).then(t.bind(null,33)).then((function(e){return e.default}))}));var E=function(){return o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/"},o.a.createElement(v,null)),o.a.createElement(u.b,{path:"/trending"},o.a.createElement(p,null)),o.a.createElement(u.b,{path:"/random"},o.a.createElement(g,null)),o.a.createElement(u.b,null,o.a.createElement(u.a,{to:"/"})))};var b=function(){return o.a.createElement(c.a,{basename:"/gify"},o.a.createElement(l,null),o.a.createElement(E,null))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gify",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/gify","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[20,4,5]]]);
//# sourceMappingURL=main.b4e2701c.chunk.js.map