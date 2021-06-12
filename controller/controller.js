const mongoose = require("mongoose");
const films = require("../model/model");
const multer = require("multer");

//creacting function for our route

// creating the function for pictures
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single("image");

// getting all student
const getStudent = async (req, res) => {
  try {
    const getAll = await films.find();
    res.json(getAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//posting or creating to our database
const postStudent = async (req, res) => {
  try {
    const student = await films.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });
    res.json({ student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// getting all the data by id
const gettingAll = async (req, res) => {
  try {
    const getting = await films.findById(req.params.id);
    res.json(getAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//deleting data by id  from our database

const deleteStudent = async (req, res) => {
  try {
    const del = await films.findByIdAndDelete(req.body.id);
    res.status(200).json(del);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delecting all student from our database

const delectingAll = async (req, res) => {
  try {
    const delAll = await films.deleteMany();
    res.json({ message: "all student has been delected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  postStudent,
  getStudent,
  gettingAll,
  delectingAll,
  deleteStudent,
  imageUpload,
};
