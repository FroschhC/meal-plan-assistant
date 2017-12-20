import React, { Component } from 'react';

const TextInputField = props => {
  return(
    <label>{props.label}
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
