const {CodeEntry} = require('../models')
const {Category} = require('../models')

module.exports = (sequelize, DataTypes) => {
	const CodeEntry = sequelize.define('CodeEntry', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		content: DataTypes.TEXT
	})


	return CodeEntry
}