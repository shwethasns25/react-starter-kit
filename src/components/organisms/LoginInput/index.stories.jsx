import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { LoginInput } from 'components'

storiesOf('LoginInput', module)
  .add('default', () => (
    <LoginInput/>
  ))
