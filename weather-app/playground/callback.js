var getUser = (id,callback) => {
	var user = {
		id: id,
		name: 'Vikram'
	};
	setTimeout(function(){
		callback(user);
	}, 3000);
	//callback(user);
};

getUser(39, function(user){
	console.log(user);
});