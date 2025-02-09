const apiKey = "341c8aade10df898a55589121ac40a03";
// let city="Ahmedabad";
async function fetchweatherdata(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.wind.speed);
    // console.log(data.main.humidity);
    // console.log(data.visibility);
    updateweatherUI(data);
}
// fetchweatherdata();
let cityElement = document.querySelector(".city");
let tempElement = document.querySelector(".temp");
let windspeed = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let visibility = document.querySelector(".visibility-distance");
let description = document.querySelector(".description-text");
let date = document.querySelector(".date");
// console.log(tempElement);

function updateweatherUI(value) {
    console.log(value);
    cityElement.textContent = value.name;
    tempElement.textContent = `${Math.round(value.main.temp)} °`;
    windspeed.textContent = `${value.wind.speed} KM/H`;
    humidity.textContent = `${value.main.humidity} %`;
    visibility.textContent = `${value.visibility / 1000} KM`;
    description.textContent = currentDate.toDateString();

    const currentDate = new Date();
    date.textContent = value.weather[0].description;
}
const formelement = document.querySelector(".search-form");
const inputelement = document.querySelector(".city-input");
formelement.addEventListener("submit", (event) => {
    event.preventDefault();
    let city = inputelement.value;
    if (city !== '') {
        fetchweatherdata(city);
        inputelement.value = "";
    }
});