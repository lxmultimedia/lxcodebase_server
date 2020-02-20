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
		AuthenticationController.login)
	// Get all Entries
	app.get('/codebase',
		CodebaseController.index)
	// Get a single entry
	app.get('/codebase/:entryId', 
		CodebaseController.single)		
	// Update Entry
	app.put('/codebase/:entryId', 
		CodebaseController.put)			
	// Insert an entry
	app.post('/codebase',
		CodebaseController.post)
	// Get all categories
	app.get('/category',
		CategoryController.index) 
	// Get a single category
	app.get('/category/:categoryId', 
		CategoryController.single)
	// Update a category
	app.put('/category/:categoryId', 
		CategoryController.put)	
	// Insert a category
	app.post('/category',
		CategoryController.post)	
}
