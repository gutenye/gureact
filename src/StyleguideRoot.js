import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
global.pd = console.log.bind(console)

class StyleguideRoot extends React.Component {
  render() {
    const { children } = this.props
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default StyleguideRoot
