define(['backbone','app/models/url'], function(Backbone, Url){
  var UrlCollection = Backbone.Collection.extend({
    model: Url,
    url: function() {
      return 'http://localhost:9292/url/.json';
    }
  });
  return UrlCollection;
});
