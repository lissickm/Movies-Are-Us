const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTE INCLUDES ---------- **/
const movieRouter = require('./routes/movie.router');

/** ---------- ROUTES ---------- **/
app.use('/api/movie', movieRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});