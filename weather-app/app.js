const request = require('request');

request({
	url: 'http://maps.googleapis.com/maps/api/geocode/json?address=181%2010th%20Street%20Jersey%20City',
	json: true
},(error, response, body) => {
	console.log(JSON.stringify(body, undefined, 2));
});
