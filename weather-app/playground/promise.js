var asyncAdd = (a,b) => {

	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a +b);
			}
			else{
				reject('Not valid numbers');
			}
		}, 1500);
	});
}

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(function(){
// 		reject("It does not work");
// 	}, 2500);
// 	resolve("It worked.");
// });

// somePromise.then((message) => {
// 	console.log(message);
// }, (error) => {
// 	console.log('Reject:' + error);
// });


asyncAdd(5,'7')
	.then((data) => {
		console.log(data);
		return asyncAdd(data, 33);
	}, (data) => {
		console.log('Reject:' + data);
	})
	.then(function(data) {
		console.log(data);
		return asyncAdd(data, 'something');
	}, function(data){
	})
	.then(function(data) {
		console.log(data);
	}, function(data){
		console.log('Reject:' + data);
	});