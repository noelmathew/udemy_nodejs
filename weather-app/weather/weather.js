const request = require('request');

var getTemperature = (data, callback) => {
	var url = `https://api.darksky.net/forecast/f917c6a2cf50b505e5454b4f6cc27bba/${data.latitude},${data.longitude}`;
	request({
		url: url,
		json: true				
	}, function(error, response, body){
		if(error || response.statusCode != 200){
			callback("Unable to connect to Dark Sky Servers");
		}
		else if (body.code === "400"){
			callback(body.error);
		}
		else
		{
			callback(undefined, {
				temperature: `${body.currently.temperature}`,
				apparentTemperature: `${body.currently.temperature}`
			 });
		}
	});
};

module.exports = {
	getTemperature
};