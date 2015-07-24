'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WordSchema = new Schema({
  type: String,
  value: String
});

module.exports = mongoose.model('Word', WordSchema);
