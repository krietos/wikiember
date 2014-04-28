Wikipages.EditArticleRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', params.id);
  }
})
