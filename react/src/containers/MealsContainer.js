import React, { Component } from 'react';
import MealFormContainer from './MealFormContainer';
import { Link } from 'react-router';
import MealTile from '../components/MealTile';
import { browserHistory} from 'react-router';

class MealsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      meals: [],
      items: []
    }
    this.getData=this.getData.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.deleteMeal=this.deleteMeal.bind(this)
  }

  handleDelete(id){
    this.deleteMeal(id);
  }

  deleteMeal(id){
  if(confirm('Are you sure you want to delete this meal?')) {
  fetch(`/api/v1/meals/${id}`, {
    method: 'DELETE',
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
      this.getData();
      browserHistory.push('/')
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
}

  componentDidMount(){
    this.getData(); }

  getData() {
  fetch('/api/v1/meals', {
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
      meals: body['meals'],
      items: body['items']
    })
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render(){
    let meals = this.state.meals.map((meal, i) => {
      return(
        <MealTile
          key={meal.id}
          id={meal.id}
          title={meal.title}
          category={meal.category}
          handleDelete={this.handleDelete}
          items={this.state.items}
        />
      )
    })

    return(
      <div>
        <MealFormContainer
          getData={this.getData}/>
      <div className="callout">
        <h1 className="grid-x align-center">Meals Container</h1>
    <div className="grid-x align-center">
          {meals}
        </div>
        </div>
      </div>
    )
  }
}

export default MealsContainer;
