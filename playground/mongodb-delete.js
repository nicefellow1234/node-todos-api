const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// deleteMany
	/*db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
		console.log(result);
	});*/

	// deleteOne
	/*db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
		console.log(result);
	});*/

	// findOneAndDelete
	db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	});

	//db.close();
});