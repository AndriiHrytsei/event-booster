import Notiflix from 'notiflix';
import * as modalsJS from "./modals.js";
import * as eventsJS from "./events.js";
import * as countrySearhJS from "./country-select.js";
import * as loaderJS from "./loader.js";
import * as themeJS from "./theme_white_and_dark.js";

//!------------- notification ---------------

Notiflix.Notify.init({
  failure: {
  background: '#FFFFFF',
  textColor: '#000000',
  childClassName: 'notiflix-notify-failure',
  notiflixIconColor: '#DC56C5',
  fontAwesomeClassName: 'fas fa-times-circle',
  fontAwesomeIconColor: '#DC56C5',
  backOverlayColor: 'rgba(255,85,73,0.2)',
  fontFamily: 'Montserrat',
  }
})

//!------------- country select ---------------
countrySearhJS
  .fetchCountries("https://restcountries.com/v3.1/all")
  .then((data) => {
    countrySearhJS.renderCountries(data);
    // countrySearhJS.searchCountry(data);
});

countrySearhJS.selectBtn.addEventListener("click", () => {
  countrySearhJS.wrapper.classList.toggle("active");
  countrySearhJS.selectBtn.classList.toggle("active-border");
});

countrySearhJS.countrySelect.addEventListener("click", (event) => {
  const countryList = document.querySelectorAll(".countryLi");
      countryList.forEach((countryEl) => {
      if (event.target === countryEl) {
        if(event.target.getAttribute("value") === "nothing"){
          countrySearhJS.selectBtn.firstElementChild.setAttribute("value", "");
        } else{
          countrySearhJS.selectBtn.firstElementChild.setAttribute("value", `${event.target.getAttribute("value")}`);
        }
        
        console.log(event.target.getAttribute("value"));
        countrySearhJS.wrapper.classList.remove("active");
        countrySearhJS.selectBtn.classList.toggle("active-border");
        countrySearhJS.selectBtn.firstElementChild.innerText = event.target.innerText;
      }
      });
});

//!------------- events ---------------
// eventsJS.searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   eventsJS.eventList.replaceChildren("");
//   eventsJS
//     .fetchEvents(
//       `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventsJS.eventInput.value}&size=20&countryCode=${countrySelcetJS.countrySelect.value}`
//     )
//     .then((data) => {
//       eventsJS.renderEvents(data["_embedded"]["events"]);
//       eventsJS.eventList.addEventListener("click", (e) => {
//         const cards = document.querySelectorAll(".event-image");
//         cards.forEach((card) => {
//           if (e.target === card) {
//             modalsJS.modal.style.display = "flex";
//             modalsJS.eventImgHead.src = e.target.dataset.eventimghead;
//             modalsJS.eventImgMain.src = e.target.dataset.eventimgmain;
//             modalsJS.date.textContent = e.target.dataset.date;
//             modalsJS.time.textContent = `${e.target.dataset.time} (${e.target.dataset.timezone})`;
//             modalsJS.location.textContent = `${e.target.dataset.city}, ${e.target.dataset.country}`;
//             modalsJS.place.textContent = e.target.dataset.place;
//             modalsJS.who.textContent = e.target.dataset.name;
//           }
//         });
//       });

//       modalsJS.span.addEventListener("click", () => {
//         modalsJS.modal.style.display = "none";
//       });

//       window.onclick = function (event) {
//         if (event.target == modalsJS.modal) {
//           modalsJS.modal.style.display = "none";
//         }
//       };
//     });
// });

//!------------- white and black theme ---------------

themeJS.swicthMode.addEventListener("click",() => {
  const cardsHtml = document.querySelectorAll("event");
  const buttonPag = document.querySelectorAll("pag-but");

  if (themeJS.swicthMode.classList[1] === "dark") {
    themeJS.swicthMode.classList.remove("dark");
    themeJS.swicthMode.classList.add("light");
    themeJS.headerHtml.classList.remove("dark-header");
    themeJS.headerHtml.classList.add("light-header");
    themeJS.mainHtml.classList.remove("dark-main");
    themeJS.mainHtml.classList.add("light-main");
    themeJS.footerHtml.classList.remove("dark-footer");
    themeJS.footerHtml.classList.add("light-footer");

    // cardsHtml.forEach((card)=>{
    //   card.querySelector(".event-h4").style.color= "#000";
    //   card.querySelector(".event-location").style.color= "#000";
    // })

    // buttonPag.forEach((but)=>{
    //   but.style.color="#000";
    // })
    for(let i = 0; i < cardsHtml.length; i += 1){
      cardsHtml[i].querySelector(".event-h4").style.color= "#000";
      cardsHtml[i].querySelector(".event-location").style.color= "#000";
    }
    for(let i = 0; i < 10; i += 1){
       buttonPag[i].style.color="#000"
    }
    
  }
  else{
      themeJS.swicthMode.classList.remove("light");
      themeJS.swicthMode.classList.add("dark");
      themeJS.headerHtml.classList.remove("light-header");
      themeJS.headerHtml.classList.add("dark-header");
      themeJS.mainHtml.classList.remove("light-main");
      themeJS.mainHtml.classList.add("dark-main");
      themeJS.footerHtml.classList.remove("light-footer");
      themeJS.footerHtml.classList.add("dark-footer");

      // cardsHtml.forEach((card)=>{
      //     card.querySelector(".event-h4").style.color= "#fff";
      //     card.querySelector(".event-location").style.color= "#fff";
      // })
      // buttonPag.forEach((but)=>{
      //   but.style.color="#fff";
      // })

      for(let i = 0; i < cardsHtml.length; i += 1){
          cardsHtml[i].querySelector(".event-h4").style.color= "#fff";
          cardsHtml[i].querySelector(".event-location").style.color= "#fff";
      }
      for(let i = 0;i < 10;i++){
          buttonPag[i].style.color="#fff"
      }
  }
})

//!------------- pagination ---------------
const paginationBox = document.querySelector('.pagination')//****ДОБАВИТИ СТИЛІ */
eventsJS.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  eventsJS.eventList.replaceChildren("");
  paginationBox.replaceChildren("")

  eventsJS
    .fetchEvents(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventsJS.eventInput.value}&size=200&countryCode=${countrySearhJS.selectBtn.firstElementChild.getAttribute("value")}`
    )
    .then((data) => {
      console.log(data["page"]["totalElements"]);

      if(data["page"]["totalElements"] === 0){
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      }
      const events = data["_embedded"]["events"];
      const eventsPerPage = 20; // Кількість подій на сторінці
      const totalPages = Math.ceil(events.length / eventsPerPage); // Загальна кількість сторінок
      let currentPage = 1; // Початкова сторінка

      // Функція для рендерингу подій на поточній сторінці
      function renderPage(page) {
        eventsJS.eventList.replaceChildren("");
        const startIndex = (page - 1) * eventsPerPage;
        const endIndex = page * eventsPerPage;
        const eventsToRender = events.slice(startIndex, endIndex);
        eventsJS.renderEvents(eventsToRender);
      }

      // Функція для відображення посторінкової навігації
      function renderPagination() {
        // const paginationContainer = document.createElement("div");
        // paginationContainer.classList.add("pagination");
        // paginationContainer.innerHTML = "";

        // Створення кнопок для кожної сторінки
        for (let i = 1; i <= totalPages; i += 1) {
          const button = document.createElement("button");
          button.textContent = i;
          button.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
          });
          paginationBox.appendChild(button);
          button.classList.add("pag-but")
        }
        // Додавання контейнера пагінації до сторінки
        

        // eventsJS.eventList.parentNode.appendChild(paginationBox);
      }

      renderPage(currentPage);
      renderPagination();

  
//!------------- modals ---------------
  eventsJS.eventList.addEventListener("click", (e) => {
    const cards = document.querySelectorAll(".event-image");
      cards.forEach((card) => {
        if (e.target === card) {
          modalsJS.modal.style.display = "flex";
          modalsJS.eventImgHead.src = e.target.dataset.eventimghead;
          modalsJS.eventImgMain.src = e.target.dataset.eventimgmain;
          modalsJS.date.textContent = e.target.dataset.date;
          modalsJS.time.textContent = `${e.target.dataset.time} (${e.target.dataset.timezone})`;
          modalsJS.location.textContent = `${e.target.dataset.city}, ${e.target.dataset.country}`;
          modalsJS.place.textContent = e.target.dataset.place;
          modalsJS.who.textContent = e.target.dataset.name;
          if (e.target.dataset.info === "undefined"){
            modalsJS.info.textContent = "No info available"
          } else {
            modalsJS.info.textContent = e.target.dataset.info
          }
          if (modalsJS.place.textContent === "undefined"){
            modalsJS.place.textContent = "Location not given"
          } else {
            modalsJS.place.textContent = e.target.dataset.place
          }
        }
      });
  });

  modalsJS.span.addEventListener("click", () => {
    modalsJS.modal.style.display = "none";
  });

  window.onclick = function (event) {
    if (event.target == modalsJS.modal) {
      modalsJS.modal.style.display = "none";
    }
  };
  })
  // .catch(()=>{
  //   Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");   
  // })
});

//!------------- loader ---------------
window.addEventListener("load", () => {
  loaderJS.mask.classList.add("hide");
  setTimeout(() => {
    loaderJS.mask.remove();
  }, 1000);
});