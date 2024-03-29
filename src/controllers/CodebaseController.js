const {CodeEntry} = require('../models')

module.exports = {
	async index(req,res) {
		try {
			const entries = CodeEntry.findAll({
				order: [
            ['title', 'ASC']
        ]
			}).then(function (entries) {
			res.send(entries)
		})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured tryin to fetch the entries'
			})
		}
	},	
	async single(req,res) {
		try {
			const entry = CodeEntry.findByPk(req.params.entryId).then(function (entry) {
			res.send(entry)
		})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured tryin to get the entry'
			})
		}
	},	
	async post(req,res) {
		try {
			const entry = CodeEntry.create(req.body).then(e => {
				res.send(e)
			})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured creating an entry'
			})
		}
	},
	async put(req,res) {
		try {
			const entry = CodeEntry.update(req.body, {
				where: {
					id: req.params.entryId
				}
			})
			res.send(req.body)
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured updating an entry'
			})
		}
	},
	async delete(req,res) {
		try {
			const {entryId} = req.params
			const entry = await CodeEntry.findByPk(entryId)
			await entry.destroy()
			res.send(entry)
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured deleting an entry'
			})
		}
	}
}