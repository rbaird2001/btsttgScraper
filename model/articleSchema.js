const mongoose = require("mongoose")
const Schema =  mongoose.Schema
const Note = require("./noteSchema")
const ArticleSchema = new Schema({
    href:{
        type: String,
        required: true,
        unique: true,
    },
    title:{
        type: String,
        required: true,
    },
    subTitle:{
        type: String,
    },
    date:{
        type: Date,
        required: true,
    },
    byline:{
        type: String,
        required: true
    },
})


module.exports = mongoose.model("Article",ArticleSchema);