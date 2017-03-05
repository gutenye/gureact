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
