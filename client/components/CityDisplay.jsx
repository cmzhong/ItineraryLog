import React from 'react';

const CityDisplay = (props) => {
    return (
        // button that takes them to that specific cities itinerary page
    <button id="city" type="button" onClick={()=>  props.cityClicked( [ props.cityId, props.cityName ] ) }><span className="buttonText">{  props.cityName }</span></button>
    )
}

export default CityDisplay;