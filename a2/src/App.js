/*********************************************************************************
* BTI425 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Priya Khatri Student ID: 110149176 Date: April 15, 2021
*
*
********************************************************************************/

const api = {
  key: "45345d2a24fd312c6442bd65e9ef6d20",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if(evt.keyCode === 13) { //13 means the enter key 
      getResults(searchbox.value);
      //console.log(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
      return weather.json();
  })
  .then(displayResults);
}
function displayResults (weather){
  //console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerHTML = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low'); //math.round rounds the numbers so we don't get decimals in temp
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c  / ${Math.round
  (weather.main.temp_max)}°c`;

}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
  let days = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}