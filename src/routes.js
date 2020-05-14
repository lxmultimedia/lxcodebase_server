const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CodebaseController = require('./controllers/CodebaseController')
const CategoryController = require('./controllers/CategoryController')
const ValidationMiddleware = require('./controllers/AuthValidationMiddleware')

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
		ValidationMiddleware.validJWTNeeded, 
		CodebaseController.put),		
	// Insert a listing
	app.post('/codebase',
		ValidationMiddleware.validJWTNeeded,
		CodebaseController.post),
	// delete a listing
	app.delete('/codebase/:entryId',
		ValidationMiddleware.validJWTNeeded,
		CodebaseController.delete),
	// Get all categories
	app.get('/category',
		CategoryController.index),
	// Get a single category
	app.get('/category/:categoryId', 
		CategoryController.single),
	// Update a category
	app.put('/category/:categoryId',
		ValidationMiddleware.validJWTNeeded, 
		CategoryController.put),
	// Insert a category
	app.post('/category',
		ValidationMiddleware.validJWTNeeded,
		CategoryController.post),
	// delete a category
	app.delete('/category/:categoryId',
		ValidationMiddleware.validJWTNeeded,
		CategoryController.delete)
}
