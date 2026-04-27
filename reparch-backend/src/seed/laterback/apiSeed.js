// imports
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

const Exercise = require("../models/Exercise");
const tierMap = require("./curatedExercises");


// ✅ 1. NORMALIZE
const normalize = (name) =>
  name.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();


// ✅ 2. TIER
const getTier = (name) => {
  const normalized = normalize(name);

  for (let key in tierMap) {
    if (normalized.includes(key)) {
      return tierMap[key];
    }
  }

  return "B";
};


// ✅ 3. MUSCLE MAP
const mapMuscle = (bodyPart) => {
  const map = {
    chest: "Chest",
    back: "Back",
    upperarms: "Biceps",
    lowerarms: "Forearms",
    shoulders: "Shoulders",
    upperlegs: "Legs",
    lowerlegs: "Legs",
    waist: "Core",
  };

  return map[bodyPart?.toLowerCase()] || "Other";
};


// ✅ 4. SUBGROUP MAP
const mapSubGroup = (target) => {
  const map = {
    pectorals: "Middle Chest",
    lats: "Lats",
    biceps: "Long Head",
    triceps: "Long Head",
    delts: "Front Delts",
    glutes: "Glutes",
    quads: "Quads",
    hamstrings: "Hamstrings",
    abs: "Upper Abs",
  };

  return map[target?.toLowerCase()] || target;
};


// ✅ 5. MAIN FUNCTION (NOW SAFE)
const seedFromAPI = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const { data } = await axios.get(
      "https://oss.exercisedb.dev/api/v1/exercises"
    );

    const exercisesData = data.data || data.exercises || data;

    const transformed = exercisesData.map((ex) => ({
      name: ex.name,

      muscleGroup: mapMuscle(ex.bodyParts?.[0]),
      subGroup: mapSubGroup(ex.targetMuscles?.[0]),

      targetMuscles: ex.targetMuscles || [],
      secondaryMuscles: ex.secondaryMuscles || [],

      equipment: ex.equipments || ex.equipment || [],
      gifUrl: ex.gifUrl || "",
      instructions: ex.instructions || [],

      tier: getTier(ex.name),
    }));

    await Exercise.deleteMany();
    await Exercise.insertMany(transformed);

    console.log("Seeded with tiers 🚀");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedFromAPI();