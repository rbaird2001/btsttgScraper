const reasonMag = require("../services/scrapeReason");
db = require("../model/dbConfig");
const Article = require("../model/articleSchema");
const Note = require("../model/noteSchema");

module.exports = function(app) {
  app.get("/", async (req, res) => {
    const reasonScrape = await reasonMag();
    Article.create(reasonScrape)
    .then((resp)=>{console.log(resp)})
    .catch((err)=>{console.log(err)});
    res.render("index", { articles: reasonScrape });
  });

  app.get("/api/allscraped", (req, res) => {
    Article.find()
    .then((dataset)=>{
      //console.log(dataset)
      res.render("index",{articles: dataset});
    })
    .catch((err)=>{res.sendStatus(500)});
  });
    app.put("/api/save/:id",async (req,res) => {
        await db.markSaved(req.params.id);
    })
    app.post("/api/note/:id",async(req,res) => {
        await db.addNote(req.params.id)
    })
  };
