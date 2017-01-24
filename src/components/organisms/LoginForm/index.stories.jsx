import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { LoginForm } from 'components'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm/>
  ))
