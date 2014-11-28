import Ember from 'ember';
//Taking the function in utils/date-helpers
import { formatDate } from '../utils/date-helpers';
export default Ember.Handlebars.makeBoundHelper(function(date, format) {	
  return formatDate(date, format);
});

