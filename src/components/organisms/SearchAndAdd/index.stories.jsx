import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { SearchAndAdd } from 'components'

storiesOf('SearchAndAdd', module)
  .add('default', () => (
    <SearchAndAdd/>
  ))