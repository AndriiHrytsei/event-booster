import * as modalsJS from './modals.js'
import * as eventsJS from './events.js'
import * as countrySelcetJS from './country-select.js'
import * as loaderJS from './loader.js'

countrySelcetJS.fetchCountries("https://restcountries.com/v3.1/all")
  .then(data => {
    countrySelcetJS.renderCountries(data)
  })


//!------------- events ---------------
eventsJS.searchForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  eventsJS.eventList.replaceChildren("")
  eventsJS.fetchEvents(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventsJS.eventInput.value}&size=20&countryCode=${countrySelcetJS.countrySelect.value}`)
    .then(data => {
      eventsJS.renderEvents(data["_embedded"]["events"])
      eventsJS.eventList.addEventListener("click", (e)=>{
        const cards = document.querySelectorAll(".event-image")
        cards.forEach((card) => {
          if (e.target === card) {
            modalsJS.modal.style.display = "block";
            modalsJS.eventImgHead.src = e.target.dataset.eventimghead;
            modalsJS.eventImgMain.src = e.target.dataset.eventimgmain;
            modalsJS.date.textContent = e.target.dataset.date;
            modalsJS.time.textContent = `${e.target.dataset.time} (${e.target.dataset.timezone})`;    
            modalsJS.location.textContent = `${e.target.dataset.city}, ${e.target.dataset.country}`;
            modalsJS.place.textContent = e.target.dataset.place
            modalsJS.who.textContent = e.target.dataset.name
          }
        })
      })

      modalsJS.span.addEventListener("click", () => {
        modalsJS.modal.style.display = "none";
      })
      
      window.onclick = function(event) {
        if (event.target == modalsJS.modal) {
           modalsJS.modal.style.display = "none";
        }
      }
  })
})

//!------------- modals ---------------











//!------------- loader ---------------
window.addEventListener('load', () => {
  loaderJS.mask.classList.add('hide');
  setTimeout(()=>{
    loaderJS.mask.remove();
  }, 3000)
})
