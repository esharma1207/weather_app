const api_key = "26739281d4846f5ff47eb2b1cee63f79"
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=imperial"

const searchbar = document.querySelector(".search input");
const button = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const res = await fetch(api_url + `&q=${city}`  + `&appid=${api_key}`);
    if(res.status = 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await res.json()

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " mph";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    
    }


}

button.addEventListener("click", () => {

    checkWeather(searchbar.value);
}

)

