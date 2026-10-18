
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
let temperature = 69.8980;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(0)}°C outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("#weather").innerHTML = weatherText;