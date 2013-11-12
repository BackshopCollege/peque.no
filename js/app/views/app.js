define([
        'jquery',
        'underscore',
        'backbone',
        'app/vm',
        'text!layouts/app.html',
], function ($, _, Backbone, Vm, appTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: 'body',
    events: {
      'click #login_btn': 'login',
      'click #logo': 'home'
    },
    initialize: function (options) {
      this.render()
    },
    render: function() {
      $(this.el).html(appTemplate)
      require(['app/views/home'],function(HomeView){
        Vm.create({}, 'HomeView', HomeView);
      });
    },
    login: function(e) {
      e.preventDefault();
      window.location.hash='login'
    },
    home: function(e) {
      e.preventDefault();
      window.location.hash=''
    },

  });
  return View;

});
