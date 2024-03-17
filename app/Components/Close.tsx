import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

interface ClosePropTypes{
    
}
const Close:React.FC<ClosePropTypes> = (props) => {
  return (
    <Image alt="close" width="39" height="39" src={'./CloseSymbol.svg'} ></Image>
    
  )
}

Close.propTypes = {

}

export default Close

