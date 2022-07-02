var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestSchema = new Schema(
    {
    title: {type: String, required: true},
    q1: {type: String, required: true},
    q2: {type: String, required: true},
    q3: {type: String, required: true},
    a1: {type: Integer, required: true},
    a2: {type: Integer, required: true},
    a3: {type: Integer, required: true},
    maxscore: {type: Integer, required: true},
    }
);

// Virtual for test's URL
TestSchema
.virtual('url')
.get(function () {
  return '/catalog/test/' + this._id;
});

//Export model
module.exports = mongoose.model('Test', TestSchema);