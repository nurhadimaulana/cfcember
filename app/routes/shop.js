import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller){
    controller.set('pageName', 'Shop');
  },
  renderTemplate(){
    this.render('partials/breadcrumbs');
  }
});