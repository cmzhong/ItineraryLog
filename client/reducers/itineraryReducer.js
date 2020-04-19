import * as types from '../constants/actionTypes.js';
import { bindActionCreators } from 'redux';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { loadCities } from '../actions/actions.js';

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
      let newCity = {
          cityId: '', 
          name: action.payload,
          things: [],
          food: [],
          drink: [],
          notes: [],
      }
      
      citiesList = state.citiesList.slice();
      citiesList.push(newCity);
      loadCities();
      // let lastCityId = state.lastCityId + 1;

      return {
          ...state,
          citiesList,
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

    for (let el of state.citiesList){
      if (el.cityId === action.payload[0]){
        clickedCityObject = el;
        el[action.payload[1]].push(action.payload[2])
      }
    }

    return {
      ...state,
      citiesList,
      clickedCityObject
    }

    case types.LOAD_CITIES:
      const data = action.payload.data;

      citiesList = [];

      for (let el of data){

        let databaseCity = {
          cityId: el._id, 
          name: el.name,
          things: [],
          food: [],
          drink: [],
          notes: [],
        }
        citiesList.push(databaseCity)
      }

      return {
        ...state,
        citiesList,
      }
    
    case types.LOAD_CITY:

    let cityDetails = action.payload.data;

    clickedCityObject = {
      cityId: state.lastCityId, 
      name: state.clickedCityName,
      things: [],
      food: [],
      drink: [],
      notes: [],
    }
      
    for (let el of cityDetails){
      if (el.activity === 'seeing'){
        clickedCityObject.things.push(el.listitem)
      }

      if (el.activity === 'eating'){
        clickedCityObject.food.push(el.listitem)
      }

      if (el.activity === 'drinking'){
        clickedCityObject.drink.push(el.listitem)
      }

      if (el.activity === 'notes'){
        clickedCityObject.notes.push(el.listitem)
      }
    }

    return {
      ...state,
      clickedCityObject
    }


    default:
        return state;
  }

}

export default itineraryReducer;