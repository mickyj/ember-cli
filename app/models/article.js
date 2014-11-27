import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  friend: DS.belongsTo('friend'),
  createdAt: DS.attr('date'),
  notes: DS.attr('string'),
  state: DS.attr('string', { 
  	defaultValue: 'borrowed'
  })
});




