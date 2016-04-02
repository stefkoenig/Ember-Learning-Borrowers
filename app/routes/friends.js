import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(){
      console.log('+- save action bubbled up from friends/new controller to friends/new route. in friends route');
      return true;
    },
    cancel() {
      console.log('+- cancel action bubbled up from friends/new controller to friends/new route. in friends route');
      return true;
    }
  }
});
