This is where Webpack starts looking, and building the dependency graph( begins with the dependencies of the entry point - normally is index.js file )

- Single Entry syntax :

  - `entry: string|Array<string>`

    ```js
    module.exports = {
      entry: './path/to/my/entry/file.js'
    };
    ```

    is equivalent to: 

    ```js
    module.exports = {
      entry: {
        main: './path/to/my/entry/file.js'
      }
    };
    ```

  - If we pass an array of string to `entry` , webpack will create what is known as a `multi-main entry` - It’s when we inject multiple dependencies together and graph their dependencies into ONE `chunk` - a piece of  a whole `cake`.

- Object Syntax:

  - `entry: {[entryChunkName: string]: string|Array<string>}`

    ```js
    module.exports = {
      entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
      }
    };
    ```

- Multi Page Application

  - ```js
    module.exports = {
      entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
      }
    };
    ```

  - Rule of thumb : each HTML page use exactly one entry point

  - Use `optimization.splitChunks` to create bundles of shared code between page  ( reusable ).

  - Do not create an entry for vendors or other stuffs  because `optimizaton.splitChunks` will do it.

