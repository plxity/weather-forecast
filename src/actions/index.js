import axios from 'axios';
const API_KEY ='0f70694573c49d27636464d0cbc09222';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_DATA = 'FETCH_DATA';
export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},us`;
    const request =axios.get(url);
    console.log(request);
    return{
        type:FETCH_DATA,
        payload:request
    };


}