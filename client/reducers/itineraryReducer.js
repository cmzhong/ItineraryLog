import * as types from '../constants/actionTypes.js';
import { bindActionCreators } from 'redux';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';

const initialState = {
    citiesList: [],
    lastCityId: 0,
    newCity: '',
    showAllCities: true,
    clickedCityId: '',
    clickedCityName: '',
    clickedCityObject: {},
}

const itineraryReducer = (state = initialState, action) =>{
  let citiesList;
  let showAllCities;
    
  switch(action.type){
    case types.ADD_CITY:
      const newCity = {
          cityId: state.lastCityId + 1, 
          name: action.payload,
          things: [],
          food: [],
          drink: [],
          notes: [],
      }
      
      citiesList = state.citiesList.slice();
      citiesList.push(newCity);

      let lastCityId = state.lastCityId + 1;

      return {
          ...state,
          citiesList,
          lastCityId
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
      let clickedCityObject = Object.assign({}, state.clickedCityObject);


      if (!showAllCities){
        clickedCityId = action.payload[0];
        clickedCityName = action.payload[1];
      
        for (let el of state.citiesList){
          if (el.cityId === action.payload[0]){
            clickedCityObject = el;
          }
        }
     }

    return {
      ...state,
      showAllCities,
      clickedCityId,
      clickedCityName,
      clickedCityObject
    }

    case types.ADD_LIST:
      // action payload 
      // [ cityId, listName, addItem ]

    // deep copying an array of obj with arrays..
    citiesList = JSON.parse(JSON.stringify(state.citiesList));
    // shallow copying an obj
    clickedCityObject = Object.assign({}, state.clickedCityObject);

    for (let el of citiesList){
      if (el.cityId === action.payload[0]){
        clickedCityObject = el;
        el[action.payload[1]].push(action.payload[2])
      }
    }
    console.log(clickedCityObject)
    return {
      ...state,
      citiesList,
      clickedCityObject
    }

    case types.LOAD_CITIES:
      console.log('are you in the reducer??');
      console.log(action.payload);
      return {
        ...state,
        citiesList: action.payload
      }

    default:
        return state;
  }
}

export default itineraryReducer;