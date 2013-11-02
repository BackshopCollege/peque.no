var PequenoRouter = Backbone.Router.extend({

  routes: {
    "" : "home",
    "login": "login",
    "dashboard": "dashboard",
    "listing": "listing",
    "config": "config",
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
  listing: function() {
    new ListingView();
  },
  config: function() {
    new ConfigView();
  },

});

$(function(){
  new HomeView();
  new PequenoRouter();
  Backbone.history.start();
});
