console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./node-notes.js');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'add'){
	notes.addNote(argv.title, argv.body);
}
else if(command == 'list'){
	notes.getAll();
}
else if(command === 'remove'){
	console.log("Remove note");
}
else{
	console.log('Invalid input');
}