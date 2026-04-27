const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },

  muscleGroup: { type: String, required: true },
  subGroup: { type: String, required: true },

  targetMuscles: { type: [String], default: [] },
  secondaryMuscles: { type: [String], default: [] },

  equipment: { type: [String], default: [] },
  gifUrl: String,
  instructions: { type: [String], default: [] },

  tier: {
    type: String,
    enum: ["S", "A", "B", "C", "D", "F"],
    default: "B"
  }

}, { timestamps: true });

exerciseSchema.index({ muscleGroup: 1 });
exerciseSchema.index({ subGroup: 1 });

module.exports = mongoose.model("Exercise", exerciseSchema);