# ThirdPartay.js

A tiny library that loads and manages external third-party JavaScript snippets.

## About
Sometimes you need to include a vendor's third party "cut and paste" JavaScript snippet in your project.  ThirdPartay is a tiny, dependency-free library that gives you basic loading, management, and callback capabilities (via ES6 promises) over those unruly snippets.  With ThirdPartay, you can bridge the gap between your own code and external vendor-provided scripts.

## Usage
To use ThirdPartay, you'll need a modern JavaScript workflow and build system with ES6 module bundling and transpiling capabilities.  [Here's](https://github.com/callmecavs/outset) a great example.  ThirdPartay makes use of ES6 promises, which are supported in modern browsers.  To support older browsers, you might need to [polyfill](https://github.com/stefanpenner/es6-promise).

### Install
Install ThirdPartay via NPM and add to your dependencies:

```bash
$ npm install third-partay.js --save
```

### Initialize

Import the ThirdPartay module, then instantiate it.  The constructor takes an optional selector argument, this is the selector to which your third party scripts will be appended.  The default document.body should be fine in most cases.

```es6
// import ThirdPartay
import ThirdPartay from 'third-partay'

// create an instance
const Party = new ThirdPartay()
```

Each instance represents a group of external scripts.  You can add as many scripts to an instance as you'd like.

```es6
Party.add('//cdn.urltoyourvendorsscript.com/script.js')
Party.add('//static.urltoanothervendorsscript.com/script.js')
```

Each instance returns a promise when all member scripts are loaded, allowing you to create intelligent groups of third party snippets with asynchronous promise-driven callbacks.  Add a callback function to your instance to execute it once all of the instances scripts have been loaded.

```es6
Party.loaded((returned) => {
  console.log(returned);
});
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2016 Donny West

[![Built With Swag](http://forthebadge.com/images/badges/built-with-swag.svg)](http://forthebadge.com)
