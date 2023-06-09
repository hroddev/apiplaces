var express = require('express');
const axios = require("axios");
const router = express.Router();

const key = process.env.GOOGLE_API_KEY;

router.get("/", async (req, res, next) => {
  try {
    const neighborhood = "chelsea";
    const borough = "manhattan";
    const city = "new+york+city";
    const category = "burgers";
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
