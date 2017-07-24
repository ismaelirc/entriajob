var koarouter = require('koa-json');
var koa = require('koa');
var bodyparser = require('koa-bodyparser');
var koarouter = require('koa-router');
var logger = require('koa-logger');
var db = require('./db.js');
var Contact = require('./models/contact');

var app = new koa();

var router = koarouter();

app.use(logger());
app.use(bodyparser());


router.get('/contacts', async (ctx, next) => {
  
	let contacts = await Contact.find({});

	if(!contacts){
		ctx.throw(404)
	}

	ctx.body = { contacts };
	
});

router.get('/contacts/:id', async (ctx, next) => {
  
  	let param = ctx.params;
  	let id = param.id;

	let contacts = await Contact.findById(id);

	if(!contacts){
		ctx.throw(404)
	}

	ctx.body = { contacts };
	
});


router.post('/contacts',async (ctx) => {

	if(ctx.request.body){
		
		var contactName = ctx.request.body.name;
		var contactAddress = ctx.request.body.address;

		var contact = new Contact({name: contactName , address:contactAddress});

		try{
			await contact.save();
			ctx.throw(201)
		} catch(err){
			ctx.throw(err)
		}

	}

});

router.put('/contacts/:id',async (ctx) => {

	if(ctx.request.body){

		let param = ctx.params;
	  	let id = param.id;

		let contact = await Contact.findById(id);

		if(!contact){
			ctx.throw(404)
		}
			
		var contactName = ctx.request.body.name;
		var contactAddress = ctx.request.body.address;

		contact.name = contactName;
		contact.address = contactAddress;

		try{
			await contact.save();
			ctx.throw(200)
		} catch(err){
			ctx.throw(err)
		}

	}

});


router.delete('/contacts/:id',async (ctx) => {

	let param = ctx.params;
  	let id = param.id;

	Contact.findByIdAndRemove(id);
	ctx.throw(200);		
		
})

app.use(router.routes());

app.listen(3000,function(){
	console.log('Server running on por 3000')
});