const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);

var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(url)
	.then(function(response){
		var data = response.data;
		if(data.status === 'ZERO_RESULTS'){
			throw new Error('Unable to find that address');
		}
		else{
			var address = `${data.results[0].formatted_address}`;
			console.log(address);
			var latitude = `${data.results[0].geometry.location.lat}`;
			var longitude = `${data.results[0].geometry.location.lng}`;
			var weatherUrl = `https://api.darksky.net/forecast/f917c6a2cf50b505e5454b4f6cc27bba/${latitude},${longitude}`;
			return axios.get(weatherUrl);
		}
	})
	.then(function(response){
		data = response.data;
		console.log(`Temperature: ${data.currently.temperature}`);
		console.log(`Feels like: ${data.currently.temperature}`);
	})
	.catch(function(error){
		if(error.code === 'ENOTFOUND'){
			console.log('Error: Unable to connect to API servers');	
		}
		else{
			console.log('Error: '+ error.message);
		}
	});