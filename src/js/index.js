import * as modalsJS from './modals.js'
import * as eventsJS from './events.js'
import * as countrySelcetJS from './country-select.js'

countrySelcetJS.fetchCountries("https://restcountries.com/v3.1/all")
  .then(data => {
    countrySelcetJS.renderCountries(data)
  })


eventsJS.searchForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  eventsJS.eventList.replaceChildren("")
  eventsJS.fetchEvents(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventsJS.eventInput.value}&size=20`)
    .then(data => {
      eventsJS.renderEvents(data["_embedded"]["events"])
  })
})


modalsJS.span.addEventListener("click", () => {
    modalsJS.modal.style.display = "none";
  })
  
  modalsJS.cardEvents.forEach((cardEvent) => {
    cardEvent.addEventListener('click', () => {
      modal.style.display = "block";
    });
  });
  
  window.onclick = function(event) {
    if (event.target == modalsJS.modal) {
        modalsJS.modal.style.display = "none";
    }
  }

