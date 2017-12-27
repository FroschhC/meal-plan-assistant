import React from 'react';
import { Link } from 'react-router';

const ItemTile = props => {

  return(
    <div className='callout card-section'>
      <div className='grid-x'><h2 className="small-6 cell meal-item-names">{props.name}</h2><h2 className="small-6 cell serving">Serving: {props.serving}</h2></div>
      <div>
      <h6>Calories: {props.calories}</h6>
      <h6>Protein: {props.protein}</h6>
      <h6>Carbohydrates: {props.carbohydrates}</h6>
      <h6>Fat: {props.fat}</h6>
      </div>
      <div className='card-divider align-center'>
      <button className="button card-divider" onClick={props.handleDelete.bind(this, props.id)}>Delete Item from Meal</button>
      </div>
    </div>
  )
}

export default ItemTile;
