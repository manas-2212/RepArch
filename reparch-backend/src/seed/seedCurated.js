const mongoose = require("mongoose");
require("dotenv").config();

const Exercise = require("../models/Exercise");
const exercises = require("./curatedExercises");

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Exercise.deleteMany();
    await Exercise.insertMany(exercises);

    console.log("Curated exercises seeded ✅");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();