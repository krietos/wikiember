Wikipages.NewArticleController = Ember.ObjectController.extend({
  actions: {
    createArticle: function() {
      var model = this.get('model');
      var controller = this;

      model.save().then(function() {
        controller.transitionToRoute('articles');
      })
      .catch(function() {
        alert('Please fix the problems noted in red.')
      });
    }
  }
});
