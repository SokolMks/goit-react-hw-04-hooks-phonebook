(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={section:"Section_section__33ETV"}},2:function(e,t,n){e.exports={container:"Contacts_container__1rkgu",title:"Contacts_title__1Jpvn",list:"Contacts_list__3JiIP",listElement:"Contacts_listElement__2IrQi",btn:"Contacts_btn__3SVPv",label:"Contacts_label__a-MmI"}},26:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=n(12),i=n(3),l=n(10),u=n.n(l),b=n(11),m=n.n(b),j=n(0),d=function(e){var t=e.children;return Object(j.jsx)("div",{className:m.a.section,children:t})},h=n(7),f=n.n(h);var O=function(e){var t=e.submitForm,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],b=l[1],m=function(e){var t=e.currentTarget.value;"name"===e.target.name&&o(t),"number"===e.target.name&&b(t)},d=function(){o(""),b("")};return Object(j.jsxs)("form",{className:f.a.containerForm,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),d()},children:[Object(j.jsx)("h2",{className:f.a.title,children:"Phonebook"}),Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:r,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:u,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})},_=n(2),p=n.n(_),x=function(e){var t=e.contactsList,n=e.onDeleteContact,a=e.filterContacts,c=e.onChangeFilter;return Object(j.jsxs)("div",{className:p.a.container,children:[Object(j.jsx)("h2",{className:p.a.title,children:"Contacts"}),Object(j.jsxs)("ul",{className:p.a.list,children:[Object(j.jsxs)("label",{className:p.a.label,children:["Find contacts by name:",Object(j.jsx)("input",{type:"text",name:"name",value:a,onChange:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsxs)("li",{className:p.a.listElement,children:[Object(j.jsxs)("p",{children:[a,": ",c]}),Object(j.jsx)("button",{className:p.a.btn,onClick:function(){return n(t)},children:"Delete contact"})]},t)}))]})]})};var C=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=l.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(m)}));return Object(j.jsxs)(d,{children:[Object(j.jsx)(O,{submitForm:function(e){var t=e.name,a=e.number;if(n.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase()))alert("This name is already in the list of contacts!");else{var r={id:u.a.generate(),name:t,number:a};c((function(e){return[r].concat(Object(s.a)(e))}))}}}),Object(j.jsx)(x,{mainListContact:n,onChangeFilter:function(e){b(e.currentTarget.value)},filterContacts:l,contactsList:h,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={containerForm:"Phonebook_containerForm__2XcMl",title:"Phonebook_title__3MnFG",btn:"Phonebook_btn__2l6jE"}}},[[26,1,2]]]);
//# sourceMappingURL=main.6ddae4d6.chunk.js.map