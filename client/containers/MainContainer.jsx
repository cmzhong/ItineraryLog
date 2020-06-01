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
          <h1 id="header"> ItineraryLog</h1>
         <ItineraryContainer /> 
        </div>
      </div>
        )
    }
}

export default MainContainer;