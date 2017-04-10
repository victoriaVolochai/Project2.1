define([
	'jquery',
	'underscore',
	'backbone',
	'models/message'
], function ($, _, Backbone, MessageModel) {
	'use strict';


var FormView=Backbone.View.extend({
	el: '#chatForm',
	events : {
	'submit': 'submit',
	'blur .form-control': 'blurFieldValue',
	'focus .form-control': 'clearErrors'
	},
	initialize: function(){
	},
	allFieldsValue: function() {
		var values={};
		this.$el.find('.form-control').each(function(){
		values[$(this).attr("id")]=$(this).val();
		});
        return values;
	},
	displayErrors: function(){
		_.each(this.model.validationError, function(value, field){
		console.log(this);
			this.$el.find('#'+ field).next().text(value); 
			this.$el.find('#'+ field).addClass('error');
		}, this);
	
	},
	clearErrors:function(e){
		var field=$(e.target).attr("id");
		this.$el.find('#'+ field).next().text(""); 
		this.$el.find('#'+ field).removeClass('error');
	},
	validation: function(attributes) {
		var options={validate: true}
		if(_.keys(attributes).length==1){
			options["attributeForValidation"]= _.keys(attributes)[0];
			console.log(options);
		}
		this.model.set(attributes, options);
		if(this.model.validationError){
			this.displayErrors();
		}
	},	
	blurFieldValue: function(e) {
		var attr=$(e.target).attr("id");
		var value=$(e.target).val();
		var field={};
		field[attr]=value;
		this.validation(field);
	},
	submit: function(e){
		//предотвращаем действия по умолчанию, форма не отправляет на сервер данные и не обновляет страницу
		e.preventDefault();
		this.validation(this.allFieldsValue());
		if(this.model.validationError){
		return;
		}else{
		this.model.set('date', new Date().toLocaleTimeString());
		Backbone.trigger('addNewMessage', this.model);
		this.model=new MessageModel();
		this.$el.trigger('reset');
		} 
	}

	});
	
	return FormView;
});
/* Валидация валидация по сабмиту пишем в обработчик сабмита
this.model.set(this.newAttributes());
		if(!this.model.isValid()){
		console.log(this.model.validationError);
		console.log(this.model.username);
		console.log(this.model.messageText);
		this.displayErrors();
		return;
	}*/