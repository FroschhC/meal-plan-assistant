import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';
import Test from '../components/Test';
import ItemFormContainer from './ItemFormContainer'

class MealsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: '',
      items: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/meals/${this.props.params.id}`, {
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
      this.setState({
        id: body['meal'].id,
        title: body['meal'].title,
        category: body['meal'].category
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    let mealId = this.state.id
    return(
      <div>
        <div className="grid-x align-center">
        <Link to="/">Back to User Page</Link>
        </div>
        <div className="grid-x align-center">
        <h1>Title: {this.state.title}</h1>
        </div>
        <div className="grid-x align-center">
        <h2>Type: {this.state.category}</h2>
        </div>
        <ItemFormContainer />
      </div>
    )
  }
}
export default MealsShowContainer;
