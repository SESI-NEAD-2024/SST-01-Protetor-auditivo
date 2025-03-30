import{createApp}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";import CarouselSst from"./components/carousel-sst.js";import Sidebar from"./components/sidebar.js";import Navbar from"./components/navbar.js";import Hero from"./components/hero.js";import AppFooter from"./components/app-footer.js";import Concluir from"./components/concluir.js";import carouselSst02 from"./components/carousel-sst-02.js";import carouselSstCardsReveal from"./components/carousel-sst-cards-reveal.js";let app=createApp({components:{Sidebar:Sidebar,Navbar:Navbar,Hero:Hero,AppFooter:AppFooter,Concluir:Concluir,CarouselSst:CarouselSst,carouselSst02:carouselSst02,carouselSstCardsReveal:carouselSstCardsReveal},mounted(){document.getElementById("loading").style.display="none",document.getElementById("content").style.opacity="1",window.addEventListener("scroll",this.handleScroll),AOS.init({delay:50});let e=document.querySelectorAll(".collapsible"),o=(M.Collapsible.init(e,{}),document.querySelectorAll(".tooltipped")),t=(M.Tooltip.init(o,{}),document.querySelectorAll(".materialboxed")),r=(M.Materialbox.init(t,{}),document.querySelector(".slide-cards")),s=!1,l,n;r.addEventListener("mousedown",e=>{s=!0,r.classList.add("active"),l=e.pageX-r.offsetLeft,n=r.scrollLeft,r.style.cursor="grabbing"}),r.addEventListener("mouseleave",()=>{s=!1,r.classList.remove("active"),r.style.cursor="grab"}),r.addEventListener("mouseup",()=>{s=!1,r.classList.remove("active"),r.style.cursor="grab"}),r.addEventListener("mousemove",e=>{s&&(e.preventDefault(),e=3*(e.pageX-r.offsetLeft-l),r.scrollLeft=n-e)})},methods:{handleScroll(){var o=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.querySelectorAll(".determinate").forEach(e=>{e.style.width=o+"%"}),document.querySelector(".progress-box__number").innerHTML=Math.round(o)+"%"},pulseReview(e){e.target.parentElement.querySelector(".scale-transition").classList.toggle("scale-in")}}});app.mount("#app");