import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';

class MealFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  render(){


    return(
      <div>
        <h1>Create a new meal</h1>
        <MealForm />
      </div>
    )
  }
}
export default MealFormContainer;
