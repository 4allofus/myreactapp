(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(2),r=n(4),c=n(3),l=n(0),i=n.n(l),s=n(6),u=n.n(s),m=(n(12),n(13),[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean gecko tank",completed:!1},{id:4,text:"Mow lawn",completed:!0},{id:5,text:"Catch up on Arrested Development",completed:!1}]);var h=function(e){return i.a.createElement("div",{className:"todo-item"},i.a.createElement("input",{type:"checkbox",checked:e.myItems.completed}),i.a.createElement("p",null,e.myItems.text))};var p=function(){var e=m.map((function(e){return i.a.createElement(h,{key:e.id,myItems:e})}));return i.a.createElement("div",null,i.a.createElement("h1",null,"React test"),e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).changeColor=function(){e.setState({color:"blue"})},e.state={color:"white"},e}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"This state color: ",this.state.color," Car!"),i.a.createElement("h2",null,"This props color: ",this.props.color," Car!"),i.a.createElement("button",{type:"button",onClick:this.changeColor},"Change color"))}}]),n}(i.a.Component),v=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).shiftColor=function(){e.setState({color:"pink"}),alert("color has been changed")},e.state={color:"purple"},e}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Who own this ?"),i.a.createElement(d,{color:"red"}),i.a.createElement("h2",null,"This is in model color: ",this.state.color," Model"),i.a.createElement("button",{type:"button",onClick:this.shiftColor},"Change color Model"),i.a.createElement(p,null))}}]),n}(i.a.Component);u.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.80f2a15b.chunk.js.map