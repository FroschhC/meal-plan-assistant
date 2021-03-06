import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';

class MealFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      errors: []
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
    if (response.ok || response.status === 422) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    if ('error' in body) {
        this.setState({ errors: body['error'] })
      } else {
        this.props.getData()
        browserHistory.push(`/`)
      }
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render(){
    let errors = this.state.errors.map(error => {
      return( <h3 className="errors">{error}</h3> )
    })

    return(
      <div id="newMeal">
        <div className="grid-x align-center">
      <div className="meal-form animated zoomIn">
        <h1 className="brake-titles">Create a new meal</h1>
        {errors}
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
