const mongoose = require("mongoose");

const workoutLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },

  sets: [
    {
      reps: Number,
      weight: Number,
    }
  ],

}, { timestamps: true });

module.exports = mongoose.model("WorkoutLog", workoutLogSchema);