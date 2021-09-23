- Normally, Webpack only understand Javascript and JSON file

- __Loader__ allows webpack to process other type of files and convert them into valid modules can be consumed and added to dependency graph

- __Loader__ should have two properties in webpack configuration file:

  - `test` : identifies which file or files should be transformed
  - `use` : identifies which loader should be used to do the transforming

  The loader rules should be in the modules property:

  ```js
  module: {
      rules: [
        { test: /\.txt$/, use: 'raw-loader' }
      ]
    }
  ```

  The `regex` shouldn’t be quoted

- __Loaders__ can be chained and the chained loaders is executed in reverse order

  First loader is passes its result to the next one and so forth.

  Finally, webpack expects Javascript to be returned by the last loader in chain.

- __Loader__ can be configured with `option` object
