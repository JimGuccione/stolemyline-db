const db = require('../database');

class Quotes {
    static retrieveAll(callback) {
        db.query('SELECT movies.movie_title, quotes.body_text,quotes.level_id FROM quotes,movies WHERE quotes.movie_id = movies.movie_id ORDER BY RANDOM() LIMIT 20', (err, res) => {
            if (err.error) {
                return callback(err);
            }
            callback(null, res);
        });
    };
}

   // static insert (body_text, callback) {
     //   db.query('INSERT INTO quotes (quotes) VALUES ($1)', [quotes], (err, res) => {
       //     if (err.error)
         //       return callback(err);
           // callback(res);
        //});
 //   };
//}

module.exports = Quotes;