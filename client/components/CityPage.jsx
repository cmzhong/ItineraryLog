import React from 'react';

const CityPage = (props) => {
  return (
    <div>
      <h4>{ props.clickedCityName }</h4>  
      <h5>Things and Sights</h5>
      <h5>Feeding Grounds</h5>
      <h5>Hydration Station</h5>
      <h5>Notes</h5>
      <button type="button" onClick={ ()=> { if (window.confirm('Are you sure you want to delete this item?')) props.deleteCity(props.clickedCityId) } }>Delete this City</button>
      <button type="button" onClick={ ()=> props.cityClicked([]) }>Back to all Cities</button>
    </div>
  )
}

export default CityPage;