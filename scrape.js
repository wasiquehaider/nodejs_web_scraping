const request = require("request");
const cheerio = require("cheerio");

request(
  "https://modus.medium.com/augmented-reality-greater-power-greater-responsibility-ad0b8b95f75b",
  (error, res, html) => {
    if (!error && res.statusCode == 200) {
      const $ = cheerio.load(html);

      const siteHeading = $(".section-inner");

      //   console.log(siteHeading.html());
      //   console.log(siteHeading.text());
      //   const output = siteHeading.find("h1").text();
      //   const output = siteHeading.children("h1").text();
      //   const output = siteHeading.children("h1").next().text();
      //   const output = siteHeading
      //     .children("h1")
      //     .parent()
      //     .text();

      //   console.log(output);

      $(".metabar-navItem a").each((index, element) => {
        const item = $(element).text();
        const link = $(element).attr("href");

        console.log(link);
      });
    }
  }
);
