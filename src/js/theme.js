export const switchTheme = document.querySelector(".thema-mode");
export const iconTheme = switchTheme.querySelector(".icon");

export const headerHtml = document.querySelector("header");
export const svgLogo = document.querySelector(".svg-logo");
export const searchHeader = document.querySelector(".search-header");

export const searchInput = document.querySelector(".search-by-s");
export const searchButton = document.querySelector(".search-by-s-btn");
export const selectWrapperCountry = document.querySelector(".wrapper");

export const mainHtml = document.querySelector("main");
export const footerHtml = document.querySelector("footer");

// switchTheme.addEventListener("click", () => {
//     iconTheme.classList.toggle("icon-dark");
//     switchTheme.classList.toggle("light-mode");

//     if(switchTheme.classList.contains("light-mode")){
//         headerHtml.classList.remove("dark-header");
//         headerHtml.classList.add("light-header");
//         mainHtml.classList.remove("dark-main");
//         mainHtml.classList.add("light-main");
//         footerHtml.classList.remove("dark-footer");
//         footerHtml.classList.add("light-footer");
//     } else{ 
//         headerHtml.classList.remove("light-header");
//         headerHtml.classList.add("dark-header");
//         mainHtml.classList.remove("light-main");
//         mainHtml.classList.add("dark-main");
//         footerHtml.classList.remove("light-footer");
//         footerHtml.classList.add("dark-footer");
//     }
// } )