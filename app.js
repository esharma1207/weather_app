const api_key = "26739281d4846f5ff47eb2b1cee63f79"
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=delhi"

async function checkWeather(){
    const res = await fetch(api_url + `&appid=${api_key}`);
    var data = await res.json()

}