import React from 'react'
import PropTypes from 'prop-types'

interface TitleProps {
  text: string;
}

const  Title: React.FC<TitleProps>=(props) =>  {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

Title.propTypes = {
text: PropTypes.string.isRequired
}

export default Title

