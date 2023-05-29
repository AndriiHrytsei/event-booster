import Notiflix from 'notiflix';
import * as modalsJS from "./modals.js";
import * as eventsJS from "./events.js";
import * as countrySearhJS from "./country-select.js";
import * as loaderJS from "./loader.js";
import * as themeJS from "./theme.js";

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

//!------------- white & black theme ---------------
function addStyle(){
  const ramkaEvents = document.querySelectorAll(".ramka-event");
  const nameEvents = document.querySelectorAll(".event-name");
  const dateEvents = document.querySelectorAll(".event-h4");
  const locationEvents = document.querySelectorAll(".event-location");
  const pageButs = document.querySelectorAll(".pag-but");

  themeJS.switchTheme.addEventListener("click", () => {
    if(themeJS.switchTheme.classList.contains("light-mode")){
      ramkaEvents.forEach((ramka)=>{
        ramka.classList.add("ramka-event-blue");
      })
      nameEvents.forEach((name)=>{
        name.classList.add("event-name-blue"); 
      })
      dateEvents.forEach((date)=>{
        date.classList.add("event-h4-black");  
      })
      locationEvents.forEach((location)=>{
        location.classList.add("event-location-black"); 
      })
      pageButs.forEach((but)=>{
        but.classList.add("pag-but-blue"); 
      })
    } else{
      ramkaEvents.forEach((ramka)=>{
        ramka.classList.remove("ramka-event-blue");
      })
      nameEvents.forEach((name)=>{
        name.classList.remove("event-name-blue"); 
      })
      dateEvents.forEach((date)=>{
        date.classList.remove("event-h4-black");  
      })
      locationEvents.forEach((location)=>{
        location.classList.remove("event-location-black"); 
      })
      pageButs.forEach((but)=>{
        but.classList.remove("pag-but-blue"); 
      })
    }
  })
}

themeJS.switchTheme.addEventListener("click", () => {
  themeJS.switchTheme.classList.toggle("light-mode");
  //todo------------- header -------------
  themeJS.headerHtml.classList.toggle("light-header");
  themeJS.svgLogo.classList.toggle("svg-logo-dark");
  
  //todo------------- input & select -------------
  themeJS.searchHeader.classList.toggle("search-header-blue");
  themeJS.searchInput.classList.toggle("search-by-s-light");
  themeJS.searchButton.classList.toggle("search-by-s-btn-light");
  themeJS.selectWrapperCountry.classList.toggle("wrapper-light"); 

  //todo------------- main & footer -------------
  themeJS.mainHtml.classList.toggle("light-main");
  themeJS.footerHtml.classList.toggle("light-footer");

  //todo------------- icons & notification-------------
  if(themeJS.switchTheme.classList.contains("light-mode")){
    themeJS.iconSun.style.display = "none";
    themeJS.iconMoon.style.display = "block";

    Notiflix.Notify.init({
      failure: {
      background: '#000000',
      textColor: '#FFFFFF',
      childClassName: 'notiflix-notify-failure',
      notiflixIconColor: '#DC56C5',
      fontAwesomeClassName: 'fas fa-times-circle',
      fontAwesomeIconColor: '#DC56C5',
      backOverlayColor: 'rgba(255,85,73,0.2)',
      fontFamily: 'Montserrat',
      }
    })
  } else{
    themeJS.iconSun.style.display = "block";
    themeJS.iconMoon.style.display = "none";
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
  }
  addStyle();
} )

//!------------- pagination ---------------
const paginationBox = document.querySelector('.pagination')//* Додати стилі */
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
        Notiflix.Notify.failure("Sorry, there are no events matching your search query. Please try again.");
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
        addStyle();
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
          button.classList.add("pag-but");

          const changeTheme = document.querySelector(".thema-mode");
          let pageButClass = "";
          

          if(changeTheme.classList.contains("light-mode")){
            pageButClass = "pag-but-blue";
            button.classList.add(pageButClass);
            console.log(pageButClass);
          }
          addStyle();
        }
        // Додавання контейнера пагінації до сторінки
        

        // eventsJS.eventList.parentNode.appendChild(paginationBox);
      }

      renderPage(currentPage);
      renderPagination();
    })
  
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
});

//!------------- loader ---------------
window.addEventListener("load", () => {
  loaderJS.mask.classList.add("hide");
  setTimeout(() => {
    loaderJS.mask.remove();
  }, 1000);
});