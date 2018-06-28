import { combineReducers } from 'redux';
import WeatherReducer from 'A:\\weatherfor\\weather\\src\\containers\\reducer.js';
const rootReducer = combineReducers({
  weather :WeatherReducer
});

export default rootReducer;
