import * as types from '../constants/actionTypes'

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