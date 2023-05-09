export const countrySelect = document.querySelector(".search-by-country")

export async function fetchCountries(api){
    try {
        const response = await fetch(api)
        const countries = await response.json()
        return countries
    } catch (error) {
        console.log(error.message);
    }
}

export function renderCountries(countries){
    countries.forEach(country => {
        countrySelect.insertAdjacentHTML("beforeend", `
            <option value = "${country["cca2"]}">${country["name"]["common"]}</option>
        `)
    })
}