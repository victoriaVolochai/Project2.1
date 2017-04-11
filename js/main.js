
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
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
], function (Backbone, MeessageModel, messagesCollection, FormView, MessagesView) {
	// Initialize the application view
	var message= new MeessageModel();
	new MessagesView({
	collection: messagesCollection});
	new FormView({
	model:message})
});


