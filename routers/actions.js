const express = require("express");
const db = require("../data/helpers/actionModel");
const router = express.Router();

// GET all actions
router.get("/", (req, res) => {
  db.get()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});
//GET actionss by ID
router.get("/:id", (req, res) => {
    db.get(req.params.id)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      });
  });

// POST a new action for a project by ID
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Could not create action" }));
});
module.exports = router;
