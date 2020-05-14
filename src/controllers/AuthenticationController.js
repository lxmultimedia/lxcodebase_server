const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const ONE_WEEK = 60 * 60 * 24 * 7 * 1000
const ONE_HOUR = 60 * 60 * 1000
let EXPIRES = 0

function jwtSignUser (user) {
	EXPIRES = Date.now() + ONE_HOUR
	const token = jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_HOUR / 1000 + 1
	})
	return token
}

module.exports = {
	async register(req,res) {
		try {
			const user = await User.create(req.body)
			const userJson = user.toJSON()
			res.send({
				user: userJson,
				token: jwtSignUser(userJson),
				expires: EXPIRES
			})
		} catch (err) {
			res.status(400).send({
				error: 'This email account is already in use.'
			})
		}
	},
	async login(req,res) {
		try {
			const {email, password} = req.body;
			const user = await User.findOne({
				where: {
					email: email
				}
			})
			if(!user) {
				return res.status(403).send({
					error: "The login information was incorrect"
				})
			}
			
			const isPasswordValid = await user.comparePassword(password)
			if(!isPasswordValid) {
				return res.status(403).send({
					error: "The login information was incorrect"
				})
			}
			const userJson = user.toJSON()

			res.send({
				user: userJson,
				token: jwtSignUser(userJson),
				expires: EXPIRES
			})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured tryin to login'
			})
		}
	}	
}