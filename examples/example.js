'use strict';

// Dependencies
var Backbone = require('backbone');
var $ = Backbone.$ = require('jquery');
var _ = Backbone._ = require('underscore');
var nprogress = require('nprogress');
var collection = new (Backbone.Collection.extend({
  url: 'https://gist.githubusercontent.com/shuvalov-anton/93d730c8cf76b95fcf72/raw/',
}))();

// Patch Backbone
require('..');

$(function() {
  nprogress.configure({
    showSpinner: false,
    speed: 500
  });
  $('.js-fetch-collection').on('click', function() {
    collection.fetch({ reset: true });
  });
});





