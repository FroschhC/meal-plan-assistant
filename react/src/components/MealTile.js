import React from 'react';
import { Link } from 'react-router';

const MealTile = props => {

  return(
    <div>
    <div className='card large-3 medium-6 small-12'>
      <Link to={`/meals/${props.id}`}>
        <h4 className="card-divider">{props.title}</h4>
      </Link>
        <h6 className="card-section">{props.category}</h6>
      <button className="button" onClick={props.handleDelete.bind(this, props.id)}>Delete Meal</button>
    </div>
  </div>
  )
}

export default MealTile;
