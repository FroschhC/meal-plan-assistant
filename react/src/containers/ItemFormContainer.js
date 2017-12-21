import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';
import Test from '../components/Test';

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
        <h4>Add New Items Below</h4>
        <form onSubmit={this.handleFormSubmit}>
          <Test
            id="itemOne"
            label="Item:"
            name="itemOne"
            value={this.state.item}
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default MealFormContainer;
