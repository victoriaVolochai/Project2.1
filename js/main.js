
'use strict';

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: 'lib/jquery/jquery-1.12.0',
		underscore: 'lib/underscore/underscore-1.8.3',
		backbone: 'lib/backbone/backbone-1.2.3-min',
		backboneLocalstorage: 'lib/backbone-localstorage/backbone.localStorage'
	}
});

require([
	'backbone',
	'models/message',
	'collections/messages',
	'views/form',
	'views/messages'
], function (Backbone, MessageModel, messagesCollection, FormView, MessagesView) {
	var message= new MessageModel();
	new MessagesView({
	collection: messagesCollection});
	new FormView({
	model:message})
});


