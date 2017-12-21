const Request = window.superagent;
import React, { Component } from 'react';
import ItemTile from './ItemTile'

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      items:[],
      calories: '',
      protein: '',
      fats: '',
      carbohydrates: ''
    };
  }

  componentWillMount() {
    this.search();
  }

  search( query = '' ) {
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
      that.setState({ item: body.branded.concat(body.common) })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {
    debugger
    let items = this.state.item.map((item, i) => {
      let calories = ''
      let fat = ''
      let carbohydrates = ''
      let protein = ''
      item.full_nutrients.forEach(nut => {
        if (nut.attr_id == 208) {
           calories = `, Calories: ${Math.round(nut.value)},`
        }
        if (nut.attr_id == 204) {
           fat = ` Fat: ${Math.round(nut.value)},`
        }
        if (nut.attr_id == 205) {
           carbohydrates = ` Carbohydrates: ${Math.round(nut.value)}`
        }
        if (nut.attr_id == 203) {
           protein = ` Protein: ${Math.round(nut.value)},`
        }
      })
      return( <option key={i} value={item.food_name}>Serving: {item.serving_qty} {item.serving_unit}{calories}{protein}{fat}{carbohydrates}</option> )
    })

    return (
      <div>
        {this.props.label}
        <input className="app_input" ref="query" type="text" list="itemOne" onChange={ (e) => this.updateSearch() }/>
        <datalist id="itemOne" value={this.props.value} onChange={this.props.onChange}>
          {items}
        </datalist>
      </div>
    );
  }
}

export default Test;
