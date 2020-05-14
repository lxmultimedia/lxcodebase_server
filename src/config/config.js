module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'af_test',
    user: process.env.DB_USER || 'af_ltest',
    password: process.env.DB_PASSWORD || '!6Je99ok',
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