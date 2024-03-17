import React from 'react'
import PropTypes from 'prop-types'
import Data from '../../staticData/Data.json'

interface ElapsedCheckPropTypes{
  elapsedDates?:string[]
}
const ElapsedCheck: React.FC<ElapsedCheckPropTypes> = props => {
  return (<>
    <h3 className='text'>{Data['title-section-3']}</h3>
    {props.elapsedDates ? (props.elapsedDates):( <p className='text-success'>All Available!</p>)}


    </>
  )
}

ElapsedCheck.propTypes = {

}

export default ElapsedCheck;
