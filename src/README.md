Philosophy: each compnent is independent.

```
import { Button } from 'gureact'
import { TextField } from 'gureact/antd'

<ThemeProvider theme={theme}>
  <Button />
</ThemeProvider>

const theme = { primary }
```

## Install

```
$ npm install gureact

# src/_variables.scss

{
  loader: 'sass-loader',
  options: {
    data: '@import "variables";',
    includePaths: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  }
}
```

```
# .babelrc
  plugins: [
    ['transform-imports', {
      'gureact': { transfrom: 'gureact/lib/core/${member}/${member} },
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

