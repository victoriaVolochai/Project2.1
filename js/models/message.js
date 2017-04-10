define(['underscore', 
		'backbone'
		], function(_, Backbone) {

'use strict';
	
var MessageModel=Backbone.Model.extend({
	validate: function(attrs, options){
		var errors={};
		var attributes=[];
		console.log(attrs);
		console.log(options);
		if(_.has(options, 'attributeForValidation')){
		attributes.push(options['attributeForValidation']);
		console.log(attributes);
		}else{
		console.log(attributes);
		attributes=_.keys(attrs)
		console.log(attributes);
		}
		_.each(attributes, function(attribute){
		if(! attrs[attribute]) {
		 	errors[attribute] = attribute +' is required';
		 }
		 });
		 console.log(errors);
		 if(!_.isEmpty(errors)){
		 	 console.log(errors);
		 	return errors;
		 	}
		 
		 /**/
		 
		/*var errors={};
			if(!attrs.username){
		 		errors.username='Username is required';
		 	}
			if(!attrs.messageText){
		 		errors.messageText='Message is required';
		 	}
		 	if(!_.isEmpty(errors)){
		 	 console.log(errors);
		 	return errors;
		 	}
		 	_.each(attrs, function(value, attribute){
		if( attrs.attribute==="") {
		 	error = attribute +' is required';
		 }
		 })
		 return error
		 	if( attrs.username==="") {
		 	return'Username is required';
		 } else if(attrs.messageText===""){
			return 'Message is required';
		 }*/
		},
	
	});
	
	return MessageModel;
});

/*_validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }
    */
  /*if(attrs.username===""){
  if(attrs.messageText=== undefined){
  return 'Username is required';
  
  var errors={};
		console.log(attrs);
		_.each(attrs, function(value, attribute){
		console.log(attribute);
		console.log(value);
		if(value==="") {
		 	errors[attribute] = attribute+ ' is required';
		 }
		 })
		 console.log(errors);
		 if(!_.isEmpty(errors)){
		 	 console.log(errors);
		 	return errors;
		 	}
		 
  */