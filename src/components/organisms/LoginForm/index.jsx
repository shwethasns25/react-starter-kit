import React, { PropTypes, Component } from 'react'
import { Button } from 'react-toolbox/lib/button'
import theme from './_LoginForm.scss'

class LoginForm extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    return (
      <Button label="Gale" />
    )
  }
}

export default LoginForm
