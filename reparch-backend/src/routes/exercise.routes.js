const express = require("express");
const router = express.Router();

const {
    getExercises,
    createExercise,
    getGroupedExercises,
    getSubstitutes
  } = require("../controllers/exercise.controller");
  
router.get("/substitute", getSubstitutes); 

router.get("/", getExercises);
router.post("/", createExercise);
router.get("/grouped",getGroupedExercises);

module.exports = router;