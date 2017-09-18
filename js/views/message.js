define([
	'jquery',
	'underscore',
	'backbone',
], function ($, _, Backbone, messageTemplate) {
	'use strict';
	'use strict';

var MessageView = Backbone.View.extend({
	tagName:'div',
	className: 'message well well-sm clearfix', 
	messageTemplate: _.template('<div class="message__text"> <span class="username"><%= username %></span>:<%= message %></div> <div class=" message__time"><%= date %></div>'),
	render: function() {
		this.$el.html(this.messageTemplate(this.model.toJSON()));
		return this;
	}	
});
return MessageView;
});