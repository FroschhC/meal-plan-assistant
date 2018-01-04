import React,  { Component }  from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd';

const mealSource = {
  beginDrag(props) {
    return {
      item: this.props
    };
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};


class MealTile extends Component {

  render() {
    let items = this.props.items.map((item, i) => {
      return(
        <div className="card-divider grid-x each-item" key={i}><h6 className="meal-item small-6 cell" >{item.name}</h6><h6 className="serving small-6 cell">{item.serving}</h6></div>
      )
    })

    const { isDragging, connectDragSource, text } = this.props;

    let totalItems = 0
    let calories = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0
    let totals = this.props.items.map(item => {
      return(
        totalItems += 1,
        calories += item.calories,
        carbohydrates += item.carbohydrates,
        protein += item.protein,
        fat += item.fat
      )
    })

  return connectDragSource(
    <div>
    <div className='card meal-card large-3 medium-6 small-12'>
      <div className="card-divider addmealdivider grid-x">
      <button className="button small-4 cell right add-meal" onClick={this.props.addToPlan.bind(this, this.props.id)}>Add to Plan</button>
      </div>
      <Link to={`/meals/${this.props.id}`}>
      <div className="card-divider grid-x">
        <h4 className="meal-title small-12 cell center">{this.props.title}</h4><h4 className="meal-title small-12 cell center subcat">{this.props.category}</h4>
      </div>
      </Link>
        <div className="card-section meal-card-section items-section">{items}</div>
      <div className="nut-facts">
        <h6 className="card-divider align-center items-strip">Total Items: {totalItems}</h6>
        <h6 className="card-divider align-center red">Calories: {calories}</h6>
        <h6 className="card-divider align-center green">Protein: {protein}</h6>
        <h6 className="card-divider align-center blue">Carbs: {carbohydrates}</h6>
        <h6 className="card-divider align-center yellow">Fat: {fat}</h6>
      </div>
      <button className="button" onClick={this.props.handleDelete.bind(this, this.props.id)}>Delete Meal</button>
    </div>
  </div>
  )
}
}

export default DragSource('meal', mealSource, collect)(MealTile);
