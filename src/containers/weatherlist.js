import React from 'react';
import GoogleMap from '../components/map';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from 'A:\\weatherfor\\weather\\src\\components\\chart.js';
class WeatherList extends React.Component{

    renderWeather(cityData){

        const temps =cityData.list.map(weather =>weather.main.temp);
        const pressure =cityData.list.map(weather =>weather.main.pressure);
        const humidity =cityData.list.map(weather =>weather.main.humidity);
        const {lat,lon} = cityData.city.coord;
        console.log(temps);
        return (
        
        <tr key ={cityData.city.name}>
           
            
                <td><GoogleMap lat={lat} lon={lon}/></td>
            
            <td>
                    <Chart data={temps}  color="orange" units ="K"/>

            </td>
            <td>
                    <Chart data={pressure}  color="green" units ="hPa"/>

            </td>
            <td>
                    <Chart data={humidity}  color="blue" units="%"/>

            </td>
         </tr>
            );
    }
    render()
    {
        return(
                <table className="table table-hover">
                    <thead>
                        <tr>
                            
                           <th> City </th>
                           <th> temperature (K)</th>
                           <th> pressure (hPA)</th>
                           <th> humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>

                </table>

        );
    }
}
function mapStateToProps(state){
    return {
        weather :state.weather
    };
}
export default connect(mapStateToProps)(WeatherList);