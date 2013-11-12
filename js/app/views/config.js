define([
        'app/events',
        'jquery',
        'underscore',
        'backbone',
        'text!layouts/shared/config.html',
], function (Events, $, _, Backbone, configTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#app_area',
    template: _.template(configTemplate),
    events: {},
    initialize: function (options) {
      Events.trigger('app_area',{item:"config"});
      this.render()
    },
    render: function() {
      $(this.el).html(this.template());
    },
  });
  return View;

});
