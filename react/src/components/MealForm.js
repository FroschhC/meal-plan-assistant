import React, { Component } from 'react';
import TextInputField from '../components/TextInputField';
import SelectInputField from '../components/SelectInputField';

class MealForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: ''
    }
  this.onChange=this.onChange.bind(this)
  this.handleFormSubmit=this.handleFormSubmit.bind(this)
  this.handleClearForm=this.handleClearForm.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let newMeal = {
      title: this.state.title,
      category: this.state.category,
    }
    this.props.addNewMeal(newMeal);
    this.handleClearForm();
  }

  handleClearForm(event) {
  this.setState({
    title: '',
    category: ''
  })
  }

  onChange(event) {
    this.setState( { [event.target.id]: event.target.value  } )
  }

  render() {
    return(
      <div className="callout">
        <form onSubmit={this.handleFormSubmit}>
          <TextInputField
            id="title"
            label="Meal Title:"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <SelectInputField
            id="category"
            label="Meal Category:"
            name="category"
            value={this.state.category}
            onChange={this.onChange}
          /> <br/>
          <input type="submit" value="Submit" />
         </form>
      </div>
    )
  }
}
export default MealForm;
