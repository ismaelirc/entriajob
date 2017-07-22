/**
	Module Contact
	
	name: String,
	address: String,
	dateCreated: Date

*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: String,
	address: String,
	dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Contact',contactSchema);