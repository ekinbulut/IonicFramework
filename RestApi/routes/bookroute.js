var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var book = require('../app/models/Book');



router.route('/books')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {

        var bookModel = new book();


        //bookModel.Name = req.body.Name;

        bookModel._id = mongoose.Types.ObjectId().toString();
        bookModel.Name = req.body.Name;
        bookModel.CreationDate = new Date().toISOString();
        bookModel.Details = {
            _id: null,
            CreationDate: new Date().toISOString(),
            Author: req.body.Details.Author,
            Publisher: req.body.Details.Publisher,
            PublishDate: req.body.Details.PublishDate,
            Series: req.body.Details.Series,
            Genre: req.body.Details.Genre,
            Shelf: req.body.Details.Shelf,
            RackNumber: req.body.Details.RackNumber
        };


        bookModel.save(function (err) {
            if (err) {
                console.log(err);
                res.send(err);
            }

            res.json({ message: 'Book Created !' });
        });



    })

    // get all the bears (accessed at GET http://localhost:3000/api/books)
    .get(function (req, res) {
        book.find(function (err, books) {
            if (err)
                res.send(err);

            res.json(books);
        });
    });

// more routes for our API will happen here

router.route('/books/:id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/books/:_id)
    .get(function (req, res) {
        book.findById(req.params.id, function (err, _book) {
            if (err)
                res.send(err);
            res.json(_book);
        });
    });



router.get('/categories', function (req, res, next) {

    book.find().distinct('Details.Publisher', function (err, categories) {
        if (err) return next(err);
        res.json(categories);

    });
});

router.route('/series')
    .get(function (req, res, next) {
        book.find().distinct('Details.Series', function (err, series) {
            if (err) return next(err);
            res.json(series);

        });
    });


router.get('/author', function (req, res, next) {

    book.find().distinct('Details.Author', function (err, author) {
        if (err) return next(err);
        res.json(author);

    });
});

router.get('/genre', function (req, res, next) {

    book.find().distinct('Details.Genre', function (err, genre) {
        if (err) return next(err);
        res.json(genre);

    });
});

router.get('/shelf', function (req, res, next) {

    book.find().distinct('Details.Shelf', function (err, shelf) {
        if (err) return next(err);
        res.json(shelf);

    });
});


router.get('/rack', function (req, res, next) {

    book.find().distinct('Details.RackNumber', function (err, rack) {
        if (err) return next(err);
        res.json(rack);

    });
});

module.exports = router;