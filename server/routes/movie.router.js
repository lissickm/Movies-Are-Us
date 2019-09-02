const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all the movies from the database
router.get('/', (req, res) => {
    const queryText = `SELECT id, title, poster, description FROM movies ORDER BY id DESC;`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        })
});

router.put('/', (req, res) => {
    const updatedMovie = req.body;

    const queryText =   `UPDATE "movies"
                        SET "title" = $1,
	                    "description" = $2
                        WHERE "id" = $3;`;

    const queryValues = [
        updatedMovie.title,
        updatedMovie.description,
        updatedMovie.id,  
    ];                    

    pool.query(queryText, queryValues)
        .then((result) => {
            res.sendStatus(200);
         })
        .catch((err) => {
            console.log('Error completing UPDATE movies query', err);
            res.sendStatus(500);
        })
});


module.exports = router;