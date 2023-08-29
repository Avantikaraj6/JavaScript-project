const apiKey="aadf1304548dfaedf2739e822e461421";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox= document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const weatherImg = document.querySelector(".weather-img");

async function weatherapp(city){
    const response = await fetch( apiUrl +city + `&appid=${apiKey}` );
    const data= await response.json();
    
    console.log(data)
    document.querySelector(".humidity").innerHTML= data.main.humidity + "°C";           
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";           
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/hr";  
    document.querySelector(".city").innerHTML= data.name;  

    if ( data.weather[0].main == "Clouds"){
        weatherImg.src ="images/clouds.png"
    }
    else if ( data.weather[0].main == "Clear"){
        weatherImg.src ="images/clear.png"
    }
    else if ( data.weather[0].main == "Mist"){
        weatherImg.src ="images/mist.png"
    }
    else if ( data.weather[0].main == "Drizzle"){
        weatherImg.src ="images/drizzle.png"
    }
    else {
        weatherImg.src ="images/rain.png"
    }
    
    
}

searchIcon.addEventListener("click",()=>{ weatherapp(searchBox.value)});