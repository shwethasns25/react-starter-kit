import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Products } from 'components'

storiesOf('Products', module)
  .add('default', () => (
    <Products/>
  ))