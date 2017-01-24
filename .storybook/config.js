import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'

// import 'styles/_config.scss'

// import theme from 'components/themes/default'

const req = require.context('components', true, /.stories.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addDecorator(story => (
  // <ThemeProvider theme={theme}>{story()}</ThemeProvider>
// ))

configure(loadStories, module)
