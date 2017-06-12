const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use((req, res, next)=>{
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	fs.appendFile('server.log', log + '\n', (err) => {
		if(err){
			console.log('Unable to append to server.log');
		}
	});
	console.log(log);

	next();
});

//To set up maintenance mode on
app.use((req, res, next)=>{
	res.render('maintenance.hbs');
})


hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
})

app.get('/',(req, res)=> {
	//res.send('<h1>Hello express!</h1>');
	res.render('home.hbs',{
		name: 'Nole',
		likes: [
			'Sleeping'
		],
		pageTitle: 'Home Page',
	});
});

app.get('/about', (req,res)=> {
	//res.send('<h1>About page</h1>');
	res.render('about.hbs',{
		pageTitle: 'About Page',
	});
});

// /bad

app.get('/bad', (req, res)=> {
	res.send({
		'errorMessage': 'terrible things happened'
	});
})

app.listen('3000', ()=>{
	console.log('Server is up on 3000');
});