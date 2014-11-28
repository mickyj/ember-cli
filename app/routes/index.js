import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
	model: function() {
		return request('api/friends').then(function(data){
			return {
				friendsCound: data.friends.length
			};
		});
	}
});
