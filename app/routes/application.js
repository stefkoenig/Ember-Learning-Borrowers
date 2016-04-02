import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      console.log('save action - bubbling up into application route from friends route from friends/new route from friends/new controller');
      return true;
    },
    cancel() {
      console.log('cancel action - bubbling up into application route from friends route from friends/new route from friends/new controller');
      return true;
    }
  }
});
