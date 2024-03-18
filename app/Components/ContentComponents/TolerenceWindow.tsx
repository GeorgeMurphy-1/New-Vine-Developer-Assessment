import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tolerenceWindow.css'
import Image from 'next/image'
import Data from '../../staticData/Data.json'
export default class tolerenceWindow extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div >
        <h3 className='text bold-text'>Tolerence Window</h3>
        <div className='container-tol'>
        <label className="switch">
  <input type="checkbox"></input>
  <span className="slider round"></span>
</label>

<span className='text'>{Data['Toggle on']}</span>
<Image src={'./PIKE.svg'} alt='pike' height="20" width="20"></Image>
<Image src={'./wait.svg'} alt='pike' height="20" width="20"></Image>
<span className='text'>{Data.tolerencelevel}</span>
</div>
      </div>
    )
  }
}
