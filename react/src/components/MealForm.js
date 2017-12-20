import React, { Component } from 'react';
import TextInputField from '../components/TextInputField';
import SelectInputField from '../components/SelectInputField';
import Test from '../components/Test';

class MealForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      itemOne: '',
      itemTwo: '',
      itemThree: ''
    }
  this.onChange=this.onChange.bind(this)
  this.handleFormSubmit=this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
  event.preventDefault()
  let newMeal = {
    title: this.state.title,
    type: this.state.type,
    itemOne: this.state.itemOne,
    itemTwo: this.props.itemTwo,
    itemThree: this.state.itemThree
  }
  this.props.addNewMeal(newMeal);
  this.handleClearForm();
  }

  onChange(event) {
    this.setState( { [event.target.id]: event.target.value  } )
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <TextInputField
            id="title"
            label="Meal Title:"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          /> <br/>
          <SelectInputField
            id="type"
            label="Meal Type:"
            name="type"
            value={this.state.type}
            onChange={this.onChange}
          />
          <br/>
          <Test
            id="itemOne"
            label="Item One"
            name="item"
            value={this.state.itemOne}
            onChange={this.onChange}
          />
          {/* <Test
              id="itemTwo"
              label="Item Two"
              name="item"
            />
            <Test
             id="itemThree"
             label="Item Three"
             name="item"
           /> */}
           <input type="submit" value="Submit" />
         </form>
      </div>
    )
  }
}
export default MealForm;
