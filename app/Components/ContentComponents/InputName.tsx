import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputStyled from '../Shared/InputStyled';
import Data from '../../staticData/Data.json'

export default class InputName extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <InputStyled options={Data.options} placeholder={Data['placeholder-1']} />
    )
  }
}
