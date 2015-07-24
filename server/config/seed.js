/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Word = require('../api/word/word.model');
var Pattern = require('../api/pattern/pattern.model');
var User = require('../api/user/user.model');

Word.find({}).remove(function() {
  Word.create(
  //Adjectives
  {
	   "type": "pAdj",
     "value": "enlightened"
  },
  {
  	"type": "pAdj",
  	"value": "zero-point"
  },
  {
  	"type": "pAdj",
  	"value": "quantum"
  },
  {
  	"type": "pAdj",
  	"value": "high-frequency"
  },
  {
  	"type": "pAdj",
  	"value": "primordial"
  },
  {
  	"type": "pAdj",
  	"value": "non-dual"
  },
  //Mass
  {
  	"type": "pMass",
  	"value": "consciousness"
  },
  {
  	"type": "pMass",
  	"value": "nature"
  },
  {
  	"type": "pMass",
  	"value": "beauty"
  },
  {
  	"type": "pMass",
  	"value": "fullfillment"
  },
  {
  	"type": "pMass",
  	"value": "intuition"
  },
  {
  	"type": "pMass",
  	"value": "wisdom"
  },
  // Subjective
  {
  	"type": "pSubjective",
  	"value": "feng shui"
  },
  {
  	"type": "pSubjective",
  	"value": "naturopathy"
  },
  {
  	"type": "pSubjective",
  	"value": "numerology"
  },
  {
  	"type": "pSubjective",
  	"value": "aromatherapy"
  },
  {
  	"type": "pSubjective",
  	"value": "affirmations"
  },
  {
  	"type": "pSubjective",
  	"value": "crystal healing"
  });
});

Pattern.find({}).remove(function() {
  Pattern.create(
    {
      "value": 'pSubjective is the pAdj key to pMass'
    },
    {
      "value": 'Although you may not realize it, you are pAdj'
    },
    {
      "value": 'It is time to take pMass to the next pAdj level'
    },
    {
      "value": 'pMass requires exploration'
    },
    {
      "value": 'Through pSubjective our pMass are pAdj'
    },
    {
      "value": 'pSubjective is pSubjective without pMass'
    },
    {
      "value": 'Understand the pMass of pAdj pSubjective'
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'administrator',
    email: 'sramirez10r@gmail.com',
    password: '123queso'
  }, function() {
      console.log('finished populating users');
    }
  );
});
