const express = require("express");
const router = express.Router();
const Chicken = require("../../models/chickens");

//GET list all chickens
router.get("/", (req, res) => {
  Chicken.find({}, (err, data) => {
    if (err) return console.log(err);
    res.json(data);
  });
});

// POST create a new chicken
router.post("/", (req, res) => {
  Chicken.create(
    { name: req.body.name, breed: req.body.breed },
    (err, data) => {
      if (err) console.log(err);
      res.json(data);
    }
  );
});

//GET list one chicken
router.get("/:id", (req, res) => {
  Chicken.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return console.log(err);
    res.json(data);
  });
});

//PUT update a chicken
router.put("/:id/edit", (req, res) => {
  Chicken.findOneAndUpdate(
    { _id: req.params.id },
    { name: req.body.name, breed: req.body.breed },
    { new: true },
    (err, data) => {
      if (err) return console.log(err);
      res.json(data);
    }
  );
});

// DELETE delete a chicken
router.delete("/:id", (req, res) => {
  Chicken.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) return console.log(err);
  });
  res.redirect(303, "/api/chickens");
});

module.exports = router;
