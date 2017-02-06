import React, { PropTypes } from 'react'
import {Autocomplete} from 'react-toolbox/lib/autocomplete'

const FormSearchBox = (props) => {
  return <Autocomplete {...props} />
}

FormSearchBox.propTypes = {
  label: PropTypes.string,
}

export default FormSearchBox