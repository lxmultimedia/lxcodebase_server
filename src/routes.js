const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CodebaseController = require('./controllers/CodebaseController')
const CategoryController = require('./controllers/CategoryController')

module.exports = (app) => {
	// Register User
	app.post('/register',
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)
	// Login User
	app.post('/login',
		AuthenticationController.login),
	// Get all listings
	app.get('/codebase',
		CodebaseController.index),
	// Get a single listing
	app.get('/codebase/:entryId', 
		CodebaseController.single),
	// Update listing
	app.put('/codebase/:entryId', 
		CodebaseController.put),		
	// Insert a listing
	app.post('/codebase',
		CodebaseController.post),
	// delete a listing
	app.delete('/codebase/:entryId',
		CodebaseController.delete),
	// Get all categories
	app.get('/category',
		CategoryController.index),
	// Get a single category
	app.get('/category/:categoryId', 
		CategoryController.single),
	// Update a category
	app.put('/category/:categoryId', 
		CategoryController.put),
	// Insert a category
	app.post('/category',
		CategoryController.post),
	// delete a category
	app.delete('/category/:categoryId',
		CategoryController.delete)
}
