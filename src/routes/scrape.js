const express = require("express");
const { scrapeWebsite } = require("../services/scraper");

const router = express.Router();

router.post("/scrape", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required." });
  }

  try {
    const scrapedData = await scrapeWebsite(url);
    res.json({ data: scrapedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
