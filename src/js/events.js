export const eventList = document.querySelector(".list-cards");
export const eventInput = document.querySelector(".search-by-s");
export const countryInput = document.querySelector(".options");
export const searchForm = document.querySelector(".search-form");

const changeTheme = document.querySelector(".thema-mode");

export async function fetchEvents(api){
    try{
        const response = await fetch(api)
        const events = await response.json()
        return events
    } catch (error){
        console.log(error.message);
    }
}

export function renderEvents(events) {
    let ramkaClass = "";
    let eventNameClass = "";
    let eventDateClass = "";
    let eventLocationClass = "";

    if(changeTheme.classList.contains("light-mode")){
        ramkaClass = "ramka-event-blue";
        eventNameClass = "event-name-blue";
        eventDateClass = "event-h4-black";
        eventLocationClass = "event-location-black"; 
    }

    events.forEach(event => {
        eventList.insertAdjacentHTML("beforeend", `
            <li class="event">
            <div class="ramka-event ${ramkaClass}"></div>
            <img class="event-image" src=${event["images"][0]["url"]}
                data-name="${event["name"]}"
                data-eventimghead="${event["images"][0]["url"]}"
                data-eventimgmain="${event["images"][2]["url"]}"
                data-date="${event["dates"]["start"]["localDate"]}"
                data-time="${event["dates"]["start"]["localTime"]}"
                data-timezone="${event["dates"]["timezone"]}"
                data-city="${event["_embedded"]["venues"][0]["city"]["name"]}"
                data-country="${event["_embedded"]["venues"][0]["country"]["name"]}"
                data-place="${event["_embedded"]["venues"][0]["name"]}"
                data-who="${event["name"]}"
                data-info="${event["info"]}"
            >
                <h3 class="event-name ${eventNameClass}">${event["name"]}</h3>
                <h4 class = "event-h4 ${eventDateClass}">${event["dates"]["start"]["localDate"]}</h4>
                <p class = "event-location ${eventLocationClass}">
                    ${event["_embedded"]["venues"][0]["name"]}
                </p>
            </li>
        `)
        const eventLocations = document.querySelectorAll(".event-location")
        eventLocations.forEach(eventLocation => {
            if (!event["_embedded"]["venues"][0]["name"]){
                eventLocation.textContent = "Location not given"
            }
        })
    })
}
