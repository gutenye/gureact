import React from 'react'

class Layout extends React.Component {
  static defaultProps = {
    topHeight: 64,
    sideWidth: 224,
    topClassName: '',
    sideClassName: '',
    mainClassName: '',
    topStyle: {},
    sideStyle: {},
    mainStyle: {},
  }

  render() {
    var {
      props: {
        top,
        side,
        main,
        topHeight,
        sideWidth,
        topClassName,
        topStyle,
        sideClassName,
        sideStyle,
        mainClassName,
        mainStyle,
      },
    } = this
    s.top = Object.assign(s.top, {
      height: topHeight,
    })
    s.side = Object.assign(s.side, {
      width: sideWidth,
      top: topHeight,
    })
    if (top && side) {
      s.main = Object.assign(s.main, {
        marginTop: topHeight,
        marginLeft: sideWidth,
      })
      // continue
    } else if (top) {
      s.main = Object.assign(s.main, {
        marginTop: topHeight,
      })
    } else if (side) {
      s.side = Object.assign(s.side, {
        top: 0,
      })
      s.main = Object.assign(s.main, {
        marginLeft: sideWidth,
      })
    }
    return (
      <div>
        {top && (
          <header className={topClassName} style={{ ...s.top, ...topStyle }}>
            {top}
          </header>
        )}
        {side && (
          <aside className={sideClassName} style={{ ...s.side, ...sideStyle }}>
            {side}
          </aside>
        )}
        <main className={mainClassName} style={{ ...s.main, ...mainStyle }}>
          {main}
        </main>
      </div>
    )
  }
}

type styleT = {
  top: Object,
  side: Object,
  main: Object,
}

const s: styleT = {
  top: {
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    // height: "64px"
  },

  side: {
    position: 'fixed',
    height: '100%',
    left: 0,
    // width: "224px"
    // top: "64px"
  },

  main: {
    // marginTop: "64px"
    // marginLeft: "224px"
  },
}

export default Layout
