import React, { PropTypes } from 'react'
import {Input} from 'react-toolbox/lib/input'

const FormInput = (props) => {
  return <Input {...props} />
}

FormInput.propTypes = {
  label: PropTypes.string,
}

FormInput.defaultProps = {
  type: 'text',
}

export default FormInput