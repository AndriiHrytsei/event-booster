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
const countrySelect = document.querySelector(".search-by-country")

export function renderEvents(events) {
    events.forEach(event => {
        eventList.insertAdjacentHTML("beforeend", `
            <li class="event">
                <div class="ramka-event"></div>
                <img src=${event["images"][0]["url"]}>
                <h3>${event["name"]}</h3>
                <h4>${event["dates"]["start"]["localDate"]}</h4>
                <p>${event["_embedded"]["venues"][0]["name"]}</p>
            </li>
        `)
    })
}



// // ******pagination******
// export async function main(){

//     let currentPage = 1;
//     let rows = 20;
//     fetchEvents(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Thqn5txrZvBNrP2vPhyOGtn3h4ymZ92S&keyword=${eventInput.value}&size=${rows}&countryCode=${countrySelect.value}&page=${currentPage}`)
//     .then(data => {function displayList(arrData, rowPerPage, page){
//         const postsEl = document.querySelector(`.list-cards`);
//         postsEl.innerHTML =  "";
//         page--;

//         const start = rowPerPage * page;
//         const end = start + rowPerPage;
//         const paginatedData = arrData.slice(start, end);

//         paginatedData.forEach((el) => {
//             const postEl = document.createElement("li")
//             postEl.classList.add("li-nav");
//             postEl.innerText = `${el.title}`;
//             postsEl.appendChild(postEl);
//         })

//     }
//     function displayPagination(arrData, rowPerPage){
//         const paginationEl = document.querySelector(`.ul-nav-bar`);
//         const pagesCount = Math.ceil(arrData.length / rowPerPage);
//         const ulEl = document.createElement("ul")
//         // ulEl.classList.add('CLASS');

//         for(let i = 0; i < pagesCount; i++){
//             const liEl =  displayPaginationBtn(i + 1 );
//             ulEl.appendChild(liEl)
//         }
//         paginationEl.appendChild(ulEl)
//     }
//     function displayPaginationBtn(page){
//         const liEl = document.createElement("li")
//         // liEl.classList.add('CLASS')
//         liEl.innerText = page

//         if (currentPage == page) liEl.classList.add(`.li-nav:focus`)

//         liEl.addEventListener('click', () =>{
//             currentPage = page
//             displayList(data["_embedded"]["events"], rows, currentPage)
//             let currentPageItemLi = document.querySelector('li.li-nav:focus')
//             // currentPageItemLi.classList.remove('.li-nav:focus')
//             liEl.classList.add('.li-nav:focus')
//         })

//         return liEl;
//     }

// displayList(data["_embedded"]["events"], rows, currentPage);
// displayPagination(data["_embedded"]["events"], rows);
// })

// }   
// main()