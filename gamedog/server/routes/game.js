const express = require("express");
const axios = require("axios");
const router = express.Router();



const RAWG_BASE_URL = "https://api.rawg.io/api";
const API_KEY = process.env.RAWG_API_KEY;

router.get("/search", async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get(`${RAWG_BASE_URL}/games`, {
      params: {
        key: API_KEY,
        search: query,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("Error searching games:", err.message);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${RAWG_BASE_URL}/games/${id}?key=${API_KEY}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching game details:", err.message);
    res.status(500).json({ error: "Failed to fetch game details" });
  }
});

module.exports = router;
