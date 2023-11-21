var cityInput = document.querySelector(".cityName");
var btn1 = document.querySelector(".submitButton");
var body = document.querySelector('body')

btn1.addEventListener("click", function (name) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=7b1e69ea1de917219b496f12f3636e9a`
  )
    .then((response) => response.json())
    .then((data) => {
      let temp = Math.floor(data["main"].temp - 273);
      let weather = data["weather"][0].description;
      if(temp < 0) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1610720279918-5c4bf290d0a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdpbnRlciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D')"
      }
      if(temp < 5){
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1618630710324-7c88659d3bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdpbnRlciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D')"
      }else if(temp < 10){
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdpbnRlciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D')"
      }else if(weather == 'overcast clouds'){
        body.style.backgroundImage = "url('https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/black-rain-abstract-dark-power-1-1.jpg?w=900')"
      }else if(weather == 'clear sky'){
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D')"
      }else if (weather == "smoke"){
        body.style.backgroundImage = "url('https://climate.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVFxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1501a74c6ee26f3ef9a6f26f25ddf80859bbae31/main_image.jpg')"
      }else if (weather == "broken clouds" || weather == "scattered clouds" || weather == "few clouds"){
        body.style.backgroundImage = "url('https://qph.cf2.quoracdn.net/main-qimg-0a5c39ad8e91540277cefe6f984390e2-lq')"
      }else if(weather == "haze"){
        body.style.backgroundImage = "url('https://media.istockphoto.com/id/1448272612/photo/big-city-at-misty-shanghai.jpg?s=612x612&w=0&k=20&c=mPWwiVQoNUjTQ0N3djRzIHlYieAMAsydhsDljMR_rCg=')"
      }else if(weather == "drizzle" || weather == "light intensity drizzle"){
        body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/hand-blue-umbrella-under-heavy-rain-against-nature-background-rainy-weather-concept-hand-blue-umbrella-under-heavy-rain-153356243.jpg')"
      }

      cityInput.value = "";
      let result = `<div class="weather_info">
      <h1>City : ${data.name}</h1>
      <h1>Country : ${data["sys"].country}</h1>
      <h1>Lattitude : ${data["coord"].lat}</h1>
      <h1>Longitude : ${data["coord"].lon}</h1> 
      <h1>Temp : ${Math.floor(data["main"].temp - 273)} °C</h1>
      <h1> Pressure : ${data["main"].pressure} </h1>
      <h1> Humidity : ${data["main"].humidity}% </h1>
      <h1> Weather : ${data["weather"][0].description} </h1>
      <h1>Speed : <i class="fa-solid fa-wind"></i> ${data["wind"].speed}km/h</h1>
             <div class="weather_clouds">
             <i class="fa-solid fa-cloud"></i>
             <i class="fa-solid fa-cloud"></i>
             <i class="fa-solid fa-cloud"></i> <br>
             <i class="fa-solid fa-cloud"></i>
             <i class="fa-solid fa-cloud"></i>
             </div>
             </div>`;

      let container = document.querySelector(".container");
      container.innerHTML = result;
      console.log(data);
    })
    .catch((err) => alert("invalid city name"));
});

// GET WEATHER USING LONGITUDE AND LATITUDE

let longInput = document.querySelector(".long");
let latInput = document.querySelector(".lat");
let enterBtn = document.querySelector(".enter");
let container = document.querySelector(".container");

enterBtn.addEventListener("click", (event) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latInput.value}&lon=${longInput.value}&appid=7b1e69ea1de917219b496f12f3636e9a`
  )
    .then((response) => response.json())
    .then((data) => {
      longInput.value = "";
      latInput.value = "";
      container.innerHTML += `<div class="weather_info">
        <h2>City : ${data.name}</h2> 
         <h3>Temp = ${Math.floor(data["main"].temp - 273)} °C</h3>
         <h3> Pressure = ${data["main"].pressure} </h3>
         <h3> Humidity = ${data["main"].humidity} </h3>
         <h3> Weather = ${data["weather"].description} </h3>
         <div class="weather_clouds">
         <i class="fa-solid fa-cloud"></i>
         <i class="fa-solid fa-cloud"></i>
         <i class="fa-solid fa-cloud"></i> <br>
         <i class="fa-solid fa-cloud"></i>
         <i class="fa-solid fa-cloud"></i>
         </div>
         </div>`;
      console.log(data);
    })
    .catch((err) => alert("invalid longitude or latitude"));
});
