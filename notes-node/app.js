console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

var mynote = require('./node-notes.js');

var array = ['Hello','Noel',1, 'Noel', '1', 'Hello'];

console.log(_.uniq(array));

// console.log(mynote.add(9,-2));



// var user= os.userInfo();

// fs.appendFile('Greetings.txt',`Hello ${user.username}!!`);

/*fs.appendFile('Greetings.txt','Hello again!!',function(err){
	if(err){
		console.log("Could not append");
	}
});

fs.appendFileSync('Greetings.txt', 'Hello again the third time');*/