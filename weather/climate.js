const { response } = require('express');
const fetch = require('node-fetch');
let api_key = "efc6da6308d703ed7a0e8788397ba5cb";
let city = 'london';
let api_url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${city}&appid=${api_key}';

fetch (api_url)
.then((response)=> response.json())
.then((date )=> console.log(data))
.catch((err)=> console.log(err));