import React, { Component } from 'react';
import MealFormContainer from './MealFormContainer';
import MealPlanContainer from './MealPlanContainer';
import { Link } from 'react-router';
import MealTile from '../components/MealTile';
import { browserHistory} from 'react-router';
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd';


class MealsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      meals: [],
      items: [],
    }
    this.getData=this.getData.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.deleteMeal=this.deleteMeal.bind(this)
    this.toggleForm=this.toggleForm.bind(this)
    this.addToPlan=this.addToPlan.bind(this)
  }

  addToPlan(id){
    fetch('/api/v1/meal_plan_meals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id),
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
      this.getData()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  toggleForm(event){
    let mealForm = document.getElementById('newMeal');
    let displaySetting = mealForm.style.display;
    if (displaySetting == 'block') {
      mealForm.style.display = 'none';
      // newMealButton.innerHTML = 'Add New Meal'
    } else {
      mealForm.style.display = 'block';
      // newMealButton.innerHTML = 'Hide Meal Form'
    }
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
      meals: body['meals']
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
          items={meal.items}
          addToPlan={this.addToPlan}
        />
      )
    })

    return(
      <div>
        <div className="meal-plan-strip">
          <h1 className="grid-x align-center brake-titles">My Meal Plan</h1>
          <MealPlanContainer
          />
        </div>
          <MealFormContainer
            getData={this.getData}/>

        <div className="grid-x align-center">
          <button className="button" id="newMealButton" onClick={this.toggleForm}><span>Add New Meal</span></button>
        </div>
        <div className="outside-meal-container">
          <h1 className="grid-x align-center brake-titles">My Meals</h1>
        <div className="grid-x align-center meal-container">
        <div className="grid-x align-center">
          {meals}
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(MealsContainer);
