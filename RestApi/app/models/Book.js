var mongoose = require('mongoose');

var details = {

    CreationDate:Date,
    Author:String,
    Publisher:String,
    PublishDate:Number,
    Series:String,
    Genre:String,
    Shelf:String,
    RackNumber:Number

};

var bookSchema = new mongoose.Schema({
    _id:String,
    CreationDate:Date,
    Name:String,
    Details:details
});

module.exports = mongoose.model('Book',bookSchema);