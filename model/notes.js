const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const NoteSchema = new Schema({
  title: String,
  body: String
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;