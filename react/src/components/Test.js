const Request = window.superagent;
import React, { Component } from 'react';
import ItemTile from './ItemTile'

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      items:[],
      theItem: ''
    }
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
    this.handleClearForm=this.handleClearForm.bind(this)
  }

  componentWillMount() {
    this.search();
  }

  search( query ) {
    console.log(query);
    let url =`https://trackapi.nutritionix.com/v2/search/instant?query=${query}&detailed=true`;
    let that = this;
    console.log(url);
    fetch(url, {
      headers: {
        'x-app-key': 'e0d3b7f1ba33256d1150e0666e20a1e2',
        'x-app-id': '5854379e',
        'x-remote-user-id': '0'
      }
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
      that.setState({
        item: body.branded.concat(body.common),
        theItem: query
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  handleFormSubmit(event){
    event.preventDefault();
    let item = event.target[0].value
    let newItem = item.split("-")
    let name = newItem[0].split(":").pop();
    let serving = newItem[1].split(":").pop();
    let cals = newItem[2].split(":").pop();
    let protein = newItem[3].split(":").pop();
    let fats = newItem[4].split(":").pop();
    let carbs = newItem[5].split(":").pop();
    let theNewItem = {
      name: name.trim(),
      serving: serving.trim(),
      calories: parseInt(cals),
      protein: parseInt(protein),
      fat: parseInt(fats),
      carbohydrates: parseInt(carbs),
      meal_id: this.props.mealId
    }
    this.props.addNewItem(theNewItem);
    this.handleClearForm();
  }

  handleClearForm(event) {
    this.refs.query.value = ''
    this.setState({
      theItem: '',
      items: [],
      item: []
  })
  }

  render() {
    let items = this.state.item.map((item, i) => {
      let calories = ''
      let fat = ''
      let carbohydrates = ''
      let protein = ''
      item.full_nutrients.forEach(nut => {
        if (nut.attr_id == 208) {
           calories = `Calories:${Math.round(nut.value)}`
        }
        if (nut.attr_id == 204) {
           fat = `Fat:${Math.round(nut.value)}`
        }
        if (nut.attr_id == 205) {
           carbohydrates = `Carbohydrates:${Math.round(nut.value)}`
        }
        if (nut.attr_id == 203) {
           protein = `Protein:${Math.round(nut.value)}`
        }
      })
      if (fat == '') {
        fat = `Fat:0`
      }
      if (carbohydrates == '') {
        carbohydrates = `Carbohydrates:0`
      }
      if (protein == '') {
        protein = `Protein:0`
      }
      return( <option key={i} onClick={this.props.onSubmit}>{item.food_name} - Serving:{item.serving_qty} {item.serving_unit} - {calories} - {protein} - {fat} - {carbohydrates}</option> )
    })
    return (
      <div className="grid-x align-center item-form">
        <form onSubmit={this.handleFormSubmit}>
        <input name={this.props.name} placeholder="New Item" className="app_input" ref="query" type="text" list="itemOne" onChange={ (e) => this.updateSearch() }/>
        <datalist id="itemOne" value={this.props.value} onChange={this.props.onChange}>
          {items}
        </datalist>
        <input  className="button" type="submit" value="Add Item"/>
        </form>
      </div>
    );
  }
}

export default Test;
