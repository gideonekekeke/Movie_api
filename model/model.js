const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const studentModel = mongoose.model("films", studentSchema);

module.exports = studentModel;
