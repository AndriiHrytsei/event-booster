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
            <li value="${country["cca2"]}" class="countryLi">${country["name"]["common"]}</li>
            `)
    })
}

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