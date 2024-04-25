const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;