(this["webpackJsonpstudy-counter"]=this["webpackJsonpstudy-counter"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(4),c=n.n(a),r=(n(13),n(2)),u=n(5),l=n(6),d=n(8),j=n(7),o=(n(14),[{name:"ai1",length:35,id:0,subject:"ai"},{name:"ai2",length:35,id:1,subject:"ai"},{name:"ai3",length:35,id:2,subject:"ai"},{name:"ai4",length:35,id:3,subject:"ai"},{name:"rub1",length:35,id:4,subject:"rub"},{name:"rub2",length:35,id:5,subject:"rub"},{name:"rub3",length:35,id:6,subject:"rub"},{name:"rub4",length:35,id:7,subject:"rub"},{name:"rub5",length:35,id:8,subject:"rub"},{name:"rub6",length:35,id:9,subject:"rub"},{name:"ena1",length:35,id:10,subject:"ena"},{name:"ena2",length:35,id:11,subject:"ena"},{name:"ena3",length:35,id:12,subject:"ena"},{name:"ena4",length:35,id:13,subject:"ena"},{name:"ena5",length:35,id:14,subject:"ena"},{name:"ena6",length:35,id:15,subject:"ena"},{name:"ena7",length:35,id:16,subject:"ena"},{name:"ma1",length:35,id:17,subject:"ma"},{name:"ma2",length:35,id:18,subject:"ma"},{name:"ma3",length:35,id:19,subject:"ma"},{name:"ma4",length:35,id:20,subject:"ma"},{name:"ma5",length:35,id:21,subject:"ma"},{name:"ma6",length:35,id:22,subject:"ma"},{name:"ma7",length:35,id:23,subject:"ma"},{name:"yt1",length:35,id:24,subject:"yt"},{name:"yt2",length:35,id:25,subject:"yt"},{name:"ue1",length:35,id:26,subject:"ue"},{name:"et1",length:35,id:27,subject:"et"},{name:"hi1",length:35,id:28,subject:"hi"},{name:"fy1",length:35,id:29,subject:"fy"},{name:"ke1",length:35,id:30,subject:"ke"},{name:"bi1",length:35,id:31,subject:"bi"},{name:"ge1",length:35,id:32,subject:"ge"},{name:"tt1",length:35,id:33,subject:"tt"},{name:"ot1",length:35,id:34,subject:"ot"},{name:"ot2",length:35,id:35,subject:"ot"}]),b=[{identifier:"ai"},{identifier:"rub"},{identifier:"ena"},{identifier:"ma"},{identifier:"ue"},{identifier:"et"},{identifier:"hi"},{identifier:"yt"},{identifier:"fy"},{identifier:"ke"},{identifier:"bi"},{identifier:"ge"},{identifier:"tt"},{identifier:"ot"}],h=n(0),m=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).handleInputChange=function(e){i.setState({hoursPerWeek:e.target.value,totalTime:i.getTotalTime(i.state.totalHours,parseInt(e.target.value))})},i.toggleCourseClick=function(e){var t=i.state,n=t.completedCourses,s=t.completedHours,a=n.includes(e)?n.filter((function(t){return t!==e})):[].concat(Object(r.a)(n),[e]),c=o.find((function(t){return t.id===e})),u=n.includes(e)?s-c.length:s+c.length;i.setState({completedCourses:a,completedHours:u})},i.getTotalTime=function(e,t){var n,i,s,a=e/t,c=0;if(!t||0===t)return 0;if(a>52){var r=a/52;r>=1&&(c=Math.floor(r)+" v "),n=r%1}else n=a/52;if(n>0){var u=12*n;u>=1&&(c=c?c+Math.floor(u)+" kk ":Math.floor(u)+" kk "),i=u%1}if(i>0){var l=4.3482*i;l>=1&&(c=c?c+Math.floor(l)+" vko ":Math.floor(l)+" vko "),s=l%1}if(s>0){var d=7*s;d>=1&&(c=c?c+Math.floor(d)+" pv ":Math.floor(d)+" pv ")}return c},i.state={courses:o,hoursPerWeek:0,completedCourses:[],totalHours:0,completedHours:0,totalTime:0},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=0;this.state.courses.map((function(t){return e+=t.length})),this.setState({totalHours:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.hoursPerWeek,i=t.totalHours,s=t.totalTime,a=t.completedHours;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"study-counter",children:[Object(h.jsxs)("div",{className:"study-counter__header",children:[Object(h.jsx)("h1",{children:"Opintolaskuri opiskelijalle"}),Object(h.jsx)("span",{children:"Kirjoita kentt\xe4\xe4n kuinka monta tuntia viikossa opiskelet"})]}),Object(h.jsxs)("div",{className:"study-counter__content",children:[Object(h.jsx)("input",{type:"number",className:"study-counter__input",onChange:this.handleInputChange}),Object(h.jsxs)("div",{className:"study-counter__summary",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Tunteja viikossa"}),Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Kurssitunnit"}),Object(h.jsx)("span",{children:i})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Opiskelujen kokonaisaika"}),Object(h.jsx)("span",{children:s})]})]})]})]}),Object(h.jsxs)("div",{className:"subjects",children:[Object(h.jsxs)("div",{className:"subjects__header",children:[Object(h.jsx)("h1",{children:"Aineet"}),Object(h.jsx)("span",{children:"Klikkaa kurssia asettaaksesi sen suoritetuksi"})]}),Object(h.jsxs)("div",{className:"subjects__content",children:[Object(h.jsxs)("div",{className:"subjects__summary",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Suoritettu (tunteja)"}),Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"J\xe4ljell\xe4"}),Object(h.jsx)("span",{children:0===this.getTotalTime(i-a,n)?"Kaikki tehty!":this.getTotalTime(i-a,n)})]})]}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{className:"subjects__data",children:b.map((function(t){var n=o.filter((function(e){return e.subject===t.identifier})),i=Array.from({length:9-n.length},(function(e,t){return{id:"empty"+t,name:"empty"}})),s=[].concat(Object(r.a)(n),Object(r.a)(i));return Object(h.jsxs)("div",{className:"subject",children:[Object(h.jsx)("div",{className:"subject__header",children:t.identifier}),Object(h.jsx)("div",{className:"subject__courses",children:s.map((function(t,n){return Object(h.jsx)("div",{onClick:"empty"!==t.name?e.toggleCourseClick.bind(null,t.id):null,className:"subject__course ".concat("empty"===t.name?"subject__course--empty":"subject__course--available"," ").concat(e.state.completedCourses.includes(t.id)?"state-PASSED":""),children:n+1},t.id)}))})]},t.identifier)}))})]})]})]})}}]),n}(s.a.Component);c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.136f9b1d.chunk.js.map