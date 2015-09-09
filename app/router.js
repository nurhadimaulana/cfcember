import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('news');
  this.route('teams');
  this.route('matches');
  this.route('tickets');
  this.route('memberships');
  this.route('shop');
  this.route('videos');
  this.route('fans');
  this.route('club');
  this.route('hospitality');
  this.route('register');
  this.route('login');
  this.route('edit_profile');
  this.route('profile');
});

export default Router;
