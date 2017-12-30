import React, { Component } from 'react';

const SelectInputField = props => {
  return(
    <label><h4 className="grid-x align-center form-title">{props.label}</h4>
      <select id={props.id} value={props.value} onChange={props.onChange}>
        <option value="Please">Please Choose</option>
        <option value="Breakfast">BreakFast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
    </label>
  )
}

export default SelectInputField;
