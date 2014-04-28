// For more information see: http://emberjs.com/guides/routing/

Wikipages.Router.map(function() {
  this.resource('articles', { path: '/' }, function() {
    this.resource('new_article', { path: '/articles/new' });
  });

  this.resource('article', { path: '/articles/:id' }, function() {
    this.resource('edit_article', { path: '/articles/:id/edit' });
  });
});
