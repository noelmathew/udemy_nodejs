const request = require('request');

var geoCodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	},(error, response, body) => {
		if(error){
			callback("Unable to connect to Google Servers");
		}
		else if(body.status === "ZERO_RESULTS"){
			callback(`No value found with the given address (${address})`);
		}
		else if(body.status === "OK")
		{
			callback(undefined, {
				address: `${body.results[0].formatted_address}`,
				latitude: `${body.results[0].geometry.location.lat}`,
			 	longitude: `${body.results[0].geometry.location.lng}`
			 }
			 );
		}
		else{
			callback('Unknown error');
		}
	});
}

module.exports = {
	geoCodeAddress,
};

//f917c6a2cf50b505e5454b4f6cc27bba

//https://api.darksky.net/forecast/f917c6a2cf50b505e5454b4f6cc27bba/40.7218318,-74.0447003