import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller){
    controller.set('pageName', 'News');
  }
  // ,
  // render another template - so far as i know it only has ability to load one other template - no more
  // renderTemplate(){
  //   this.render('partials/breadcrumbs');
  // }
});