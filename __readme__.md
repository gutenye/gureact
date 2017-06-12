manage two dependencs, admin and gureact is easy to get wrong.
  e.g. admin upgrade styled-compnents, but gureat not. // your mind dont' think about it first.
  for test: needs a way

### Getting Started

```
import {Layout} from "gureact"
```

### Install

```
$ npm install gureact
```

Philosophy: each compnent is independent.

```
# .babelrc
  plugins: [
    ['transform-imports', {
      'gureact': { transfrom: 'gureact/lib/${member}/${member} },
      'gureact/antd': { transfrom: 'gureact/lib/antd/${member}/${member} },

import { Button } from 'gureact'

yarn add lodash styled-components classnames react-icons recompose react-router react-router-dom
```

## Antd

```
yarn add antd

import { PreviweModal } from 'gureact/antd'
```

### Setup global styles

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a, a:hover, a:visited {
  text-decoration: none;
}
```

```
Setup react-icons

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
```

