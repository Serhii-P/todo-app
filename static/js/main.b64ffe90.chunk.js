(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(7),i=n.n(r),l=(n(13),n(14),n(15),n(3)),a=n(8),s=n(2),u=n(0),j=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(!1),l=Object(s.a)(i,2),a=l[0],j=l[1],d=a?"form-control invalid":"form-control ";return Object(u.jsx)("div",{children:Object(u.jsx)("form",{className:d,onSubmit:function(t){t.preventDefault(),""!==o.trim()?(e.onSaveUserValue(o.trim()),j(!1),r("")):j(!0)},children:Object(u.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){r(e.target.value),""!==e.target.value.trim()&&j(!1)},value:o})})})},d=function(e){var t=e.id,n=e.title,o=e.completed,r=e.onDeleteItem,i=e.onCompleted,l=e.onEditItem,a=Object(c.useState)(!1),j=Object(s.a)(a,2),d=j[0],b=j[1],m=Object(c.useState)(n),f=Object(s.a)(m,2),O=f[0],p=f[1],h=Object(c.useCallback)((function(e){"Escape"!==e.key&&"Esc"!==e.key&&27!==e.keyCode||b(!1)}),[]);Object(c.useEffect)((function(){return document.addEventListener("keydown",h),function(){document.removeEventListener("keydown",h)}}),[h]);var x=function(e){e.preventDefault(),b(!1),l(t,O)},v=!!o;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:o?"completed":d?"editing":"",children:[Object(u.jsxs)("div",{className:"view",children:[Object(u.jsx)("input",{type:"checkbox",className:"toggle",checked:v,onChange:function(){return function(e){i(e)}(t)}}),Object(u.jsx)("label",{onDoubleClick:function(e){return function(e,t,n){o||(b(!0),p(t))}(0,O)},children:n}),Object(u.jsx)("button",{type:"button",className:"destroy",onClick:function(){return function(e){r(e)}(t)}})]}),Object(u.jsx)("form",{onSubmit:x,onBlur:x,children:Object(u.jsx)("input",{type:"text",className:"edit",value:O,onChange:function(e){p(e.target.value)}})})]})})},b=function(e){var t=e.listOfTodos,n=e.onDeleteItem,c=e.onCompleted,o=e.onEditItem,r=e.FILTER_MAP,i=e.filter,l=function(e){n(e)},a=function(e){c(e)},s=function(e,t){o(e,t)};return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"todo-list",children:t.filter(r[i]).map((function(e){return Object(u.jsx)(d,{id:e.id,title:e.title,completed:e.completed,onDeleteItem:l,onCompleted:a,onEditItem:s},e.id)}))})})},m=function(e){var t=e.counter;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("span",{className:"todo-count",children:[t," items left"]})})};var f=function(e){var t=e.getDate(),n=e.getMonth()+1;return t<10&&(t="0"+t),n<10&&(n="0"+n),t+"."+n+"."+e.getFullYear()}(new Date),O=function(e){var t=e.name,n=e.isPressed,c=e.setFilter,o=n?"selected":"";return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:o,onClick:function(){return c(t)},children:t})})})},p={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},h=Object.keys(p);var x=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(0),i=Object(s.a)(r,2),d=i[0],x=i[1],v=Object(c.useState)("All"),g=Object(s.a)(v,2),k=g[0],N=g[1];return Object(c.useEffect)((function(){var e=n.filter((function(e){return!0===e.completed})),t=n.length-e.length;x(t)}),[n]),Object(u.jsxs)("section",{className:"todoapp",children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:"todos"}),Object(u.jsx)(j,{onSaveUserValue:function(e){var t={id:f+Math.random().toString(),title:e,completed:!1};o((function(e){return[].concat(Object(a.a)(e),[t])}))}})]}),Object(u.jsxs)("section",{className:"main",children:[Object(u.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:function(){var e=n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{completed:!0})}));o(e)}}),Object(u.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(u.jsx)(b,{listOfTodos:n,onDeleteItem:function(e){var t=n.filter((function(t){return t.id!==e}));o(t)},onCompleted:function(e){var t=n.map((function(t){return e===t.id?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));o(t)},onEditItem:function(e,t){var c=n.map((function(n){return e===n.id?Object(l.a)(Object(l.a)({},n),{},{title:t}):n}));o(c)},FILTER_MAP:p,filter:k})]}),n&&n.length>0&&Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)(m,{counter:d}),Object(u.jsx)("ul",{className:"filters",children:h.map((function(e){return Object(u.jsx)(O,{name:e,isPressed:e===k,setFilter:N},e)}))}),Object(u.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){var e=n.filter((function(e){return!e.completed}));o(e)},children:"Clear completed"})]})]})};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b64ffe90.chunk.js.map