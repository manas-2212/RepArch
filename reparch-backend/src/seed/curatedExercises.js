const exercises = [

  // ===== CHEST =====
  { name: "Machine Chest Press", muscleGroup: "Chest", subGroup: "Middle Chest", tier: "S", equipment: ["machine"] },
  { name: "Seated Cable Flyes", muscleGroup: "Chest", subGroup: "Lower Chest", tier: "S", equipment: ["cable"] },

  { name: "Barbell Bench Press", muscleGroup: "Chest", subGroup: "Middle Chest", tier: "A", equipment: ["barbell"] },
  { name: "Incline Barbell Bench Press", muscleGroup: "Chest", subGroup: "Upper Chest", tier: "A", equipment: ["barbell"] },
  { name: "Flat Dumbbell Bench Press", muscleGroup: "Chest", subGroup: "Middle Chest", tier: "A", equipment: ["dumbbell"] },
  { name: "Incline Dumbbell Bench Press", muscleGroup: "Chest", subGroup: "Upper Chest", tier: "A", equipment: ["dumbbell"] },
  { name: "Dips", muscleGroup: "Chest", subGroup: "Lower Chest", tier: "A", equipment: ["bodyweight"] },
  { name: "Smith Machine Bench Press", muscleGroup: "Chest", subGroup: "Middle Chest", tier: "A", equipment: ["machine"] },
  { name: "Standing Cable Flyes", muscleGroup: "Chest", subGroup: "Middle Chest", tier: "A", equipment: ["cable"] },

  { name: "Decline Barbell Bench Press", muscleGroup: "Chest", subGroup: "Lower Chest", tier: "B", equipment: ["barbell"] },
  { name: "Decline Dumbbell Bench Press", muscleGroup: "Chest", subGroup: "Lower Chest", tier: "B", equipment: ["dumbbell"] },

  { name: "Push-Ups", muscleGroup: "Chest", subGroup: "Middle Chest", tier: "C", equipment: ["bodyweight"] },

  // ===== BACK =====
  { name: "Neutral Grip Pull-Ups", muscleGroup: "Back", subGroup: "Lats", tier: "S", equipment: ["bodyweight"] },
  { name: "Chin-Ups", muscleGroup: "Back", subGroup: "Lats", tier: "S", equipment: ["bodyweight"] },
  { name: "Neutral Grip Lat Pulldown", muscleGroup: "Back", subGroup: "Lats", tier: "S", equipment: ["machine"] },
  { name: "1-Arm Dumbbell Row", muscleGroup: "Back", subGroup: "Middle Back", tier: "S", equipment: ["dumbbell"] },
  { name: "Meadows Row", muscleGroup: "Back", subGroup: "Middle Back", tier: "S", equipment: ["barbell"] },

  { name: "Barbell Row", muscleGroup: "Back", subGroup: "Middle Back", tier: "A", equipment: ["barbell"] },
  { name: "Pendlay Row", muscleGroup: "Back", subGroup: "Middle Back", tier: "A", equipment: ["barbell"] },
  { name: "Wide Grip Lat Pulldown", muscleGroup: "Back", subGroup: "Lats", tier: "A", equipment: ["machine"] },

  { name: "Deadlift", muscleGroup: "Back", subGroup: "Lower Back", tier: "D", equipment: ["barbell"] },

  // ===== BICEPS =====
  { name: "Machine Preacher Curl", muscleGroup: "Biceps", subGroup: "Short Head", tier: "S", equipment: ["machine"] },
  { name: "Dumbbell Preacher Curl", muscleGroup: "Biceps", subGroup: "Short Head", tier: "S", equipment: ["dumbbell"] },
  { name: "Face Away Bayesian Cable Curl", muscleGroup: "Biceps", subGroup: "Long Head", tier: "S", equipment: ["cable"] },

  { name: "EZ Bar Curl", muscleGroup: "Biceps", subGroup: "Long Head", tier: "A", equipment: ["barbell"] },
  { name: "Incline Dumbbell Curl", muscleGroup: "Biceps", subGroup: "Long Head", tier: "A", equipment: ["dumbbell"] },
  { name: "Hammer Curl", muscleGroup: "Biceps", subGroup: "Brachialis", tier: "A", equipment: ["dumbbell"] },

  { name: "Barbell Curl", muscleGroup: "Biceps", subGroup: "Long Head", tier: "B", equipment: ["barbell"] },

  // ===== SHOULDERS =====
  { name: "Cable Lateral Raise", muscleGroup: "Shoulders", subGroup: "Side Delts", tier: "S", equipment: ["cable"] },
  { name: "Dumbbell Lateral Raise", muscleGroup: "Shoulders", subGroup: "Side Delts", tier: "S", equipment: ["dumbbell"] },
  { name: "Reverse Pec Deck", muscleGroup: "Shoulders", subGroup: "Rear Delts", tier: "S", equipment: ["machine"] },

  { name: "Overhead Press", muscleGroup: "Shoulders", subGroup: "Front Delts", tier: "A", equipment: ["barbell"] },
  { name: "Machine Shoulder Press", muscleGroup: "Shoulders", subGroup: "Front Delts", tier: "A", equipment: ["machine"] },

  { name: "Arnold Press", muscleGroup: "Shoulders", subGroup: "Front Delts", tier: "B", equipment: ["dumbbell"] },

  // ===== TRICEPS =====
  { name: "Overhead Cable Extension", muscleGroup: "Triceps", subGroup: "Long Head", tier: "S", equipment: ["cable"] },
  { name: "Skull Crushers", muscleGroup: "Triceps", subGroup: "Long Head", tier: "S", equipment: ["barbell"] },
  { name: "Cable Pushdowns", muscleGroup: "Triceps", subGroup: "Lateral Head", tier: "S", equipment: ["cable"] },

  { name: "Close Grip Bench Press", muscleGroup: "Triceps", subGroup: "All Heads", tier: "A", equipment: ["barbell"] },
  { name: "Dips", muscleGroup: "Triceps", subGroup: "All Heads", tier: "A", equipment: ["bodyweight"] },

  { name: "Kickbacks", muscleGroup: "Triceps", subGroup: "Lateral Head", tier: "B", equipment: ["dumbbell"] },

  // ===== LEGS =====
  { name: "Leg Press", muscleGroup: "Legs", subGroup: "Quads", tier: "S", equipment: ["machine"] },
  { name: "Hack Squat", muscleGroup: "Legs", subGroup: "Quads", tier: "S", equipment: ["machine"] },
  { name: "Smith Machine Squat", muscleGroup: "Legs", subGroup: "Quads", tier: "S", equipment: ["machine"] },

  { name: "Barbell Back Squat", muscleGroup: "Legs", subGroup: "Quads", tier: "A", equipment: ["barbell"] },
  { name: "Front Squat", muscleGroup: "Legs", subGroup: "Quads", tier: "A", equipment: ["barbell"] },
  { name: "Bulgarian Split Squat", muscleGroup: "Legs", subGroup: "Quads", tier: "A", equipment: ["dumbbell"] },

  { name: "Lunges", muscleGroup: "Legs", subGroup: "Quads", tier: "B", equipment: ["dumbbell"] },

];

module.exports = exercises;