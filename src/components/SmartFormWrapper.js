import React from 'react'
import PropTypes from 'prop-types'

const SmartFormWrapper = ({ onSubmit, children }) => {
    console.log(onSubmit);
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          onSubmit: onSubmit
        })
    })
  )
}

SmartFormWrapper.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SmartFormWrapper