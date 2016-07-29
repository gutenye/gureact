import React, {Component} from "react"

export default class Layout extends Component {
  render() {
    var {props: {top, side, main}} = this
    return (
      <div>
        <header style={s.top}>{top}</header>
        <aside style={s.side}>{side}</aside>
        <main style={s.main}>{main}</main>
      </div>
    )
  }
}

const s = {
  top: {
    backgroundColor: "white",
    position: "fixed",
    height: "64px",
    top: 0,
    left: 0,
    right: 0,
  },

  side: {
    position: "fixed",
    width: "224px",
    height: "100%",
    top: "64px",
    left: 0,
  },

  main: {
    marginLeft: "224px",
    marginTop: "64px",
  },
}
