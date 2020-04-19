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
      .catch(err => console.log('error in axios get loadcities:', err))
    }
}

export const allCities = (data) => ({
    type: types.LOAD_CITIES,
    payload: data
})

export const newDatabaseCity = (name) => {
    return (dispatch)=>{
        axios.post('/api', [ name ] )
        .then((response)=>{
            dispatch(addCity(name))
        })
        .catch(err => console.log('error in axios post :', err))
    }
}

// args = [ name, id ]
export const deleteDatabaseCity = (args) => {

    return (dispatch) =>{
      axios.delete('/api', { params: args })
      .then((response)=>{
        dispatch(deleteCity(args[1]))
       })
      .catch(err => console.log('error in axios delete :', err))
    }
}

export const loadCityData = (cityId) => {
    return (dispatch)=>{
      axios.get('/api/city', { params: { cityId: cityId }})
      .then((response)=> { 
        dispatch(oneCity(response))
        })
      .catch(err => console.log('error in axios get onecity :', err))
    }
}

export const oneCity = (data) => ({
    type: types.LOAD_CITY,
    payload: data
})

// server wants will be [ inputvalue, activity, city_id]
// dispatch function wants [ cityId, listName, addItem ]
export const updateCityDetails = (array)=>{
// [ this.props.clickedCityId, 'notes', e.target.childNodes[0].value, listName, cityName ]
    const cityId = array[0];
    const activity = array[1];
    const input = array[2];
    // const listName = array[3]
    const cityName = array[4]

    return (dispatch)=>{
        axios.post('/api/city', [ input, activity, cityId ])
        .then((response)=>
        dispatch(oneCity(
            [{ 
              listitem: input, 
              activity: activity,
              city: cityName,  
              }]
            )
          )
        )
        .catch(err => console.log('error in axios get updateCityDetails :', err))
        }

}