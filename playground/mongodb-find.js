const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');


	/*db.collection('Todos').find().count().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Todos', err);
	});*/

	/*db.collection('Users').find({name: 'Umair Shah'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});*/

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
			return	console.log('Unable to insert Todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	/*db.collection('Users').insertOne({
		name: 'Umair Shah',
		age: 22,
		location: 'Mardan'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert User', err);
		}

		console.log(result.ops[0]._id.getTimestamp());
	});*/

	//db.close();
});