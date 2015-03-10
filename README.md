# backbone-nprogress

Show slim [nprogress bars][nprogress] when your backbone collections and models are fetching.

[![nprogress](https://cloud.githubusercontent.com/assets/1410106/6543932/b4256638-c545-11e4-8081-a65e1877996e.png)][nprogress]

[Demo](http://shuvalov-anton.github.io/backbone-nprogress/examples/)

## Install

```
npm install nprogress backbone-nprogress
```

## How to use

```js
var nprogress = require('nprogress');

// Configure nprogress
nprogress.configure({
  showSpinner: false,
  speed: 500
});

// Patch Backbone
require('backbone-nprogress');
```

[nprogress]: http://ricostacruz.com/nprogress/

## License

MIT
