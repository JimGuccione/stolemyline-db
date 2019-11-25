const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const db = require('./database');

const ENV = process.env.NODE_ENV;
const PORT =process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use (bodyParser.json());

// app.use('/quotes', require('./api/quotes'));
app.use('/games', require('./api/games'));

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}...`);
});

db.query('SELECT NOW()', (err, res) => {
    if (err.error)
        return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;
