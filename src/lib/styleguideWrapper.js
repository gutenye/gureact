import React from 'react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
)
