import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Data from '../../staticData/Data.json';
import './radio.css';

interface SplitState {
  selectedOption: string | null;
}

export default class Split extends Component<{},SplitState> {
  static propTypes = {
    prop: PropTypes.any
  }

  constructor(props:any) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event:any) {
    this.setState({ selectedOption: event.target.value });
  }
  

  render() {
    
    const { selectedOption } = this.state;
    return (<>
      <div className='text '>
        <h3 className="bold text">
        {Data['Client radio title']}</h3>
        <span className='flex'>
        <label className='radio-container'>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={this.handleOptionChange}
          />
          Single
        </label>
        
        <label className="radio-container">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={this.handleOptionChange}
          />
         Multiple
        </label>
        <br />
       </span>
      </div>  <br/></>
    );
  }
}
