import React from "react"
import { render } from "react-dom"

const pages = [
  require('./Grid').default
]

class App extends React.Component {
  render() {
    return (
      <div>
        {pages.map((v, i) => React.createElement(v, {key: i}))}
      </div>
    )
  }
}

render(<App />, document.querySelector("#app"))
