export const eventList = document.querySelector(".list-cards")
export const eventInput = document.querySelector(".search-by-s")
export const countryInput = document.querySelector(".search-by-country")
export const searchForm = document.querySelector(".search-form")

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
    events.forEach(event => {
        eventList.insertAdjacentHTML("beforeend", `
            <li class="event" 
            
            >
            <div class="ramka-event"></div>
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
            >
                <h3>${event["name"]}</h3>
                <h4>${event["dates"]["start"]["localDate"]}</h4>
                <p>${event["_embedded"]["venues"][0]["name"]}</p>
            </li>
        `)
    })
}