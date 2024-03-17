import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputStyled from '../Shared/InputStyled'
import Data from '../../staticData/Data.json'
import Image from 'next/image'
import './cLientSelector.css';

export default class ClientSelector extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
          <div><span>Testing canter 1</span> <span className='w50'><InputStyled options={Data.options} placeholder={Data['placeholder-1']} /></span><Image
          height="20"
          width="20"
          alt="seperator"
          src={"./wait icon.svg"}
        /></div>
 <div><span>Testing canter 1</span> <span className='w50'><InputStyled options={Data.options} placeholder={Data['placeholder-1']} /></span><Image
          height="20"
          width="20"
          alt="seperator"
          src={"./wait icon.svg"}
        /></div>
           <div><span>Testing canter 1</span> <span className='w50'><InputStyled options={Data.options} placeholder={Data['placeholder-1']} /></span><Image
          height="20"
          width="20"
          alt="seperator"
          src={"./wait icon.svg"}
        /></div>
                     
      </div>
    )
  }
}
