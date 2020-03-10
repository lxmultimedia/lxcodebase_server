module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'af_ltest',
		user: process.env.DB_USER || 'af_ltest',
		password: process.env.DB_PASSWORD || '8$h8fl0U',
		options: {
			dialect: process.env.DIALECT || 'mysql',
			host: process.env.HOST || 'verdi.sui-inter.net',
			storage: './lxcodebase.sqlite'
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}