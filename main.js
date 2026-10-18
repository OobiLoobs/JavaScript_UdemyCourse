
function showMenu() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
}

function hideMenu() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
}

document.querySelector("#open-nav-menu").addEventListener("click", showMenu);
document.querySelector("#close-nav-menu").addEventListener("click", hideMenu);

const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 68.8980;
let weatherText = "The weather is cloudy in London and it's 22°C outside.";