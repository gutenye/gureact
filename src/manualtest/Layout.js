import React, { Component } from 'react'
import { render } from 'react-dom'
import { Layout } from '../src'

class App extends Component {
  render() {
    var top = <div>Top</div>
    var side = <div>Side</div>
    var main = <div style={{ height: '1000px' }}>main</div>
    return (
      <div>
        {/* <Layout top={top} side={side} main={main} /> */}
        {/*<Layout top={top} main={main} />*/}
        <Layout side={side} main={main} />
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
