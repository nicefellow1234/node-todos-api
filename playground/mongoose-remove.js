const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5baa41d792044013ca7d33c6'}).then((doc) => {
	console.log(doc);
});

Todo.findByIdAndRemove('5baa41d792044013ca7d33c6').then((doc) => {
	console.log(doc);
});