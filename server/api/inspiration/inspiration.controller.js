'use strict';

var Pattern = require('../pattern/pattern.model');
var Word = require('../word/word.model');

// Get a single inspiration
exports.show = function(req, res) {
  Pattern.findOneRandom(function (err, pattern) {
    if(err) { return handleError(res, err); }
    return Word.find({}, function(err, words) {
      if(err) { return handleError(res, err); }

      var wordsObj = {};
      for(var x in words) {
        var current = words[x];
        if(!wordsObj[current.type]) {
          wordsObj[current.type] = [];
        }
        wordsObj[current.type].push(current.value);
      }
      console.log('words', wordsObj);

      pattern = pattern.value.split(' ');
      var result = "";

      for (var y in pattern) {
        var currentPattern = pattern[y];
        if(wordsObj[currentPattern]) {
          var random = Math.floor(Math.random()*wordsObj[currentPattern].length);
          result += wordsObj[currentPattern][random];
        } else {
          result += currentPattern;
        }
        result += ' ';
      }
      result = result.trim();
      result = capitalizeFirstLetter(result);
      result += '.';

      return res.json(result);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
