import React from 'react';

const CreateDeleteCitiesDisplay = props => (
  <div className="innerbox">
    <h3>Create a City</h3>
    <form onSubmit={(e)=> {
        e.preventDefault();
        { props.newDatabaseCity(e.target.childNodes[0].value) }

    }}>

    <input type="text"></input> 
    <button type="submit">Create City</button>
    </form>
  </div>
)

export default CreateDeleteCitiesDisplay;