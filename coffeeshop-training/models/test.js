var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestSchema = new Schema(
    {
    title: {type: String, required: true},
    q1: {type: String, required: true},
    q2: {type: String, required: true},
    q3: {type: String, required: true},
    q4: {type: String, required: true},
    q5: {type: String, required: true},
    a1: {type: Integer, required: true},
    a2: {type: Integer, required: true},
    a3: {type: Integer, required: true},
    a4: {type: Integer, required: true},
    a5: {type: Integer, required: true},
    score: {type: String, required: true},
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