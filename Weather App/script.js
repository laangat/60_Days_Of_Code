const apikey = "c802fc10ef33bd13539b62eb9c732a73";

//selects an element by its ID attribute
const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

//selects an element by its css selector
const formEl = document.querySelector("form");

//listens for input in the input filed and responds to a submit event
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    //sends a GET request to openweathermap api and extracts temperature description and icon
    const response = await fetch(
      //The await keyword is used to wait for the fetch() function to complete before continuing with the rest of the code
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    //when response is returned in json format, it is assigned to data variable
    const data = await response.json();

    //parses the response data 
    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    //updating weather icon
    weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    //updating temperature
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
    //updating description
    weatherDataEl.querySelector(".description").textContent = description;

    //updating details
    weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`)
      .join("");

  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "An error happened, please try again later";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}