import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = (props) =>
  <div>
    <Links>
      <Link to='/grid'>Grid</Link>
      <Link to='/device-viewer'>DeviceViewer</Link>
    </Links>
    <Links>
      <Link to='/antd/layout'>Layout</Link>
    </Links>
  </div>

class App extends React.Component {
  static childContextTypes = {
    reactIconBase: PropTypes.object
  }

  getChildContext() {
    return {
      reactIconBase: {
        size: 32,
        className: 'icon',
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} exact />
          <Route path='/grid' component={require('./Grid').default} />
          <Route path='/device-viewer' component={require('./DeviceViewer').default} />
          <Route path='/antd/layout' component={require('./antd/Layout').default} />
        </div>
      </BrowserRouter>
    )
  }
}

const Links = styled.div`
  > a {
    margin-right: 1rem;
  }
`

render(<App />, document.querySelector('#app'))
