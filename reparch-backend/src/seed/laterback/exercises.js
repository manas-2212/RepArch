const mongoose = require("mongoose");
require("dotenv").config();

const Exercise = require("../models/Exercise");

const exercises = [
  // CHEST
  { name: "Barbell Bench Press", muscleGroup: "Chest", subGroup: "Across Chest" },
  { name: "Incline Dumbbell Press", muscleGroup: "Chest", subGroup: "Upper Chest" },
  { name: "Decline Bench Press", muscleGroup: "Chest", subGroup: "Lower Chest" },
  { name: "Cable Fly (High to Low)", muscleGroup: "Chest", subGroup: "Lower Chest" },
  { name: "Cable Fly (Low to High)", muscleGroup: "Chest", subGroup: "Upper Chest" },

  // BACK
  { name: "Lat Pulldown", muscleGroup: "Back", subGroup: "Lats" },
  { name: "Pull Ups", muscleGroup: "Back", subGroup: "Lats" },
  { name: "Barbell Row", muscleGroup: "Back", subGroup: "Middle Back" },
  { name: "Seated Cable Row", muscleGroup: "Back", subGroup: "Middle Back" },
  { name: "Deadlift", muscleGroup: "Back", subGroup: "Lower Back" },

  // BICEPS
  { name: "Barbell Curl", muscleGroup: "Biceps", subGroup: "Long Head" },
  { name: "Incline Dumbbell Curl", muscleGroup: "Biceps", subGroup: "Long Head" },
  { name: "Preacher Curl", muscleGroup: "Biceps", subGroup: "Short Head" },
  { name: "Hammer Curl", muscleGroup: "Biceps", subGroup: "Brachialis" },

  // TRICEPS
  { name: "Tricep Pushdown", muscleGroup: "Triceps", subGroup: "Lateral Head" },
  { name: "Overhead Dumbbell Extension", muscleGroup: "Triceps", subGroup: "Long Head" },
  { name: "Close Grip Bench Press", muscleGroup: "Triceps", subGroup: "All Heads" },

  // SHOULDERS
  { name: "Overhead Press", muscleGroup: "Shoulders", subGroup: "Front Delts" },
  { name: "Lateral Raise", muscleGroup: "Shoulders", subGroup: "Side Delts" },
  { name: "Rear Delt Fly", muscleGroup: "Shoulders", subGroup: "Rear Delts" },
  { name: "Face Pull", muscleGroup: "Shoulders", subGroup: "Rear Delts" },

  // LEGS
  { name: "Barbell Squat", muscleGroup: "Legs", subGroup: "Quads" },
  { name: "Leg Press", muscleGroup: "Legs", subGroup: "Quads" },
  { name: "Leg Extension", muscleGroup: "Legs", subGroup: "Quads" },
  { name: "Romanian Deadlift", muscleGroup: "Legs", subGroup: "Hamstrings" },
  { name: "Leg Curl", muscleGroup: "Legs", subGroup: "Hamstrings" },
  { name: "Hip Thrust", muscleGroup: "Legs", subGroup: "Glutes" },
  { name: "Calf Raise", muscleGroup: "Legs", subGroup: "Calves" },

  // CORE
  { name: "Crunches", muscleGroup: "Core", subGroup: "Upper Abs" },
  { name: "Leg Raises", muscleGroup: "Core", subGroup: "Lower Abs" },
  { name: "Plank", muscleGroup: "Core", subGroup: "Full Core" },
  { name: "Russian Twists", muscleGroup: "Core", subGroup: "Obliques" },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to DB");

    await Exercise.deleteMany();
    console.log("Old exercises cleared");

    await Exercise.insertMany(exercises);

    console.log("Exercises seeded successfully");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();