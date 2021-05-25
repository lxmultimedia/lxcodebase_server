module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'lxbase_2021',
    user: process.env.DB_USER || 'lxbase_1345',
    password: process.env.DB_PASSWORD || 'kE66ho*9',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'nerthus.ch-meta.net',
      storage: './lxcodebase.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}