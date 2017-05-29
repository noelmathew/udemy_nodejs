console.log("Node-notes required");


var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log("Getting all notes");
};

module.exports = {
	addNote, // is same as addNote: addNote
	getAll
}