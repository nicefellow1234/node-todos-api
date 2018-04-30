const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5acb542bcdf4a71e3cb6c406')
	}, {
		$set: {
			completed: true,
			text: 'Watch a movie'
		}
	}, {
			returnOriginal: false
		}).then((result) => {
		console.log(result);
	});*/


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5acb55eb747630269422a564')
	}, {
		$inc: {
			age: -1
		}, 
		$set: {
			name: 'Sohaib Shah'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});