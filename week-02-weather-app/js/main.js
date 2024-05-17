import 'bootstrap/dist/css/bootstrap.min.css';
import { getJSON } from './util';

const BASE_ENDPOINT = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '52fc99a956494caea7b135022179925e';

document
  .querySelector('.frm.weather')
  .addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const location = evt.target.elements['location'].value;

    // TODO: include basic validation

    const currentWeatherEndpoint = `${BASE_ENDPOINT}weather?units=metric&q=${location}&appid=${API_KEY}`;
    const currentWeather = await getJSON(currentWeatherEndpoint);

    // TODO: create and call a function to display the weather data in the DOM
    console.log(currentWeather);
  });

// TODO: get the five-day forecast data
