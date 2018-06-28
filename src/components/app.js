import React, { Component } from 'react';
import WeatherList from 'A:\\weatherfor\\weather\\src\\containers\\weatherlist.js';
import SearchBar from 'A:\\weatherfor\\weather\\src\\containers\\seacr-bar.js';
export default class App extends Component {
  render() {
    return (
      <div>
        
       
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
