const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const gamesRoutes = require("./routes/game");


app.use("/api/games", gamesRoutes);

app.get("/", (req, res) => {
  res.send("🎮 Game Tracker API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
