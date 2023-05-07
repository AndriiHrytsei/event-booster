export const eventList = document.querySelector(".list-cards")

export async function fetchEvents(api){
    const response = await fetch(api)
    const events = await response.json()
    return events
}



export function renderEvents(events) {
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