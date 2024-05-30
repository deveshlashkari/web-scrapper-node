const express = require("express");
const scrapeRouter = require("./routes/scrape");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/", (req, res) => {
  res.send(
    "Web Scrapper is for bots. To use from scripts and apps, please check github. Thank you!"
  );
});
app.use("/api", scrapeRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
