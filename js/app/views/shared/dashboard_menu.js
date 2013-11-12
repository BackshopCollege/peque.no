define([
        'app/events',
        'jquery',
        'underscore',
        'backbone',
        'app/vm',
        'text!layouts/shared/dashboard_menu.html',
], function (Events, $, _, Backbone, Vm, dashboardMenuTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#dashboard_menu',
    events: {
      'click .menu a': 'navigate'
    },
    initialize: function (options) {
      this.options = options
      this.render()
    },
    render: function() {
      $(this.el).html(dashboardMenuTemplate)
      this.eventHandler()
    },
    navigate: function (e) {
      e.preventDefault();
      console.log("navigating")
      window.location.hash=e.target.hash
    },
    eventHandler: function () {
      Events.trigger("dashboard_menu_created", this.options)
      Events.on("dashboard_menu", function(options) {
        $("#dashboard_menu li").removeClass("selected")
        $("#dashboard_menu li."+options.item).addClass("selected")
      })
    },
    clean: function () {
      Events.off("dashboard_menu");
    }



  });
  return View;

});
