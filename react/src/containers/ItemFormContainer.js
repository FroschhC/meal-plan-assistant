import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';
import Test from '../components/Test';

class ItemFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      itemOne:'',
      name: '',
      serving: '',
      calories: '',
      protein: '',
      fats: '',
      carbohydrates: '',
      errors: []
    }
    this.onChange=this.onChange.bind(this)
    this.addNewItem=this.addNewItem.bind(this)
  }

  onChange(event) {
    this.setState( { [event.target.id]: event.target.value  } )
  }

  addNewItem(theNewItem) {
    let mealId = this.props.mealId
  fetch(`/api/v1/meals/${mealId}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(theNewItem),
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
        this.props.getData();
      }
    })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  render(){
    let errors = this.state.errors.map(error => {
      return( <li className="errors">{error}</li> )
    })

    return(
      <div>
        {errors}
          <Test
            id="itemOne"
            label="Item:"
            name="itemOne"
            value={this.state.itemOne}
            onChange={this.onChange}
            onSubmit={this.handleFormSubmit}
            addNewItem={this.addNewItem}
            mealId={this.props.mealId}
          />
      </div>
    )
  }
}
export default ItemFormContainer;
