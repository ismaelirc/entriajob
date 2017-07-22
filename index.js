var db = require('./db.js');
var contact = require(__dirname+'/models/contact.js');

var Contact = db.model('Contact',contact);

var ismael = new Contact({name: 'Ismael Costa', address:'Rua teste'});

ismael.save(function(er){
	if(er){
		console.log(er);
	}else{
		console.log(ismael);
	}
})


// var Cat = db.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });