//var MONGODB_URI = process.env.MONGODB_URI || `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@ds141178.mlab.com:41178/heroku_lgpmmndc`
const mongoose = require("mongoose")
//const connect = mongoose.connect(MONGODB_URI)

const Schema = new mongoose.Schema
const ArticleSchema = new Schema({
    href:{
        type: String,
        require: true,
    },
    title:{
        type: String,
        require: true,
    },
    subTitle:{
        type: String,
    },
    date:{
        type: Date,
        require: true,
    },
    byline:{
        type: String,
        require: true
    },
    note:{
        type: Object.Types.ObjectId,
        ref: "Note"
    }
})

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;