(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),i=(n(23),n(8));n(24),n(25);var o=function(e){var t=e.city;return null!==t?r.a.createElement("h1",null,r.a.createElement("span",null,"Weather in "),r.a.createElement("span",{className:"cityName"},t)):r.a.createElement("h1",null,"To check weather type in the city.")};n(26);var u=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){""===c&&e.setCity(null)}),[c]),r.a.createElement("form",{className:"cityForm",onSubmit:function(t){t.preventDefault(),e.handleSubmit(c)}},r.a.createElement("input",{className:"cityForm_input",type:"text",onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{className:"cityForm_submit",type:"submit"},"submit"))};var m=function(e){return null===e.data?r.a.createElement("h4",null,"Loading..."):r.a.createElement("div",null,function(e,t){if(null===t)return"Type in city";if(void 0===e.list)return"Didn't find the city";var n=e.list[0].weather[0].main,a=e.list[1].weather[0].main,c=e.list[0].main.temp,l=e.list[1].main.temp;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Today:"),r.a.createElement("p",null,"Temperature: ",c,"\xbaC. Conditions: ",n),r.a.createElement("h3",null,"Tommorow:"),r.a.createElement("p",null,"Temperature: ",l,"\xbaC. Conditions: ",a))}(e.data,e.city))};var s=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),s=Object(i.a)(l,2),f=s[0],h=s[1];return Object(a.useEffect)((function(){null===n&&function(e,t){fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&units=metric&appid=").concat("9634c5e8feb4b0374fe763d401506e5b")).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){return console.log(e+"this is error")}))}(f,c)}),[n,f]),r.a.createElement("div",{className:"temperatureInfo"},r.a.createElement(o,{city:f}),r.a.createElement(u,{handleSubmit:function(e){h(e),c(null)},setCity:h}),r.a.createElement(m,{data:n,city:f}))};var f=function(){return r.a.createElement("h1",null,"404 page not found")},h=n(15),p=n(5);var E=function(){return r.a.createElement(h.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:s,exact:!0}),r.a.createElement(p.b,{path:"/404",component:f}),r.a.createElement(p.a,{from:"*",to:"/404"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.df33184c.chunk.js.map