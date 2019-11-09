const axios = require("axios");
const cheerio = require("cheerio");
const reason = axios.create({
  baseURL: "https://www.reason.com"
});

module.exports = function() {
  return reason
    .get("/latest")
    .then(response => {
      //console.log(data)
      const $ = cheerio.load(response.data);
      const hrefs = $("article.published h4 a")
        .map(function() {
          return $(this).attr("href");
        })
        .get();
      const titles = $("article.published h4 a")
        .map(function() {
          return $(this).text();
        })
        .get();
      const time = $("article.published time")
        .map(function() {
          return $(this).attr("datetime");
        })
        .get();
      const byline = $("article.published span.byline")
        .map(function() {
          return $(this).text();
        })
        .get();
      const sub = $("article.published p.entry-subtitle")
        .map(function() {
          return $(this).text();
        })
        .get();

      const articles = hrefs.reduce((fVal, cVal, idx) => {
        fVal.push({
          href: cVal,
          title: titles[idx],
          sub: sub[idx],
          date: time[idx],
          byline: byline[idx].trim(),
          stored: 0
        });
        return fVal;
      }, []);

      console.log(articles);
      return articles;
    })
    .catch(err => console.log(err));
};
