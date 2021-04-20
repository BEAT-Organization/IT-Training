const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalScehma = new Schema({
  date:  String, // String is shorthand for {type: String}
  zip: String,
  feeling: String,
  temperature: String,
  lat: String,
  lon: String
});

const Journal = new mongoose.model('Journal',journalScehma);
module.exports = Journal;