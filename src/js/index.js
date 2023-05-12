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
  })
})

//!------------- modals ---------------



modalsJS.span.addEventListener("click", () => {
  modalsJS.modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modalsJS.modal) {
     modalsJS.modal.style.display = "none";
  }
}


eventsJS.eventList.addEventListener("click", (e)=>{
  // const newArr = Array.from(modalsJS.cardEvents)
  const cardEvents = document.querySelectorAll(".event-image")
  cardEvents.forEach((cardEvent) => {
    if (e.target === cardEvent) {
        modalsJS.modal.style.display = "block";
    }
  })
})




//!------------- loader ---------------
window.addEventListener('load', () => {
  loaderJS.mask.classList.add('hide');
  setTimeout(()=>{
    loaderJS.mask.remove();
  }, 3000)
})
