//  Code can be found at http://emberjs.com/guides/getting-started/adding-a-route-and-template/

Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});