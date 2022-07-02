var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestInstanceSchema = new Schema(
    {
    test: { type: Schema.Types.ObjectId, ref: 'Test', required: true }, //reference to the associated test
    status: {type: String, required: true, enum: ['Not Taken', 'Taken','In Progress'},
    result1: {type: Integer, required: true, enum: ['0', '1', '2', '3'], default: '0'},
    result2: {type: Integer, required: true, enum: ['0', '1', '2', '3'], default: '0'},
    result3: {type: Integer, required: true, enum: ['0', '1', '2', '3'], default: '0'},
    date: {type: Date, default: Date.now}
    }
);

// Virtual for bookinstance's URL
TestInstanceSchema
.virtual('url')
.get(function () {
    return '/catalog/testinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('TestInstance', TestInstanceSchema);