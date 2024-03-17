import React, { Component } from 'react';
import './inputStyled.css';

interface InputStyledProps {
  placeholder?: string;
  options: string[]; 
}

export default class InputStyled extends Component<InputStyledProps> {
  render() {
    const { placeholder, options } = this.props;

    return (
      <select>
        {placeholder && <option disabled selected>{placeholder}</option>}
        {options && options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  }
}
