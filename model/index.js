
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@ds141178.mlab.com:41178/heroku_lgpmmndc`
const mongoose = require("mongoose")
mongoose.connect(MONGODB_URI)

class DB {
  constructor(){
    this.reasonMag = require("../services/scrapeReason");
    this.article = require("./Article");
    this.note =  require("./Note");
  }
  loadScraped(art){
    art.map(function(){
      //TODO check each article from scraper record for DB entry. If there, move to next
      //TODO if not there add record move to next.
    })
  }
  getScraped(){
    return mongoose.Collection(articles{});
  }
  
  saveArticle(id) {
    return this.article.create(reasonMag.filter(id))//TODO get syntax right to find correct object from array
    .then(function(){}) //TODO determin nature of promise to return, most likely save article
    .catch(function(err){}) 
  }

  addArtNote(id,txt){
  this.note.create(id,txt) //TODO get syntax for adding note for an article.
  }

//closing class
}


