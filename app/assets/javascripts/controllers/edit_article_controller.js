Wikipages.EditArticleController = Ember.ObjectController.extend({
  actions: {
    updateArticle: function() {
      var model = this.get('model');
      var controller = this;

      model.save().then(function() {
        controller.transitionToRoute('article', model);
      })
      .catch(function() {
        alert('Please fix the problems noted in red.')
      });
    }
  }
});
