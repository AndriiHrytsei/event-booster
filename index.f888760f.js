const e=document.querySelector("#myModal"),t=document.querySelector(".svg-close"),n=document.querySelectorAll(".event"),s=document.querySelector(".list-cards");const c=document.querySelector(".mask");
//!------------- events ---------------
(async function(e){const t=await fetch(e);return await t.json()})("https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S").then((e=>{e._embedded.events.forEach((e=>{s.insertAdjacentHTML("beforeend",`\n            <li class="event-1 event">\n                <div class="ramka-event"></div>\n                <img src=${e.images[0].url}>\n                <h3>${e.name}</h3>\n                <h4>${e.dates.start.localDate}</h4>\n                <p>${e._embedded.venues[0].name}</p>\n            </li>\n        `)})),console.log(e._embedded.events)})),
//!------------- modals ---------------
n.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),t.addEventListener("click",(()=>{e.style.display="none"})),window.onclick=function(t){t.target==e&&(e.style.display="none")},
//!------------- loader ---------------
window.addEventListener("load",(()=>{c.classList.add("hide"),setTimeout((()=>{c.remove()}),3e3)}));
//# sourceMappingURL=index.f888760f.js.map
