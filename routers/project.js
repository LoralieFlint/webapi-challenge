const express = require("express")
const db = require("../data/helpers/projectModel")

const router = express.Router()

router.get("/", (req, res) => {
	db.get(req.params.id)
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			next(err)
		})
})

module.exports = router;