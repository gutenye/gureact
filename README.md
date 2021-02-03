## gureact

[documentation](https://60003f79acfc0b00219273be-qbiusrtdmc.chromatic.com/?path=/docs/introduction--page)

Philosophy: each compnent is independent.

Temp fix from https://github.com/storybookjs/storybook/issues/13593#issuecomment-757427590
Don't forget to remove it after it's get fixed

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
$ yarn add gureact
MDC: yarn add material-components-web react-material-components-web
Antd: yarn add antd

# src/_variables.scss

  $mdc-theme-primary: #3b5999;

# webpack.config.js

  {
    loader: 'sass-loader',
    options: {
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

