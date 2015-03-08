'use strict';

var Backbone  = require('backbone');
var nprogress = require('nprogress');
var counter   = 0;
var debounce  = 500;

// Patch Backbone
patch(Backbone.Collection.prototype, 'fetch');
patch(Backbone.Model.prototype, 'fetch');
patch(Backbone.Model.prototype, 'save');


// Start progress
function start() {
  if (!++counter) nprogress.start();
}

// Finish progress
function done() {
  if (--counter > 0) return;
  done.timer && clearTimeout(done.timer);
  done.timer = setTimeout(function() {
    if (!counter) nprogress.done();
  }, debounce);
}

// Patch given method
function patch(parent, method) {
  var original = parent[method];
  return function() {
    exports.start();
    return original.apply(this, arguments)
      .then(done, done)
    ;
  };
}
