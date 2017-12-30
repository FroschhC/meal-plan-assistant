import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';

class MealFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    }
    this.addNewMeal=this.addNewMeal.bind(this)
  }

  addNewMeal(newMeal) {
  fetch('/api/v1/meals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMeal),
    credentials: 'same-origin'
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    this.props.getData()
    browserHistory.push(`/`)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return(
      <div id="newMeal">
        <div className="grid-x align-center">
      <div className="meal-form">
        <h1>Create a new meal</h1>
      <div className="grid-x align-center">
        <MealForm
          addNewMeal = {this.addNewMeal}
        />
      </div>
      </div>
      </div>
    </div>
    )
  }
}
export default MealFormContainer;
