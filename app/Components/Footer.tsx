import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

interface FooterPropTypes{

}
const Footer: React.FC<FooterPropTypes> = (props) =>{
  return (
    <div>
      <p>Data in the input file is correct. Please press continue to import.</p>
      <Image
              height="46"
              width="239"
              alt="seperator"
              src={"./Continue Button.svg"}
            />
<Image
              height="46"
              width="239"
              alt="seperator"
              src={"./CancelButton.svg"}
            />

      

      
    </div>
  )
}

Footer.propTypes = {

}

export default Footer

