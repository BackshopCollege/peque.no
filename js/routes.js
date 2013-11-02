var PequenoRouter = Backbone.Router.extend({

  routes: {
    "" : "home",
    "login": "login",
    "dashboard": "dashboard" 
  },

  home: function(){
    new HomeView();
  },

  login: function() {
    new LoginView();
  },

  dashboard: function() {
    new DashboardView();
  },

});

$(function(){
  new HomeView();
  new PequenoRouter();
  Backbone.history.start();
});