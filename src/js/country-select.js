export const countrySelect = document.querySelector(".options");
export const wrapper = document.querySelector(".wrapper");
export const selectBtn = document.querySelector(".select-btn");
export const searchInp = document.querySelector(".search-country");
export const countryList = document.querySelectorAll(".countryLi");

export async function fetchCountries(api){
    try {
        const response = await fetch(api);
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.log(error.message);
    }
}

export function renderCountries(countries){
    // const filterCountries = countries.filter(country => country > 15);
    countries.forEach(country => {
            countrySelect.insertAdjacentHTML("beforeend", `
            <li value = "${country["cca2"]}" class="countryLi">${country["name"]["common"]}</li>
            `)
    })
}

// export function searchInputCountry(data){
//     let arr = [];
//     let searchWord = searchInp.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchWord);
//     }).map(data => {
//         let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
//         return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
//     }).join("");
//     options.innerHTML = arr ? arr : `<p style="margin-top: 10px; color: #CCCCCC;;">Sorry. Country not found!</p>`;
// }

//!------



//!------
// countrySelect.addEventListener("click", (event) => {
//     const countryList = document.querySelectorAll(".countryLi");
//         countryList.forEach((countryEl) => {
//         if (event.target === countryEl) {
//             searchInp.value = "";
//             wrapper.classList.remove("active");
//             selectBtn.classList.toggle("active-border");
//             selectBtn.firstElementChild.innerText = event.target.innerText;
//         }
//         });
// });
//!------

// export function searchCountry(countries){
//     searchInp.addEventListener("keyup", () => {
    // let searchWord = searchInp.value.toLowerCase();
    // const array = countries.forEach((countryFilter) => {
    //     return countryFilter.toLowerCase().startsWith(searchWord);
    // })
    // array.forEach(countryFilter => {
    //     let isSelected;
    //     if(countryFilter == selectBtn.firstElementChild.innerText){
    //         isSelected = "selected";
    //     } 
    //     else{
    //         isSelected = "";
    //     }
    //     // let isSelected = countryFilter == selectBtn.firstElementChild.innerText ? "selected" : "";
    //     return `<li value = "${countryFilter["cca2"]}" class="countryLi ${isSelected}">${countryFilter["name"]["common"]}</li>`;
    // })
    // array.join("");
        // options.innerHTML = array ? array : `<p style="margin-top: 10px; color: #CCCCCC;;">Sorry. Country not found!</p>`;
    // });
    // filterCountries(countries)
// }

// export function filterCountries(countries){
//     const array = countries.filter((countryFilter) => {
//         return countryFilter.toLowerCase().startsWith(searchWord);
//     }).map(countryFilter => {
//         let isSelected;
//         if(countryFilter == selectBtn.firstElementChild.innerText){
//             isSelected = "selected";
//         } 
//         else{
//             isSelected = "";
//         }
//         // let isSelected = countryFilter == selectBtn.firstElementChild.innerText ? "selected" : "";
//         return `<li value = "${countryFilter["cca2"]}" class="countryLi ${isSelected}">${countryFilter["name"]["common"]}</li>`;
//     }).join("");
//     return options.innerHTML = array ? array : `<p style="margin-top: 10px; color: #CCCCCC;;">Sorry. Country not found!</p>`;
// }


//!------
// selectBtn.addEventListener("click", () => {
//     wrapper.classList.toggle("active");
//     selectBtn.classList.toggle("active-border");
// });
//!------

// const options = document.querySelector(".options");

// let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
//                  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
//                  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
//                  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
//                  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
//                  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

// function addCountry(selectedCountry) {
//     options.innerHTML = "";
//     countries.forEach(country => {
//         let isSelected = country == selectedCountry ? "selected" : "";
//         let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
//         options.insertAdjacentHTML("beforeend", li);
//     });
// }
// addCountry();

// function updateName(selectedLi) {
    // searchInp.value = "";
    // addCountry(selectedLi.innerText);
    // wrapper.classList.remove("active");
    // selectBtn.firstElementChild.innerText = selectedLi.innerText;
    // selectBtn.classList.toggle("active-border");
// }

// searchInp.addEventListener("keyup", () => {
//     let arr = [];
//     let searchWord = searchInp.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchWord);
//     }).map(data => {
//         let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
//         return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
//     }).join("");
//     options.innerHTML = arr ? arr : `<p style="margin-top: 10px; color: #CCCCCC;;">Sorry. Country not found!</p>`;
// });

// selectBtn.addEventListener("click", () => {
//     wrapper.classList.toggle("active");
//     selectBtn.classList.toggle("active-border");
// });