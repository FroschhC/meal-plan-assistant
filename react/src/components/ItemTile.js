import React from 'react';
import { Link } from 'react-router';

const ItemTile = props => {

  return(
    <div>
      <span><h2>{props.name}</h2><h3>{props.serving}</h3></span>
      <h4>Calories: {props.calories}</h4>
      <h4>Protein: {props.protein}</h4>
      <h4>Carbohydrates: {props.carbohydrates}</h4>
      <h4>Fat: {props.fat}</h4>
      <button className="button" onClick={props.handleDelete.bind(this, props.id)}>Delete Item from Meal</button>
    </div>
  )
}

export default ItemTile;
