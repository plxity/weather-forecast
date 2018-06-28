import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from  'A:\\weatherfor\\weather\\src\\actions\\index.js';
 class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        };
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }


    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term:''
        });
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
            <input className="form-control"
            placeholder="find weather forecast fo your city"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <span className="input-group-btn">

                <button className="btn btn-secondry" type="submit">Submit</button>
            </span>
            </form>


        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);