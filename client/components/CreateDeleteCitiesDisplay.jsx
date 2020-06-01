import React from 'react';

const CreateDeleteCitiesDisplay = props => (
  <div className="createCity">
    <text className="createCityText">Create a City:</text>
    <form onSubmit={(e)=> {
        e.preventDefault();
        { props.newDatabaseCity(e.target.childNodes[0].value) }

    }}>

    <input type="text" className="input" ></input> 
    <button type="submit" className="submit">Create City</button>
    </form>
  </div>
)

export default CreateDeleteCitiesDisplay;