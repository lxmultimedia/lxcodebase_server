module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || '***REMOVED***',
		user: process.env.DB_USER || '***REMOVED***',
		password: process.env.DB_PASSWORD || '***REMOVED***',
		options: {
			dialect: process.env.DIALECT || 'mysql',
			host: process.env.HOST || '***REMOVED***',
			storage: './lxcodebase.sqlite'
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}