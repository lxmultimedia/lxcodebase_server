const {Category} = require('../models')

module.exports = {
	async index(req,res) {
		try {
			const categories = Category.findAll().then(function (categories) {
			res.send(categories)
		})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured tryin to fetch the categories'
			})
		}
	},		
	async single(req,res) {
		try {
			const category = Category.findByPk(req.params.categoryId).then(function (category) {
			res.send(category)
		})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured tryin to get the category'
			})
		}
	},		
	async post(req,res) {
		try {
			const category = Category.create(req.body)
			res.send(category)
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured creating a category'
			})
		}
	},
	async put(req,res) {
		try {
			const category = Category.update(req.body, {
				where: {
					id: req.params.categoryId
				}
			})
			res.send(req.body)
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured updating a category'
			})
		}
	}	
}