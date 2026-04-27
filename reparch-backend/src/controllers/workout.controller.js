const WorkoutLog = require("../models/WorkoutLog");

exports.logWorkout = async (req, res) => {
  const { exerciseId, sets } = req.body;

  const log = await WorkoutLog.create({
    userId: req.userId,
    exerciseId,
    sets,
  });

  res.json(log);
};

exports.getProgress = async (req, res) => {
  const logs = await WorkoutLog.find({ userId: req.userId })
    .populate("exerciseId")
    .sort({ createdAt: 1 });

  res.json(logs);
};