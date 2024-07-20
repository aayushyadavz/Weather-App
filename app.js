const apiKey = "1cc31b48f1de8edb8ad7be23b5506a26";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        let data = await response.json();
        console.log(data);
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C"
        document.querySelector(".city").textContent = data.name
        document.querySelector(".humidity").textContent = data.main.humidity + "%"
        document.querySelector(".wind").textContent = data.wind.speed + " km/h"
    
        if (data.weather[0].main == "Clear") {
            weatherImg.src = "./images/clear.png"
        } else if (data.weather[0].main == "Clouds") {
            weatherImg.src = "./images/clouds.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "./images/drizzle.png"
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "./images/rain.png"
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "./images/mist.png"
        }  
        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block"
    }


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
})