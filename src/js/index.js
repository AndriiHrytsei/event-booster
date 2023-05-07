import * as modalsJS from './modals.js'
import * as eventsJS from './events.js'

eventsJS.fetchEvents("https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S")
    .then(data => {
        eventsJS.renderEvents(data["_embedded"]["events"])
        console.log(data["_embedded"]["events"])
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

