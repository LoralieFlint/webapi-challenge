const express = require("express")
const db = require("../data/helpers/projectModel")

const router = express.Router()
// GET request for all projects
router.get("/", (req, res) => {
	db.get(req.params.id)
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			next(err)
		})
})

// POST request to add a new project
router.post("/", (req, res) => {
	db.insert(req.body)
		.then(data => {
			res.status(201).json(data)
		})
		.catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Couldn't add projects"
            })
		})
})

// DELETE request to delete a project
router.delete("/:id", (req, res) => {
	db.remove(req.params.id)
		.then(data => {
            console.log(data)
			res.status(204).json({
                message: "project was deleted"
            })
		})
		.catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Couldn't find project by this id"
            })
		})
})



module.exports = router;