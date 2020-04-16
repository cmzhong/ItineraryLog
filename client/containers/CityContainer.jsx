import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  clickedCityObject: state.itinerary.clickedCityObject
})

const mapDispatchToProps = dispatch => ({
  addList: ( [ cityId, listName, addItem ] )=> dispatch(actions.addList( [ cityId, listName, addItem ]))
})

class CityContainer extends Component {

  constructor(props){
    super(props)
  }

  render(){
  //   const newCity = {
  //     cityId: state.lastCityId + 1, 
  //     name: action.payload,
  //     things: [],
  //     food: [],
  //     drink: [],
  //     notes: [],
  // }

    let clickedCityObject = this.props.clickedCityObject; 

    let thingList = clickedCityObject.things.map((el, index) => <li key={ index }>{ el }</li> );
  
    let foodList = clickedCityObject.food.map((el, index) => <li key={ index }>{ el }</li> );

    let drinkList = clickedCityObject.drink.map((el, index) => <li key={ index }>{ el }</li> );
    
    let notesList = clickedCityObject.notes.map((el, index) => <li key={ index }>{ el }</li> );


    return (
      <div id="lists">
        <h4>{ this.props.clickedCityName }</h4>  
        <h5>Things and Sights</h5>
        <ul>{ thingList }</ul>
          <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.addList( [ this.props.clickedCityId, 'things', e.target.childNodes[0].value ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>

        <h5>Feeding Grounds</h5>
        <ul>{ foodList }</ul>
        <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.addList([ this.props.clickedCityId, 'food', e.target.childNodes[0].value ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>

        <h5>Hydration Station</h5>
        <ul>{ drinkList }</ul>
        <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.addList([ this.props.clickedCityId, 'drink', e.target.childNodes[0].value ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>

        <h5>Notes</h5>
        <ul>{ notesList }</ul>
        <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.addList([ this.props.clickedCityId, 'notes', e.target.childNodes[0].value ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>


        <button id="delete" type="button" onClick={ ()=> { if (window.confirm('Are you sure you want to delete this item?')) this.props.deleteCity(this.props.clickedCityId) } }>Delete this City</button>
        {/* potential save button */}
        <button id="standard" type="button" onClick={ ()=> this.props.cityClicked([]) }>Back to all Cities</button>

    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
// export default CityContainer;