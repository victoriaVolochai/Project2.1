define([
	'jquery',
	'underscore',
	'backbone',
	'models/message'
], function ($, _, Backbone, MessageModel) {
	'use strict';


var FormView=Backbone.View.extend({
	el: '.chat__form',
	events : {
	'submit': 'submit',
	'blur .form-control': 'validateBlurFieldValue',
	'focus .form-control': 'clearError'
	},
	getAllFieldsValue: function() {
		var values={};
		this.$el.find('.form-control').each(function(){
		values[$(this).attr("id")]=$(this).val();
		});
        return values;
	},
	displayErrors: function(){
		_.each(this.model.validationError, function(value, field){
			this.$el.find('#'+ field).next().text(value); 
			this.$el.find('#'+ field).addClass('error');
		}, this);
	
	},
	clearError:function(e){
		var field=$(e.target).attr("id");
		this.$el.find('#'+ field).next().text(""); 
		this.$el.find('#'+ field).removeClass('error');
	},
	sendForValidation: function(attributes) {
		var options={validate: true}
		if(_.keys(attributes).length==1){
			options["oneAttributeForValidation"]= _.keys(attributes)[0];
		}
		this.model.set(attributes, options);
		if(this.model.validationError){
			this.displayErrors();
		}
	},	
	validateBlurFieldValue: function(e) {
		var attr=$(e.target).attr("id");
		var value=$(e.target).val();
		var field={};
		field[attr]=value;
		this.sendForValidation(field);
	},
	submit: function(e){
		e.preventDefault();
		this.sendForValidation(this.getAllFieldsValue());
		if(this.model.validationError){
		return;
		}else{
		this.model.set('date', new Date().toLocaleTimeString('en-US'));
		Backbone.trigger('addNewMessage', this.model);
		this.model=new MessageModel();
		this.$el.trigger('reset');
		} 
	}

	});
	
	return FormView;
});