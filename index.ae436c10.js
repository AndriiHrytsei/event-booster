const e=document.querySelector("#myModal"),t=document.querySelector(".svg-close"),n=document.querySelectorAll(".event"),c=document.querySelector(".list-cards"),o=document.querySelector(".search-by-s"),s=(document.querySelector(".search-by-country"),document.querySelector(".search-form"));async function r(e){try{const t=await fetch(e);return await t.json()}catch(e){console.log(e.message)}}const a=document.querySelector(".search-by-country");const d=document.querySelector(".mask");(async function(e){try{const t=await fetch(e);return await t.json()}catch(e){console.log(e.message)}})("https://restcountries.com/v3.1/all").then((e=>{e.forEach((e=>{a.insertAdjacentHTML("beforeend",`\n            <option value = "${e.cca2}">${e.name.common}</option>\n        `)}))})),s.addEventListener("submit",(e=>{e.preventDefault(),c.replaceChildren(""),r(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${o.value}&size=20`),
//!------------- events ---------------
r("https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S").then((e=>{e._embedded.events.forEach((e=>{c.insertAdjacentHTML("beforeend",`\n            <li class="event">\n                <div class="ramka-event"></div>\n                <img src=${e.images[0].url}>\n                <h3>${e.name}</h3>\n                <h4>${e.dates.start.localDate}</h4>\n                <p>${e._embedded.venues[0].name}</p>\n            </li>\n        `)}))}))})),
//!------------- modals ---------------
n.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),t.addEventListener("click",(()=>{e.style.display="none"})),window.onclick=function(t){t.target==e&&(e.style.display="none")},
//!------------- loader ---------------
window.addEventListener("load",(()=>{d.classList.add("hide"),setTimeout((()=>{d.remove()}),3e3)}));
//# sourceMappingURL=index.ae436c10.js.map
