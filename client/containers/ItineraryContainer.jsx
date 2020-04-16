import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateDeleteCitiesDisplay from '../components/CreateDeleteCitiesDisplay';
import CitiesDisplay from '../components/CitiesDisplay';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
    // itinerary refers to itinerary's value in index.js
    citiesList: state.itinerary.citiesList,
    lastCityId: state.itinerary.lastCityId,
    newCity: state.itinerary.newCity,
    showAllCities: state.itinerary.showAllCities,
    clickedCityId: state.itinerary.clickedCityId,
    clickedCityName: state.itinerary.clickedCityName
})

const mapDispatchToProps = dispatch =>({
  // functions that will dispatch action creators
  // variables are created in actionTypes.js
  addCity: (name)=>dispatch(actions.addCity(name)),
  deleteCity: (cityId)=>dispatch(actions.deleteCity(cityId)),
  cityClicked: ([ cityId, cityName ])=>dispatch(actions.cityClicked( [ cityId, cityName ] )),
  loadCities: ()=>dispatch(actions.loadCities()) 
})

class ItineraryContainer extends Component {
    constructor(props){
        super(props)
    }

  componentDidMount(){
    this.props.loadCities();  
  }

    render(){
        return(
            // maybe change className to innerbox2 later?
            <div className="innerbox">
                <CreateDeleteCitiesDisplay addCity={ this.props.addCity } /> 
                <CitiesDisplay citiesList={ this.props.citiesList } cityClicked={ this.props.cityClicked } 
                showAllCities={ this.props.showAllCities } clickedCityId={ this.props.clickedCityId } 
                clickedCityName={ this.props.clickedCityName } deleteCity={ this.props.deleteCity }/> 
                {/* potential save button */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryContainer);

