let search=document.querySelector("#search");
let icon=document.querySelector("#icon");
let main=document.querySelector(".main");
let container=document.querySelector(".container");
let wind=document.querySelector(".wind");
let humidity=document.querySelector(".humidity");
const apikey="1c1690c4051be501c5e7ca2c8259dbc0"
icon.addEventListener("click",()=>{
    let city=search.value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
        main.innerText="Temperature\n"+data.main.temp+"°C"+"\n"+data.weather[0].description;
        wind.innerText="Wind Speed\n"+data.wind.speed+"Km/hr";
        humidity.innerText="Humidity\n"+data.main.humidity+"%";
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        console.log(data.wind.speed);

        if(data.weather[0].description==="heavy intensity rain"){
            container.style.backgroundImage="url('rain.jpg')";
        }
    })
    .catch(error=>{
        console.log("error");
    })
});

