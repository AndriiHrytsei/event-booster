import * as modalsJS from 'modals.js'

const eventList = document.querySelector(".list-cards")

async function fetchEvents(api){
    const response = await fetch(api)
    const events = await response.json()
    return events
}

fetchEvents("https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S")
    .then(data => {
        renderEvents(data["_embedded"]["events"])
        console.log(data["_embedded"]["events"])
    })

function renderEvents(events) {
    events.forEach(event =>{
        eventList.insertAdjacentHTML("beforeend", `
            <li class="event-1 event">
                <div class="ramka-event"></div>
                <img src=${event["images"][0]["url"]}>
                <h3>${event["name"]}</h3>
                <h4>${event["dates"]["start"]["localDate"]}</h4>
                <p>${event["_embedded"]["venues"][0]["name"]}</p>
            </li>
        `)
    })
}



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

