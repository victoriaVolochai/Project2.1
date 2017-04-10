define([
	'jquery',
	'underscore',
	'backbone',
	'views/message'
], function ($, _, Backbone, MessageView ) {
	'use strict';
	
var MessagesView=Backbone.View.extend({
	el:'#chatWrap',
	events: {
		'click #remove': 'remove'
	},
	initialize: function() {
		this.$chat=this.$el.children().first().children();
		this.listenTo(this.collection, 'add', this.addOne);
		this.listenTo(this.collection, 'add', this.countMessages);
	},
	addOne: function(message) {
		var messageView= new MessageView ({ model: message});
		this.$chat.first().append(messageView.render().el);
	},
	countMessages: function(){
		var messageAmount=this.collection.length;
		this.$chat.last().html("Всего сообщений: "+ messageAmount);
	},
	render: function() {
		this.collection.each(this.addOne, this);//!!!!! НЕ ПОНЯТНО КАК РАБОТАЕТ
		return this;
	},
	remove: function(){
		this.collection.remove(this.collection.models);
		this.$chat.first().empty();
		this.countMessages();
	}
	});
	return MessagesView;
});

