import React from 'react';
import { Link } from 'react-router';

const MealTile = props => {

  return(
    <div>
      <Link to={`/meals/${props.id}`}>
        <h5>{props.title} - {props.category}</h5>
      </Link>
      <button onClick={props.handleDelete.bind(this, props.id)}>Delete Meal</button>
    </div>
  )
}

export default MealTile;
