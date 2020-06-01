import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  clickedCityObject: state.itinerary.clickedCityObject
})

const mapDispatchToProps = dispatch => ({
  addList: ( [ cityId, listName, addItem ] )=> dispatch(actions.addList( [ cityId, listName, addItem ])),
  loadCityData: (cityId)=>dispatch(actions.loadCityData(cityId)),
  updateCityDetails: ([ cityId, activity, input, listName, cityName ])=>dispatch(actions.updateCityDetails([ cityId, activity, input, listName, cityName ]))
})

class CityContainer extends Component {

  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   this.props.loadCityData(this.props.clickedCityId);  
  // }

  render(){

    let clickedCityObject = this.props.clickedCityObject; 

    let thingList = clickedCityObject.things.map((el, index) => <li key={ index }>{ el }</li> );
  
    let foodList = clickedCityObject.food.map((el, index) => <li key={ index }>{ el }</li> );

    let drinkList = clickedCityObject.drink.map((el, index) => <li key={ index }>{ el }</li> );
    
    let notesList = clickedCityObject.notes.map((el, index) => <li key={ index }>{ el }</li> );


    return (
      <div id="lists">
        <h2> -- { this.props.clickedCityName } --</h2>  
        <h4>Things and Sights</h4>
        <ul>{ thingList }</ul>
          <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.updateCityDetails( [ this.props.clickedCityId, 2, e.target.childNodes[0].value, 'things', this.props.clickedCityName ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>

        <h4>Feeding Grounds</h4>
        <ul>{ foodList }</ul>
        <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.updateCityDetails([ this.props.clickedCityId, 3, e.target.childNodes[0].value, 'food', this.props.clickedCityName ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>

        <h4>Hydration Station</h4>
        <ul>{ drinkList }</ul>
        <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.updateCityDetails([ this.props.clickedCityId, 4, e.target.childNodes[0].value, 'drink', this.props.clickedCityName ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>

        <h4>Notes</h4>
        <ul>{ notesList }</ul>
        <form onSubmit={(e)=> {
          e.preventDefault();
          { this.props.updateCityDetails([ this.props.clickedCityId, 5, e.target.childNodes[0].value, 'notes', this.props.clickedCityName ])}
          }}>

        <input type="text"></input> 
        <button type="submit">Add</button>
        </form>


        <button id="delete" type="button" onClick={ ()=> { if (window.confirm('Are you sure you want to delete this item?')) this.props.deleteDatabaseCity([ this.props.clickedCityName, this.props.clickedCityId ]) } }>Delete this City</button>
        {/* potential save button */}
        <button id="standard" type="button" onClick={ ()=> this.props.cityClicked([]) }>Back to all Cities</button>

    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
// export default CityContainer;