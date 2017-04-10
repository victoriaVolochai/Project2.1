define([
	'underscore',
	'backbone',
	'models/message'
], function (_, Backbone, MessageModel) {

	'use strict';
	
	var MessagesCollection=Backbone.Collection.extend({
		model: MessageModel,
		initialize: function() {
    	Backbone.on('addNewMessage', this.add, this);
  		},
	});
	return new MessagesCollection();
});