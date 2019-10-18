const db = require('../database');

class Quotes {
    static retrieveAll(callback) {
        db.query('SELECT * from Quotes', (err, res) => {
            if (err.error)
                return callback(err);
            callback(res);
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