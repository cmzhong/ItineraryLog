import * as types from '../constants/actionTypes'
import axios from 'axios'

export const addCity = (name) => ({
    type: types.ADD_CITY,
    payload: name
})

export const deleteCity = (cityId) => ({
    type: types.DELETE_CITY,
    payload: cityId
})

export const cityClicked = ( [ cityId, cityName ] ) => ({
    type: types.CITY_CLICKED,
    payload: [ cityId, cityName ]
})

export const addList = ([ cityId, listName, addItem ]) => ({
    type: types.ADD_LIST,
    payload: [ cityId, listName, addItem ]
})


export const loadCities = () => {
    return (dispatch)=>{
      axios.get('/api')
      .then((response)=> { 
          dispatch(allCities(response)) 
        })
      .catch(err => console.log('error in axios get :', err))
    }
}

export const allCities = (data) => ({
    type: types.LOAD_CITIES,
    payload: data
})
