module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'vY2hrXxhMe',
		user: process.env.DB_USER || 'vY2hrXxhMe',
		password: process.env.DB_PASSWORD || 'TmvRwBytQm',
		options: {
			dialect: process.env.DIALECT || 'mysql',
			host: process.env.HOST || 'remotemysql.com',
			storage: './lxcodebase.sqlite'
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}