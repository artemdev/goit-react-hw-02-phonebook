(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(10),s=n.n(i),u=(n(17),n(3)),l=n(4),o=n(6),b=n(5),j=(n(18),n(11)),d=n(8),m=n(7),h=n.n(m);function f(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:t}),n]})}var O={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},v=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state=Object(d.a)({},O),e.number=h.a.generate(),e.invalid=function(t){return e.state.contacts.filter((function(e){return e.name===t})).length>0&&alert("user already exists")},e.addContact=function(t){t.preventDefault();var n=t.target,a=n.name,r=n.number;if(!e.invalid(a.value)){var c={name:a.value,number:r.value,id:h.a.generate()};e.setState({name:a.value,number:r.value,contacts:[].concat(Object(j.a)(e.state.contacts),[c])})}},e.changeFilter=function(t){var n=t.target.value;e.setState(Object(d.a)(Object(d.a)({},e.state),{},{filter:n.toLowerCase()}))},e.filterResults=function(t){return t.filter((function(t){return t.name.toLowerCase().includes(e.state.filter)})).map((function(e){return Object(a.jsxs)("div",{children:[" ",e.name," ",e.number]},h.a.generate())}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{action:"",onSubmit:this.addContact,children:[Object(a.jsxs)("label",{htmlFor:"name",children:["Name ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",id:"name"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{htmlFor:"number",children:["Number ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",id:"number"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(a.jsxs)(f,{title:"Contacts",children:[Object(a.jsx)("label",{htmlFor:"filter",children:Object(a.jsx)("input",{type:"text",id:"filter",onChange:this.changeFilter})}),this.filterResults(this.state.contacts)]})]})}}]),n}(r.Component),x=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:""},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(v,{state:this.state})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),p()}},[[27,1,2]]]);
//# sourceMappingURL=main.98c47552.chunk.js.map