import{h as e,u as t,i as o,r as a,o as n,c as l,a as s,t as u,w as r,b as h}from"./app.88333f8f.js";var m=e({name:"404",setup(){var e,a,n;const l=t(),s=o(),u=null!=(e=s.value.notFound)?e:["Not Found"];return{getMsg:()=>u[Math.floor(Math.random()*u.length)],homeLink:null!=(a=s.value.home)?a:l.value,homeText:null!=(n=s.value.backToHome)?n:"Back to home"}}});const c={class:"theme-container"},d={class:"theme-default-content"},i=s("h1",null,"404",-1);m.render=function(e,t,o,m,f,v){const k=a("RouterLink");return n(),l("div",c,[s("div",d,[i,s("blockquote",null,u(e.getMsg()),1),s(k,{to:e.homeLink},{default:r((()=>[h(u(e.homeText),1)])),_:1},8,["to"])])])};export default m;
