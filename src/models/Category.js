const {Category} = require('../models')
const {CodeEntry} = require('../models')

module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define('Category', {
		title: DataTypes.STRING
	})

	return Category
}