We can set the `mode` parameter to either `develpoment`, `production`, `none` to optimize the way webpack builds bundles:

```js
module.exports = {
  mode: 'production'
};
```

We can change the behavior of config according the argv mode by export an function instead an object:

```js
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'nosource-source-map'
  }
  if (argv.mode === 'production') {
    config.devtool = 'sourcemap'
  }
  return config;
}
```

and set the mode by :

```js
webpack --mode=production

```



