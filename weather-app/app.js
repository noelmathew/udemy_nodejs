const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

geocode.geoCodeAddress(argv.address, (errorMessage, results) =>{
	if(errorMessage){
		console.log(errorMessage);
		return;
	}
	console.log(JSON.stringify(results, undefined, 2));

	weather.getTemperature(results, (errorMessage, results) =>{
		if(errorMessage){
			console.log(errorMessage);
			return;
		}
		console.log(JSON.stringify(results, undefined, 2));
	});
});

