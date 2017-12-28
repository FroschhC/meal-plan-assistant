import React from 'react';
import { Link } from 'react-router';

const ItemTile = props => {

  return(
    <div className='callout card-section grey'>
      <div className='grid-x'><h2 className="small-6 cell meal-item-names">{props.name}</h2><h2 className="small-6 cell serving">Serving: {props.serving}</h2></div>
      <div>
      <h6 className='grid-x light-red'>Calories: {props.calories}</h6>
      <h6 className='grid-x light-green'>Protein: {props.protein}</h6>
      <h6 className='grid-x light-blue'>Carbohydrates: {props.carbohydrates}</h6>
      <h6 className='grid-x light-yellow'>Fat: {props.fat}</h6>
      </div>

      <button className="button card-divider grid-x align-center item-delete" onClick={props.handleDelete.bind(this, props.id)}>Delete Item from Meal</button>

    </div>
  )
}

export default ItemTile;
