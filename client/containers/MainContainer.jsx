import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItineraryContainer from './ItineraryContainer.jsx'

class MainContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="main">
        <div className="outerbox">
          <h1 id="header">cherizzle's</h1>
          <h2 id="header"> Itinerary Log</h2>
         <ItineraryContainer /> 
        </div>
      </div>
        )
    }
}

export default MainContainer;