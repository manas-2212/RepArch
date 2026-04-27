const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const exerciseRoutes = require("./routes/exercise.routes");
const workoutRoutes = require("./routes/workout.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/exercises", exerciseRoutes);
// app.use("/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});