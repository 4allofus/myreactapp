(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),c=t(10),l=t(9),s=t(0),i=t.n(s),o=t(6),m=t.n(o),u=t(7),d=t.n(u);t(16);var h=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}))};t(17),t(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=t(1),v=t.n(p),E=t(8),f=t(2);function b(e){var a=e.displayMovie;return i.a.createElement("div",{className:"card"},i.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(a.poster_path),alt:a.title+" poster"}),i.a.createElement("div",{className:"card--content"},i.a.createElement("h3",{className:"card--title"},a.title),i.a.createElement("p",null,i.a.createElement("small",null,"RELEASE DATE: ",a.release_date)),i.a.createElement("p",null,i.a.createElement("small",null,"RATING: ",a.vote_average)),i.a.createElement("p",{className:"card--desc"},a.overview)))}var g=function(){var e=Object(s.useState)(""),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)([]),c=Object(f.a)(r,2),l=c[0],o=c[1],m=function(){var e=Object(E.a)(v.a.mark((function e(a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=1c963e0bb9546bfc655cd410aca57872&language=en-US&query=".concat(t,"&page=1&include_adult=false"),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,o(c.results),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"form",onSubmit:m},i.a.createElement("label",{className:"label",htmlFor:"query"},"Movie name : "),i.a.createElement("input",{className:"input",type:"text",required:"required",name:"query",placeholder:"the matrix, jurassic",value:t,onChange:function(e){return n(e.currentTarget.value)}}),i.a.createElement("button",{className:"button",type:"submit"},"search")),i.a.createElement("div",{className:"display-list"},l.filter((function(e){return e.poster_path})).map((function(e){return i.a.createElement(b,{displayMovie:e,key:e.id})}))))},N=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("section",{className:"hero is-fullheight"},i.a.createElement("div",{className:"hero-head"},i.a.createElement("div",{className:"columns is-mobile is-marginless"},i.a.createElement("div",{className:"column"},i.a.createElement(h,null)),i.a.createElement("div",{className:"column"}),i.a.createElement("div",{className:"column center has-text-white"},i.a.createElement("p",null,"Dibuat dengan ",i.a.createElement("strong",{className:"has-text-white"},"REACT")," dan ",i.a.createElement("strong",{className:"has-text-white"},"Bulma")))),i.a.createElement("header",{className:"hero-body"},i.a.createElement("div",{className:"container is-overlay has-text-centered single-spaced"},i.a.createElement("h1",{className:"subtitle is-2 has-text-white"},"React Movie Search"),i.a.createElement("h2",{className:"title is-3 has-text-white"},"Powered by ",i.a.createElement("a",{href:"https://themoviedb.org"},"themoviedb.org")))),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container",id:"root"},i.a.createElement(g,null))))))}}]),t}(i.a.Component);m.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b8aace8c.chunk.js.map