import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Data from '../../staticData/Data.json';

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
      <div className='text bold-text'>
        <p>
        {Data['Client radio title']}</p>
        <span>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={this.handleOptionChange}
          />
          Single
        </label>
        
        <label>
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
      </div></>
    );
  }
}
