//  Code can be found at http://emberjs.com/guides/getting-started/adding-a-route-and-template/

Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function(){
  	// additional child routes go here later.
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('todos');
	}
});