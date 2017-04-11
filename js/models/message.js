define(['underscore', 
		'backbone'
		], function(_, Backbone) {

'use strict';
	
var MessageModel=Backbone.Model.extend({
	validate: function(attrs, options){
		var errors={};
		var attributes=[];
		if(_.has(options, 'attributeForValidation')){
		attributes.push(options['attributeForValidation']);
		}else{
		attributes=_.keys(attrs)
		}
		_.each(attributes, function(attribute){
		if(! attrs[attribute]) {
		 	errors[attribute] = attribute +' is required';
		 }
		 });
		 if(!_.isEmpty(errors)){
		 	return errors;
		 	}
		},
	
	});
	
	return MessageModel;
});