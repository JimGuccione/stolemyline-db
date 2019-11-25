const express = require('express');
const Games = require('../models/games');
const Quotes = require('../models/quotes');


var router = express.Router();

router.get('/', (req, res) => {
    console.log('id', req.params.id);

    let randomQuotes;
    Quotes.retrieveAll((err, quotes) => {
        if (err) {
            return res.json(err);
        }
        console.log(quotes);

        let quoteIds = [];
        quotes.map(quote => {
            quoteIds.push(quote.body_text);
            quoteIds.push(quote.movie_title);
        });
        quoteIds.map(quote =>
            console.log("Quote text = " + quote)
        );

        return res.json(quotes);
    });
});


// router.get('/game', (req, res) => {
//     console.log('id',req.params.id);
//     Games.retrieveAll((err, games) => {
//         if (err){
//             return res.json(err);
//         }
//         return res.json(games);
//     });
// });

// router.post('/', (req, res) => {
//     const quotes = req.body.quotes;
//
//     Quotes.insert(quotes, (err, result) => {
//         if (err){
//             return res.json(err);
//         }
//         return res.json(result);
//     });
// });

// router.post('../games', (req, res) => {
//     const game = req.game.id;
//
//     Games.insert(game, (err, result) => {
//         if (err){
//             return res.json(err);
//         }
//         return res.json(result);
//     });
// });

module.exports = router;