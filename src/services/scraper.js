const axios = require("axios");
const cheerio = require("cheerio");

const scrapeWebsite = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    let scrappedData = [];

    $(`h1, h2, h3, h4, h5, h6, p`).each((index, element) => {
      scrappedData.push({
        tag: $(element).prop("tagName"),
        text: $(element).text(),
      });
    });
    return scrappedData;
  } catch (error) {
    throw new Error("Failed to scrape the URL.");
  }
};

module.exports = { scrapeWebsite };
