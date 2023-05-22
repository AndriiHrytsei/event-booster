const swicthMode = document.querySelector("#swicthMode")
const headerHtml = document.querySelector("header")
const mainHtml = document.querySelector("main")
const footerHtnl = document.querySelector("footer")

swicthMode.addEventListener("click",() => {
    const cardsHtml = document.getElementsByClassName("event")

    if (swicthMode.classList[1] === "dark") {
        swicthMode.classList.remove("dark");
        swicthMode.classList.add("light");
        headerHtml.classList.remove("dark-header");
        headerHtml.classList.add("light-header");
        mainHtml.classList.remove("dark-main");
        mainHtml.classList.add("light-main");
        footerHtnl.classList.remove("dark-footer");
        footerHtnl.classList.add("light-footer");
        for(let i = 0;i < cardsHtml.length;i++){
            cardsHtml[i].querySelector(".event-h4").style.color= "#000";
            cardsHtml[i].querySelector(".event-location").style.color= "#000";
            
        }
    }
    else{
        swicthMode.classList.remove("light");
        swicthMode.classList.add("dark");
        headerHtml.classList.remove("light-header");
        headerHtml.classList.add("dark-header");
        mainHtml.classList.remove("light-main");
        mainHtml.classList.add("dark-main");
        footerHtnl.classList.remove("light-footer");
        footerHtnl.classList.add("dark-footer");
        for(let i = 0;i < cardsHtml.length;i++){
            cardsHtml[i].querySelector(".event-h4").style.color= "#fff";
            cardsHtml[i].querySelector(".event-location").style.color= "#fff";
        }
    }
})