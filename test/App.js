import React, {Component} from "react"
import {render} from "react-dom"
import {Layout} from "../src"

class App extends Component {
  render() {
    return (
      <Layout
        top={<div>Top</div>}
        side={<div>Side</div>}
        main={<div>main</div>}
      />
    )
  }
}

render(<App />, document.querySelector("#app"))
