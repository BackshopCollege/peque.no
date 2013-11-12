define([
        'app/events',
        'jquery',
        'underscore',
        'backbone',
        'app/vm',
        'text!layouts/create_url.html',
], function (Events, $, _, Backbone, Vm, createUrlTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#app_area',
    events: {},
    initialize: function (options) {
      Events.trigger('app_area',{item:"create_url"});
      this.render()
    },
    render: function() {
      $(this.el).html(createUrlTemplate)
    },


  });
  return View;

});
