export default Ember.Route.extend({
  setupController(controller){
    controller.set('pageName', 'Home');
  }
});