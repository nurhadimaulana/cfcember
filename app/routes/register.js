import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller){
    controller.set('pageName', 'Register');
  },
  renderTemplate(){
    this.render('partials/breadcrumbs');
  }
});