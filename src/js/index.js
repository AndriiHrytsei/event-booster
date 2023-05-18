import * as modalsJS from "./modals.js";
import * as eventsJS from "./events.js";
import * as countrySelcetJS from "./country-select.js";
import * as loaderJS from "./loader.js";

//! ------------------- country select -------------------

countrySelcetJS
  .fetchCountries("https://restcountries.com/v3.1/all")
  .then((data) => {
    countrySelcetJS.renderCountries(data);
  });

//!------------- pagination ---------------
const paginationBox = document.querySelector('.pagination')//****ДОБАВИТИ СТИЛІ */
eventsJS.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  eventsJS.eventList.replaceChildren("");
  paginationBox.replaceChildren("")
  eventsJS
    .fetchEvents(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventsJS.eventInput.value}&size=200&countryCode=${countrySelcetJS.countrySelect.value}`
    )
    .then((data) => {

      const events = data["_embedded"]["events"];
      console.log(events);
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
  });
});

//!------------- loader ---------------
window.addEventListener("load", () => {
  loaderJS.mask.classList.add("hide");
  setTimeout(() => {
    loaderJS.mask.remove();
  }, 1000);
});