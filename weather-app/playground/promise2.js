const request = require('request');

var geoCodeAddress = function(address){
	return new Promise(function(resolve, reject){
		var encodedAddress = encodeURIComponent(address);
		var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
		request({
			url: url,
			json: true
		}, function(error, response, body){
			if(error){
				reject("Unable to connect to Google Servers");
			}
			else if(body.status === "ZERO_RESULTS"){
				reject(`No value found with the given address (${address})`);
			}
			else if(body.status === "OK")
			{
				resolve({
					address: `${body.results[0].formatted_address}`,
					latitude: `${body.results[0].geometry.location.lat}`,
				 	longitude: `${body.results[0].geometry.location.lng}`
				 });
			}
			else{
				reject('Unknown error');
			}
		});
	});
};

geoCodeAddress('27606')
	.then(function(data){
		console.log(JSON.stringify(data));
	})
	.catch(function(data){
		console.log(`Error returned:${data}`);
	});