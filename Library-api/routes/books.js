var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Books = require('../models/Book.js');

/* GET users listing. */
router.get('/api/books', function (req, res, next) {

  Books.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

router.get('/api/books/:id', function (req, res, next) {
  Books.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/api/books/', function (req, res,next) {

  Books.create({

    _id:mongoose.Types.ObjectId().toString(),
    Name: req.body.Name,
    CreationDate: new Date().toISOString(),
    Details: {
      _id:null,
      CreationDate: new Date().toISOString(),
      Author: req.body.Details.Author,
      Publisher: req.body.Details.Publisher,
      PublishDate: req.body.Details.PublishDate,
      Series: req.body.Details.Series,
      Genre: req.body.Details.Genre,
      Shelf: req.body.Details.Shelf,
      RackNumber: req.body.Details.RackNumber
    }, function(err, book) {
      if (err) res.send(err);

      Books.find(function (err, books) {
        if (err) return next(err);
        res.json(books);
      });
    }

  });

});

module.exports = router;
