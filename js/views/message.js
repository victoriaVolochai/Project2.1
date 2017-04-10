define([
	'jquery',
	'underscore',
	'backbone',
], function ($, _, Backbone, messageTemplate) {
	'use strict';
	'use strict';

var MessageView = Backbone.View.extend({
	tagName:'div',
	className: 'well well-sm clearfix', 
	render: function() {
		this.$el.html('<span class="col-sm-9 message"> <span class="username">' + this.model.get('username') +
		'</span>: ' + this.model.get('message') + '</span> <span class="col-sm-3 pull-right message"> ' + 
		this.model.get('date') +' </span>');
		return this;
	}	
});
return MessageView;
});