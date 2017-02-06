import React, { PropTypes } from 'react'
import {Button} from 'react-toolbox/lib/button'

const FormButton = (props) => {
  return <Button {...props} />
}

FormButton.propTypes = {
  label: PropTypes.string,
}

export default FormButton