const mongoose = require("mongoose")
const Schema =  mongoose.Schema
const Note = require("./noteSchema")
const SavedSchema = new Schema({
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
    artId:{
        type: String,
        required: true,
    },
    notes: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Note"
        }
      ]
})

module.exports = mongoose.model("SavedArticle",SavedSchema);