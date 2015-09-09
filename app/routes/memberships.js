import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller){
    controller.set('pageName', 'Memberships');
  },
  renderTemplate(){
    this.render('partials/breadcrumbs');
  }
});