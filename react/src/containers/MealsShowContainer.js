import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MealForm from '../components/MealForm';
import Test from '../components/Test';
import ItemTile from '../components/ItemTile';
import ItemFormContainer from './ItemFormContainer'

class MealsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: '',
      items: []
    }
    this.handleDelete=this.handleDelete.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.getData=this.getData.bind(this)
  }

  handleDelete(id){
    this.deleteItem(id);
  }

  deleteItem(id){
  let mealId = this.state.id
  if(confirm('Are you sure you want to delete this item from the meal?')) {
  fetch(`/api/v1/meals/${mealId}/items/${id}`, {
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
      this.setState({items: body.items})
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    fetch(`/api/v1/meals/${this.props.params.id}`, {
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
        id: body['meal'].id,
        title: body['meal'].title,
        category: body['meal'].category,
        items: body.items
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    let totalItems = 0
    let calories = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0
    let mealId = this.state.id
    let allitems = this.state.items.map(item => {
      return(<ItemTile
              key={item.id}
              id={item.id}
              name={item.name}
              serving={item.serving}
              calories={item.calories}
              protein={item.protein}
              fat={item.fat}
              carbohydrates={item.carbohydrates}
              handleDelete={this.handleDelete}
            />
            )
          })
    let totals = allitems.map(item => {
      return(
        totalItems += 1,
        calories += item.props.calories,
        carbohydrates += item.props.carbohydrates,
        protein += item.props.protein,
        fat += item.props.fat
      )
    })
    return(
      <div className="grid-x align-center">
        <div className="small-12 center">
        <Link to="/">Back to User Page</Link>
        </div>
        <div className="grid-x callout card">
        <div className="grid-x align-center card-divider">
        <h1>{this.state.title}</h1>
        </div>
        <div className="grid-x align-center subcat">
        <h4>{this.state.category}</h4>
        </div>
        <div className='callout'>
          {allitems}
        </div>
        <div className="grid-x align-center callout">
          <h6>Total Items in Meal: {totalItems} ||</h6>
          <h6>Total Calories: {calories} ||</h6>
          <h6>Total Protein: {protein} ||</h6>
          <h6>Total Carbohydrates: {carbohydrates} ||</h6>
          <h6>Total Fat: {fat}</h6>
        </div>
        <ItemFormContainer
          mealId={this.state.id}
          getData={this.getData}
        />
      </div>
    </div>
    )
  }
}
export default MealsShowContainer;
