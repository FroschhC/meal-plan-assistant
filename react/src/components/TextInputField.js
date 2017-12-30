import React, { Component } from 'react';

const TextInputField = props => {
  return(
    <label><h4 className="grid-x align-center form-title">{props.label}</h4>
      <input
        id={props.id}
        type='text'
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}

export default TextInputField;
