const express = require('express');
const Quotes = require('../models/quotes');

var router = express.Router();

router.get('/', (req, res) => {
    console.log('id',req.params.id);
    Quotes.retrieveAll((err, quotes) => {
        if (err){
            return res.json(err);
        }
        return res.json(quotes);
    });
});

router.post('/', (req, res) => {
    const quotes = req.body.quotes;

    Quotes.insert(quotes, (err, result) => {
        if (err){
            return res.json(err);
        }
        return res.json(result);
    });
});

module.exports = router;