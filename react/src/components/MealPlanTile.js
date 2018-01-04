import React from 'react';
import { Link } from 'react-router';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const MealPlanTile = props => {


  let items = props.items.map((item, i) => {
    return(
      <div className="card-divider grid-x" key={i}><h6 className="meal-item small-6 cell" >{item.name}</h6><h6 className="serving small-6 cell">{item.serving}</h6></div>
    )
  })

  let totalItems = 0
  let calories = 0
  let protein = 0
  let fat = 0
  let carbohydrates = 0
  let totals = props.items.map(item => {
    return(
      totalItems += 1,
      calories += item.calories,
      carbohydrates += item.carbohydrates,
      protein += item.protein,
      fat += item.fat
    )
  })


  return(
    <div>
    <div className='card meal-plan-card large-1 medium-6 small-12'>
      <Link to={`/meals/${props.id}`}>
      <div className="card-divider grid-x">
        <h4 className="meal-title small-12 cell center">{props.title}</h4><h4 className="meal-title small-12 cell center subcat">{props.category}</h4>
      </div>
      </Link>
        <h6 className="card-divider align-center">Items: {totalItems}</h6>
        <button className="grid-x align-center button meal-plan-card-button" onClick={props.deleteMeal.bind(this, props.id)}>Delete Meal from Plan</button>
        {/* <h6 className="card-divider align-center">Calories: {calories}</h6>
        <h6 className="card-divider align-center">Protein: {protein}</h6>
        <h6 className="card-divider align-center">Fat: {fat}</h6>
        <h6 className="card-divider align-center">Carbs: {carbohydrates}</h6> */}
  </div>
</div>
  )
}

export default MealPlanTile;
