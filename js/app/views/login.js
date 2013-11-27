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
      'click #join': 'login',
      'click #login_box': 'prevent_closing',
      'click #close-login': 'clean'
    },
    initialize: function (options) {
      this.render()
      var that = this;

      //close this view when clicked outside it
      $("body").click(function(e){
        that.clean();
      });
    },
    render: function() {
      $(this.el).html(loginTemplate)
    },
    login: function (e) {
      var that = this;
      e.preventDefault();
      e.stopPropagation();
      var jqxhr = $.post( "http://localhost:9292/account/login", $( "#login_form" ).serializeArray())
        .done(function(data) {
          that.redirect_login(data)
        })
        .fail(function(data) {
          that.login_fail(data)
        });
    },

    redirect_login: function(data) {
      console.log("sucesso no login")
      console.log(data)
      this.clean()
      window.location.hash='dashboard'
    },
    login_fail: function(data) {
      console.log("falha no login")
      console.log(data)
    },

    clean: function () {
      $("body").unbind("click");
      $(this.el).html("")
      this.undelegateEvents()
      window.location.hash=''
    },
    prevent_closing: function (e) {
      e.preventDefault();
      e.stopPropagation();
    },
    


  });
  return View;

});
