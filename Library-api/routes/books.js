var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Books = require('../models/Book.js');


/* GET book records. */
router.get('/api/books', function (req, res, next) {

  Books.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

/* GET book by id */
router.get('/api/books/:id', function (req, res, next) {
  Books.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST request to insert a book */
router.post('/api/books/', function (req, res, next) {

  Books.create({

    _id: mongoose.Types.ObjectId().toString(),
    Name: req.body.Name,
    CreationDate: new Date().toISOString(),
    Details: {
      _id: null,
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

/* GET categories  */
router.get('/api/categories', function (req, res, next) {

  Books.find().distinct('Details.Publisher', function (err, categories) {
    if (err) return next(err);
    res.json(categories);

  });
});

router.get('/api/series', function (req, res, next) {

  Books.find().distinct('Details.Series', function (err, series) {
    if (err) return next(err);
    res.json(series);

  });
});

router.get('/api/author', function (req, res, next) {

  Books.find().distinct('Details.Author', function (err, author) {
    if (err) return next(err);
    res.json(author);

  });
});

router.get('/api/genre', function (req, res, next) {

  Books.find().distinct('Details.Genre', function (err, genre) {
    if (err) return next(err);
    res.json(genre);

  });
});

router.get('/api/shelf', function (req, res, next) {

  Books.find().distinct('Details.Shelf', function (err, shelf) {
    if (err) return next(err);
    res.json(shelf);

  });
});


router.get('/api/rack', function (req, res, next) {

  Books.find().distinct('Details.RackNumber', function (err, rack) {
    if (err) return next(err);
    res.json(rack);

  });
});


module.exports = router;


