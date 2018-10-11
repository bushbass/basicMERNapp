const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chickenSchmea = {
  name: String,
  breed: String
};

module.exports = mongoose.model("Chicken", chickenSchmea);
