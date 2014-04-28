Wikipages.ArticleController = Ember.ObjectController.extend({
  actions: {
    deleteArticle: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('articles');
      }
    }
  }
})
