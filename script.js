const apiKey = "b695e315ee757dedd4703c42a65569d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector('.input_search input')
const searchBtn = document.querySelector('.input_search span')
const cloudImg = document.querySelector('.cloud_img');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    var temprature = data.main.temp;
    var tem_in_C = Math.round(temprature - 273.15);
    var showTemp = document.querySelector('.temp');
    showTemp.innerHTML = `${tem_in_C} °C`;

    var showCity = data.name;
    var city = document.querySelector('.city');
    city.innerHTML = `${showCity}`;

    var windSpeed = data.wind.speed;
    var wind = document.querySelector('.wind');
    wind.innerHTML = `${windSpeed} km/h`;


    var humi = data.main.humidity;
    console.log(humi)
    var humid = document.querySelector('.humidity');
    humid.innerHTML = `${humi} %`;

    if(data.weather[0].main == 'Clouds'){
        cloudImg.src =  'images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
        cloudImg.src =  'images/clear.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        cloudImg.src =  'images/drizzle.png';
    }
    else if(data.weather[0].main == 'Humidity'){
        cloudImg.src =  'images/humidity.png';
    }
    else if(data.weather[0].main == 'Mist'){
        cloudImg.src =  'images/mist.png';
    }
    else if(data.weather[0].main == 'Rain'){
        cloudImg.src =  'images/rain.png';
    }
    else if(data.weather[0].main == 'Snow'){
        cloudImg.src =  'images/snow.png';
    }
    else if(data.weather[0].main == 'Wind'){
        cloudImg.src =  'images/wind.png';
    }
    else{
        console.log("Error")
    }

}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
})


























// const apiKey = "b695e315ee757dedd4703c42a65569d6";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=noida";

// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
    
//     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.temp').innerHTML = data.main.temp + " °C";
//     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//     document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
// }

// checkWeather();
