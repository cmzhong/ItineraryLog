import { combineReducers } from 'redux';

// import all reducers here
import itineraryReducer from './itineraryReducer.js';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  itinerary: itineraryReducer,
});

// make the combined reducers available for import
export default reducers;
