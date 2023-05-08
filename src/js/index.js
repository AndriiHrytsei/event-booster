import * as modalsJS from './modals.js'
import * as eventsJS from './events.js'
import * as loaderJS from './loader.js'

//!------------- events ---------------
eventsJS.fetchEvents("https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S")
    .then(data => {
        eventsJS.renderEvents(data["_embedded"]["events"])
        console.log(data["_embedded"]["events"])
    })

//!------------- modals ---------------
modalsJS.cardEvents.forEach((cardEvent) => {
  cardEvent.addEventListener('click', () => {
    modalsJS.modal.style.display = "block";
  });
});


modalsJS.span.addEventListener("click", () => {
  modalsJS.modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modalsJS.modal) {
     modalsJS.modal.style.display = "none";
  }
}

//!------------- loader ---------------
window.addEventListener('load', () => {
  loaderJS.mask.classList.add('hide');
  setTimeout(()=>{
    loaderJS.mask.remove();
  }, 3000)
})
