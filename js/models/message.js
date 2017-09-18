define(['underscore', 
		'backbone'
		], function(_, Backbone) {

'use strict';
	
var MessageModel=Backbone.Model.extend({
	validate: function(attrs, options){
		var errors={};
		var attributesForValidation=[];
		if(_.has(options, 'oneAttributeForValidation')){
		attributesForValidation.push(options['oneAttributeForValidation']);
		}else{
		attributesForValidation=_.keys(attrs)
		}
		_.each(attributesForValidation, function(attribute){
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