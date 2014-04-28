Wikipages.ArticleRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', params.id);
  }
})
