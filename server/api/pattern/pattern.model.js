'use strict';

var mongoose = require('mongoose'),
    random = require('mongoose-simple-random'),
    Schema = mongoose.Schema;

var PatternSchema = new Schema({
  value: String
});

PatternSchema.plugin(random);

module.exports = mongoose.model('Pattern', PatternSchema);
