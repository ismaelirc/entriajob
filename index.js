/**
	Application index
*/

var db = require('./db.js');
var Contact = require('./models/contact');

var ismael = new Contact({name: 'Ismael Costa', address:'Rua teste'});

ismael.save(function(er){
	if(er){
		console.log(er);
	}else{
		console.log(ismael);
	}
});