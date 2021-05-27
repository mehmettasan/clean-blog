const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postShcema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postShcema);
