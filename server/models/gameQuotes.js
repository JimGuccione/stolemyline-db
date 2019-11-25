const db = require('../database');

const createGame = ({});

class GameQuotes {
    static retrieveAll(callback){
        db.query('SELECT game.id, game.curr_quote_index_pos, game_quotes.id, game_quotes.game_id, game_quotes.quote_id FROM game JOIN game_quotes ON game.id = game_quotes.game_id ORDER BY game.id LIMIT 20', (err, res) => {
            if (err.error)
                return callback(err);
            callback(res);
        });
    };


    async function insertQuotes(game_id, quote_ids) {
        db.query('INSERT into game_quotes(id,game_id,quote_id,home_team_correct,away_team_correct) VALUES (1,1,16,false,false', (err, res) => {

    };
}





module.exports = GameQuotes;