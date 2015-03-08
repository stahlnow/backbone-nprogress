'use strict';

var Backbone  = require('backbone');
var nprogress = require('nprogress');
var debug     = require('debug')('progress');


var progress = (function () {
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
    push: function() {
      counter++;
      counter && start();
    },
    pop: function() {
      --counter <= 0 && done();
    }
  };
})();

var fetch = Backbone.Collection.prototype.fetch;

Backbone.Collection.prototype.fetch = function() {
    progress.push();
    return fetch.apply(this, arguments)
      .then(progress.pop, progress.pop)
    ;

};
