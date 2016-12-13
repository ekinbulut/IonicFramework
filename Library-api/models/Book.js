var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    _id:String,
    name:String
});

module.exports = mongoose.model('Book',bookSchema);