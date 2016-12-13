var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Books = require('../models/Book.js');

/* GET users listing. */
router.get('/', function (req, res, next) {

  Books.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

router.get('/:id', function (req, res, next) {
  Books.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
