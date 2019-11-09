const reasonMag = require("../services/scrapeReason");

module.exports = function(app) {
  app.get("/", async (req, res) => {
      //res.json(await reasonMag());
      res.render("index", {articles: await db.getScraped()});
     
  });
  app.get("/api/scraper",async(req,res) => {
      articles = await reasonMag();
      await db.loadScrape(articles)
      await db.getScraped();
  })
  app.put("/api/save/:id",async (req,res) => {
      await db.markSaved(req.params.id);
  })
  app.post("/api/note/:id",async(req,res) => {
      await db.addNote(req.params.id)
  })
};
