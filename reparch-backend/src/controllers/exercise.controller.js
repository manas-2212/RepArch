const Exercise = require("../models/Exercise");

exports.createExercise = async (req, res) => {
  const exercise = await Exercise.create(req.body);
  res.json(exercise);
};
exports.getSubstitutes = async (req, res) => {
    const { name, equipment } = req.query;
  
    const original = await Exercise.findOne({ name });
  
    if (!original) {
      return res.status(404).json({ message: "Exercise not found" });
    }
  
    const goodTiers = ["S", "A", "B"];
  
    let filter = {
      muscleGroup: original.muscleGroup,
      subGroup: original.subGroup,
      name: { $ne: original.name },
      tier: { $in: goodTiers }
    };
  
    // 🔥 equipment filter
    if (equipment) {
      filter.equipment = { $in: [equipment] };
    }
  
    let substitutes = await Exercise.find(filter);
  
    // fallback if none found
    if (substitutes.length === 0) {
      substitutes = await Exercise.find({
        muscleGroup: original.muscleGroup,
        name: { $ne: original.name },
        tier: { $in: goodTiers }
      });
    }
  
    const tierOrder = { S: 1, A: 2, B: 3 };
  
    substitutes.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);
  
    res.json({
      original,
      substitutes,
      reason: equipment
        ? `Substituted based on available equipment: ${equipment}`
        : "Best alternatives based on effectiveness"
    });
  };
exports.getExercises = async (req, res) => {
    const { muscleGroup, subGroup, tier } = req.query; 
  
    const filter = {};
  
    if (muscleGroup) filter.muscleGroup = muscleGroup;
    if (subGroup) filter.subGroup = subGroup;
  
    if (tier) {
      filter.tier = { $in: tier.split(",") };
    }
  
    const exercises = await Exercise.find(filter);
  
    res.json(exercises);
  };

exports.getGroupedExercises = async (req, res) => {
    const exercises = await Exercise.find();
  
    const grouped = {};
  
    exercises.forEach((ex) => {
      if (!grouped[ex.muscleGroup]) {
        grouped[ex.muscleGroup] = {};
      }
  
      if (!grouped[ex.muscleGroup][ex.subGroup]) {
        grouped[ex.muscleGroup][ex.subGroup] = [];
      }
  
      grouped[ex.muscleGroup][ex.subGroup].push(ex);
    });
  
    res.json(grouped);
  };