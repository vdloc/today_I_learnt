They can perform a wider range of tasks like:

- Bundle optimization,
- Asset management
- Injection of environment

In order to use a plugin, you need to `require()`, and add it to the `plugins` array.

We can use a plugin with multiple times in a config for different purposes by call `new` operator:

```js

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

