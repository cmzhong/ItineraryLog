import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateDeleteCitiesDisplay from '../components/CreateDeleteCitiesDisplay';
import CitiesDisplay from '../components/CitiesDisplay';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
    citiesList: state.itinerary.citiesList,
    lastCityId: state.itinerary.lastCityId,
    newCity: state.itinerary.newCity,
    showAllCities: state.itinerary.showAllCities,
    clickedCityId: state.itinerary.clickedCityId,
    clickedCityName: state.itinerary.clickedCityName
})

const mapDispatchToProps = dispatch =>({
  addCity: (name)=>dispatch(actions.addCity(name)),
  deleteCity: (cityId)=>dispatch(actions.deleteCity(cityId)),
  cityClicked: ([ cityId, cityName ])=>dispatch(actions.cityClicked( [ cityId, cityName ] )),
  loadCities: ()=>dispatch(actions.loadCities()),
  newDatabaseCity: (name)=>dispatch(actions.newDatabaseCity(name)),
  deleteDatabaseCity: ([ name, id ])=>dispatch(actions.deleteDatabaseCity([ name, id ]))
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
            <div className="innerbox">
                <CreateDeleteCitiesDisplay newDatabaseCity={ this.props.newDatabaseCity } addCity={ this.props.addCity } /> 
                <CitiesDisplay citiesList={ this.props.citiesList } cityClicked={ this.props.cityClicked } 
                showAllCities={ this.props.showAllCities } clickedCityId={ this.props.clickedCityId } 
                clickedCityName={ this.props.clickedCityName } deleteCity={ this.props.deleteCity }
                deleteDatabaseCity={ this.props.deleteDatabaseCity } /> 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryContainer);

