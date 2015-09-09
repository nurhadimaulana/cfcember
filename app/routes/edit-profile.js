import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller){
    controller.set('pageName', 'Edit Profile');

    controller.set('parentPageName', 'Profile');
    controller.set('parentPageUrl', 'profile');
  },
  renderTemplate(){
    this.render('partials/breadcrumbs');
  }
});