import * as modalsJS from "./modals.js";
import * as eventsJS from "./events.js";
import * as countrySelcetJS from "./country-select.js";
import * as loaderJS from "./loader.js";

countrySelcetJS
  .fetchCountries("https://restcountries.com/v3.1/all")
  .then((data) => {
    countrySelcetJS.renderCountries(data);
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

//* ==============================================
const paginationBox = document.querySelector('.pagination')//****ДОБАВИТИ СТИЛІ */
eventsJS.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  eventsJS.eventList.replaceChildren("");
  paginationBox.innerHTML = ""
  eventsJS
    .fetchEvents(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventsJS.eventInput.value}&size=30&countryCode=${countrySelcetJS.countrySelect.value}`
    )
    .then((data) => {

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
        }
        // Додавання контейнера пагінації до сторінки
        

        // eventsJS.eventList.parentNode.appendChild(paginationBox);
      }

      renderPage(currentPage);
      renderPagination();


// ------MODAL-----

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
//!------------- modals ---------------

//!------------- loader ---------------
window.addEventListener("load", () => {
  loaderJS.mask.classList.add("hide");
  setTimeout(() => {
    loaderJS.mask.remove();
  }, 3000);
});

//!------------- pagination ---------------
// //Запит
// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// }
// // Загальні змінні
// const dataList = []; // Масив з даними
// const itemsPerPage = 5; // Кількість елементів на сторінці
// let currentPage = 1; // Поточна сторінка

// // Функція для генерації списку даних
// function generateDataList() {
//   for (let i = 1; i <= 50; i += 1) {
//     dataList.push("Елемент " + i);
//   }
// }

// // Функція для відображення даних на поточній сторінці
// function displayDataOnPage() {
//   const dataListElement = document.getElementById("dataList");
//   dataListElement.innerHTML = ""; // Очищаємо список перед відображенням нових даних

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentPageData = dataList.slice(startIndex, endIndex);

//   currentPageData.forEach(function (data) {
//     const li = document.createElement("li");
//     li.innerText = data;
//     dataListElement.appendChild(li);
//   });
// }

// // Функція для генерації посилань пагінації
// function generatePaginationLinks() {
//   const paginationElement = document.getElementById("pagination");
//   paginationElement.innerHTML = ""; // Очищаємо пагінацію перед генерацією нових посилань

//   var totalPages = Math.ceil(dataList.length / itemsPerPage);

//   for (let i = 1; i <= totalPages; i++) {
//     var link = document.createElement("a");
//     link.href = "#";
//     link.innerText = i;

//     // Додаємо обробник подій для зміни поточної сторінки при кліку на посилання
//     link.addEventListener("click", function (event) {
//       currentPage = parseInt(event.target.innerText);
//       displayDataOnPage();
//     });

//     paginationElement.appendChild(link);
//   }
// }

// // Ініціалізація пагінації
// function initializePagination() {
//   generateDataList();
//   generatePaginationLinks();
//   displayDataOnPage();
// }

// // Запускаємо пагінацію
// initializePagination();
