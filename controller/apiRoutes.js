const reasonMag = require("../services/scrapeReason");
db = require("../model/dbConfig");
//const Article = require("../model/articleSchema");
const Note = require("../model/noteSchema");
const SavedArticle = require("../model/savedArtSchema");

module.exports = function(app) {
  app.post("/api/saveArticle/:id", async (req, res) => {
    try {
      //console.log("artId", req.params.id);
      let selectArticle = req.params.id;
      let reasonScrape = await reasonMag();
      let foundArticle = reasonScrape.filter(x => x.artId === selectArticle);
      if (foundArticle.length) {
        //console.log("foundArticle");
        //console.log(foundArticle);
        const{href,title,date,byline,artId} = foundArticle[0]
        const savedArt = await SavedArticle.create({ href, title, date, byline, artId });
        res.sendStatus(200);
      
      }
    } catch(err) {
      console.log(err);
      res.sendStatus(500);
    }
    // const dataset = await Article.findById(req.params.id);
    // const { href, title, date, byline } = dataset;
    // console.log(savedArt);
  });

  app.post("/api/saveNote/:id", async (req, res) => {
    try {
      const note = await Note.create({ body: req.body.note });
      let { _id } = note;
      //console.log(_id);
      await SavedArticle.findOneAndUpdate(
        { _id: req.params.id },
        { notes: _id },
        { new: true }
      );
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/articles/saved", async (req, res) => {
    const dataset = await SavedArticle.find().populate("notes");
    console.log(dataset);
    res.render("savedArticles", { articles: dataset });
  });

  app.get("/", async (req, res) => {
    try {
      const reasonScrape = await reasonMag();
      reasonTemp = [];
      reasonTemp = reasonScrape;
      //console.log(reasonTemp);
      //await Article.create(reasonScrape);
      res.render("index", { articles: reasonTemp });
    } catch (err) {
      //duplicate error due to unique schema settings in mongo.
      //This is expected as we may scrape same article multiple times but don't want
      //repeated inserts.
      //Error will not appear in console log.
    }
    // finally {
    //     const dataset = await Article.find();
    //     res.render("index", { articles: dataset });
    //   }
  });
};
