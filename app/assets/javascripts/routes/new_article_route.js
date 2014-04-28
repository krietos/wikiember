Wikipages.NewArticleRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article');
  }
})
