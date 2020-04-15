import * as types from '../constants/actionTypes.js';
import { bindActionCreators } from 'redux';

const initialState = {
    citiesList: [],
    lastCityId: 0,
    newCity: '',
    showAllCities: true,
    clickedCityId: '',
    clickedCityName: '',
}

const itineraryReducer = (state = initialState, action) =>{
  let citiesList;
  let showAllCities;
    
  switch(action.type){
    case types.ADD_CITY:
      const newCity = {
          cityId: state.lastCityId + 1, 
          name: action.payload
      }
      
      citiesList = state.citiesList.slice();
      citiesList.push(newCity);

      console.log(citiesList)

      return {
          ...state,
          citiesList,
          lastCityId: state.lastCityId + 1
      }

    case types.DELETE_CITY:
      citiesList = state.citiesList.slice();
      
      for (let el of citiesList){
          if (el.cityId === action.payload){
            citiesList.splice(citiesList.indexOf(el), 1)
            console.log(citiesList)  
          }
      }

      showAllCities = state.showAllCities;
      showAllCities = !state.showAllCities;

      return {
        ...state,
        citiesList,
        showAllCities
    }  

    case types.CITY_CLICKED:
      showAllCities = state.showAllCities;
      showAllCities = !state.showAllCities;

      let clickedCityId = state.clickedCityId;
      let clickedCityName = state.clickedCityName;
      
      if (!showAllCities){
      clickedCityId = action.payload[0];
    
      clickedCityName = action.payload[1];
      console.log(clickedCityName)
      }

    return {
      ...state,
      showAllCities,
      clickedCityId,
      clickedCityName
    }


    default:
        return state;
  }
}

export default itineraryReducer;