///*+++++++++++++++++++++++++++++++++++++

var Url = Backbone.Model.extend({
  defaults: {
    "slang":  "",
    "clicks":   0,
    "when": new Date()
  },
  initialize: function() {
    this.set("slang", Math.random().toString(36).substring(7));
    this.set("when", new Date())
  },
  slang: function() {
    return Math.random().toString(36).substring(7);
  }
});

var UrlCollection = Backbone.Collection.extend({
  model: Url
});

///*+++++++++++++++++++++++++++++++++++++

var HomeView = Backbone.View.extend({
  el: "#app",
  template: _.template($("#home_template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    new UrlListView();
  }
});

var UrlListView = Backbone.View.extend({
  el: "#url_list",
  template: _.template($("#url_list_template").html()),
  initialize: function() {
    this.data = createCollection();    
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    this.data.forEach(function(item){
      new UrlView({
            model: item
          });
    });
  }
});

var UrlView = Backbone.View.extend({
  el: "#url_list table tbody",
  tagName: "tr",
  template: _.template($("#line_template").html()),
  initialize: function() {
    this.render()
  },
  render: function() {
    this.$el.append(this.template(this.model.attributes))
  }
});


var LoginView = Backbone.View.extend({
  el: "#login",
  events: {
    "click #close-login": "close_view",
    "click #join": "join"
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.show()
  },
  close_view: function () {
    this.$el.hide()
    window.location.hash="#"
  },
  join: function(e) {
    e.preventDefault();
    this.$el.hide()
    window.location.hash="#dashboard"
  }
});

var DashboardView = Backbone.View.extend({
  el: "#app",
  template: _.template($("#dashboard_template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template())
    new DashboardMenuView()
  }
});

var DashboardMenuView = Backbone.View.extend({
  el: "#dashboard_menu",
  template: _.template($("#dashboard_menu_template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template())
  }
});


var ListingView = Backbone.View.extend({
  el: "#app",
  template: _.template($("#listing_template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    new DashboardMenuView()
    new UrlListView();
  }
});

var ConfigView = Backbone.View.extend({
  el: "#app",
  template: _.template($("#config_template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    new DashboardMenuView()
  }
});

///*+++++++++++++++++++++++++++++++++++++

function createCollection(nro) {
  return new UrlCollection ([
    new Url(),
    new Url(),
    new Url(),
    new Url(),
    new Url(),
    new Url(),
    new Url()
  ])
} 
