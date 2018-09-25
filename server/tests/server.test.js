const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');


var {app} = require('./../server');
const {Todo} = require('./../models/todo');

// beforeEach((done) => {
// 	Todo.remove({}).then(() => done());
// });

var todos = [
        {
            _id: new ObjectID('5baa472cfe6d32880e1a06b0'),
            text: "Take your tea",
            completed: false
        },
        {
            _id: new ObjectID('5baa4737fe6d32880e1a06b1'),
            text: "Eat your launch",
            completed: false
        },
        {
        	_id: new ObjectID('5baa4d26c80fcbe01fd0823e'),
        	text: "Test todo text",
        	completed: false
        }
    ];

// describe('POST /todos', () => {
// 	it('should create a new todo', (done) => {
// 		var text = 'Test todo text';
// 		request(app)
// 			.post('/todos')
// 			.send({text})
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.text).toBe(text);
// 			})
// 			.end((err, res) => {
// 				if (err) {
// 					return done(err);
// 				}

// 				Todo.find().then((todos) => {
// 					expect(todos.length).toBe(1);
// 					expect(todos[0].text).toBe(text);
// 					done();
// 				}).catch((e) => done(e));
// 			});
// 	});

// 	it('should not create todo with invalid body data', (done) => {
// 		request(app)
// 			.post('/todos')
// 			.send({})
// 			.expect(400)
// 			.end((err, res) => {
// 				if (err) {
// 					return done(err);
// 				}

// 				Todo.find().then((todos) => {
// 					expect(todos.length).toBe(0);
// 					done();
// 				}).catch((e) => done(e));
// 			});
// 	});
// });

describe('DELETE /todos/:id', () => {
	// it('should remove a todo', (done) => {
	// 	var hexId = todos[0]._id.toHexString();
		
	// 	request(app)
	// 		.delete(`/todos/${hexId}`)
	// 		.expect(200)
	// 		.expect((res) => {
	// 			expect(res.body.todo._id).toBe(hexId);
	// 		}).end((err, res) => {
	// 			if (err) {
	// 				return done(err);
	// 			}

	// 			Todo.findById(hexId).then((todo) => {
	// 				expect(todo).toNotExist();
	// 				done();
	// 			}).catch((e) => done(e));
	// 		});
	// });

	it('should return 404 if todo not found', (done) => {
		var hexId = new ObjectID().toHexString();

		request(app)
			.delete(`/todos/${hexId}`)
			.expect(404)
			.end(done);
	});

	it('should return 404 if object id is invalid', (done) => {
		request(app)
			.delete('/todos/abc123')
			.expect(404)
			.end(done);
	});
});

