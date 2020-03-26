## Cuberto react boilerplate

### Project structure

````
build/
src/
|- index.jsx _______________________________ # Application entry 
|- App.tsx _________________________________ # Application init
|  |- Components/
|    |- ComponentName/ 
|       |- index.tsx _______________________ # Sample component

webpack
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config      
````


### Installation

1. `npm install` to install npm packages

2. Start dev server using `npm start`.

3. Build and bundling your resources for production `npm run build`.

4. Unit testing will watch all your changes in the test files as well as create coverage folder for you. 
`yarn test`


### Configuration

* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* `webpack/webpack.dev.js` config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Browsers list config `/.browserslistrc`.


### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react) `16.8`
* [Mobx](https://github.com/mobxjs/mobx)
* [Lodash](https://github.com/lodash/lodash) [ with [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) ]
* [Jest](https://github.com/facebook/jest) [ Unit test ]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Eslint](https://github.com/eslint/eslint/) [ Airbnb config ]
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
* [React hot loader](https://github.com/gaearon/react-hot-loader)
* [Webpack dev server](https://github.com/webpack/webpack-dev-server) 
