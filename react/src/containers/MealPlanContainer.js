import React, { Component } from 'react';
import MealFormContainer from './MealFormContainer';
import { Link } from 'react-router';
import MealTile from '../components/MealTile';
import MealPlanTile from '../components/MealPlanTile';
import { browserHistory} from 'react-router';
import {DropTarget} from 'react-dnd';


const listTarget = {
  drop: function(props, monitor) {
    let meal = monitor.internalMonitor.registry.pinnedSource.props
    moveMeal(meal)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class MealPlanContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      mealPlan: []
    }
    this.moveMeal=this.moveMeal.bind(this)
  }

  moveMeal(meal){
    debugger
  }

  componentDidMount(){
    this.getData(); }

  getData() {
  fetch('/api/v1/meal_plans', {
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
      mealPlan: body['meals']
    })
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}


  render(){
    const {connectDropTarget} = this.props

    let meals = this.state.mealPlan.map(meal => {
      return(<MealPlanTile
        key={meal.id}
        id={meal.id}
        title={meal.title}
        category={meal.category}
        items={meal.items}
      />
      )
    })

    let totalItems = 0
    let calories = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0

    let allitems = this.state.mealPlan.map(meal => {
      meal.items.map(item =>{
        return(
        calories += item.calories,
        carbohydrates += item.carbohydrates,
        protein += item.protein,
        fat += item.fat
      )
      })
    })

    return connectDropTarget(
    <div className="grid-x align-center meal-plan-title">
        <h1 className="grid-x align-center brake-titles">My Meal Plan</h1>
      <div className="grid-x align-center meal-container">
        {meals}
        <div className="grid-x align-center">
          <h6 className="grid-x align-center red">Total Calories: {calories}</h6>
          <h6 className="grid-x align-center green"> Total Protein: {protein}</h6>
          <h6 className="grid-x align-center blue">Total Carbohydrates: {carbohydrates}</h6>
          <h6 className="grid-x align-center yellow">Total Fat: {fat}</h6>
        </div>
      </div>
    </div>
    )
  }
}

export default DropTarget('meal', listTarget, collect)(MealPlanContainer);
