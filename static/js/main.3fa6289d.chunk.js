(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(9),s=n.n(i),o=(n(17),n(2)),u=n(3),b=n(5),j=n(4),d=(n(18),n(10)),l=n(11),h=n(6),m=n.n(h);function O(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:e}),n]})}var f=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O,{title:"Statistics",children:this.props.state.contacts.map((function(t){return Object(a.jsx)("div",{children:t.name},m.a.generate())}))})}}]),n}(c.Component),p={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},v=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(l.a)({},p),t.number=m.a.generate(),t.addContact=function(e){e.preventDefault();var n={name:e.target.name.value,id:m.a.generate()};t.setState({contacts:[].concat(Object(d.a)(t.state.contacts),[n])})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{action:"",onSubmit:this.addContact,children:[Object(a.jsxs)("label",{htmlFor:"name",children:["Name",Object(a.jsx)("input",{type:"text",id:"name",onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(a.jsx)(f,{state:this.state})]})}}]),n}(c.Component),x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(v,{state:this.state})}}]),n}(c.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.3fa6289d.chunk.js.map