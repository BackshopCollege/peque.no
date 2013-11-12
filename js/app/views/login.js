define([
        'jquery',
        'underscore',
        'backbone',
        'app/vm',
        'text!layouts/shared/login.html',
], function ($, _, Backbone, Vm, loginTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#login',
    events: {
      'click #join': 'login'
    },
    initialize: function (options) {
      this.render()
    },
    render: function() {
      $(this.el).html(loginTemplate)
    },
    login: function (e) {
      e.preventDefault();
      console.log("logging in")
      window.location.hash='dashboard'
    },
    clean: function () {
      $(this.el).html("")
    }


  });
  return View;

});
