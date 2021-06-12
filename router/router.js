const express = require("express");
const {
  postStudent,
  getStudent,
  gettingAll,
  delectingAll,
  deleteStudent,
  imageUpload,
} = require("../controller/controller");
const router = express.Router();

router.get("/movies", getStudent);
router.post("/movies", postStudent);
router.delete("/movies", delectingAll);

router.get("/movies/:id", gettingAll);
router.delete("/movies/:id", delectingAll);

module.exports = router;
