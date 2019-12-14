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
          console.log(err)
          res.sendStatus(500)
      });
  });
  module.exports = router;