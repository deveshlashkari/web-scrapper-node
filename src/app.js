const express = require("express");
const scrapeRouter = require("./routes/scrape");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", scrapeRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
