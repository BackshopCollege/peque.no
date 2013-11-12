define([
        'jquery',
        'underscore',
        'backbone',
        'app/vm',
        'text!layouts/home.html',
], function ($, _, Backbone, Vm, homeTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#app',
    events: {},
    initialize: function (options) {
      this.render()
    },
    render: function() {
      $(this.el).html(homeTemplate)
      require(['app/views/home_url'],function(HomeUrlView){
        Vm.create({}, 'HomeUrlView', HomeUrlView);
      });
    }


  });
  return View;

});
