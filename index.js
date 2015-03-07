'use strict';

const Backbone  = require('backbone');
const nprogress = require('nprogress');
const debug     = require('debug')('progress');

nprogress.configure({
  showSpinner: false,
  speed: 500
});

let progress = (function () {
  var counter = 0;
  var debouncer = 0;
  var start = function() {
    debug('start');
    nprogress.start();
  };
  var done = function() {
    debouncer && clearTimeout(debouncer);
    debouncer = setTimeout(function() {
      debug('done');
      if (!counter) nprogress.done();
    }, 500);
  };
  return {
    push() {
      counter++;
      counter && start();
    },
    pop() {
      --counter <= 0 && done();
    }
  };
})();

Backbone.Collection = class Collection extends Backbone.Collection {
  fetch(...args) {
    progress.push();
    return super.fetch(...args)
      .then(progress.pop, progress.pop)
    ;
  }
};
