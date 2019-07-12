const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("items.csv");

// write Headers
// writeStream.write(`TITLE, PRICE, DESCRIPTION \n`)

request(
  "https://www.webscraper.io/test-sites/e-commerce/allinone",
  (error, res, html) => {
    if (!error && res.statusCode == 200) {
      const $ = cheerio.load(html);

      $(".thumbnail").each((index, element) => {
        const title = $(element)
          .find(".title")
          .text();
        const price = $(element)
          .find(".price")
          .text();
        const description = $(element)
          .find(".description")
          .text();

        //   Write Row to CSV
        writeStream.write(`${title}, ${price}, ${description} \n`);
      });
      console.log("Scraping Done");
    }
  }
);
