define([
	'jquery',
	'underscore',
	'backbone',
	'views/message'
], function ($, _, Backbone, MessageView ) {
	'use strict';
	
var MessagesView=Backbone.View.extend({
	el:'.chat__messages',
	events: {
		'click .chat__messages-remove-button': 'remove'
	},
	initialize: function() {
		this.$messagesContainer = this.$el.find('.chat__messages-container');
		this.$messagesCounter = this.$el.find('.chat__messages-counter');
		this.listenTo(this.collection, 'add', this.addOne);
		this.listenTo(this.collection, 'add', this.countMessages);
	},
	addOne: function(message) {
		var messageView = new MessageView ({ model: message});
		this.$messagesContainer.append(messageView.render().el);
	},
	countMessages: function(){
		var messageAmount=this.collection.length;
		this.$messagesCounter.html("Всего сообщений: "+ messageAmount);
	},
	render: function() {
		this.collection.each(this.addOne, this);
		return this;
	},
	remove: function(){
		this.collection.remove(this.collection.models);
		this.$messagesContainer.empty();
		this.countMessages();
	}
	});
	return MessagesView;
});

