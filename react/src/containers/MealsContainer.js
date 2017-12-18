import React, { Component } from 'react';
import MealFormContainer from './MealFormContainer';
import { Link } from 'react-router';

class MealsContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){


    return(
      <div>
        <h1>Meals Container</h1>
        <Link to='/meals/new'> Add a Meal </Link>
      </div>
    )
  }
}

export default MealsContainer;
