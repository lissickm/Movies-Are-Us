const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

function arrayConverter(movieGenreArray) {
    let movies = [];

    movieGenreArray.forEach(movieGenre =>{
        let movie = movies.find(movie => movieGenre.movie_id===movie.id )
        console.log(movie);
        if (movie === undefined) {
            // make a movie and assign it to "movie"
            movie = {
                id: movieGenre.movie_id,
                poster: movieGenre.poster,
                title: movieGenre.title,
                description: movieGenre.description,
                genres: []
            }
            movies.push(movie);
        }
        // make genre
        let genre = {
            id: movieGenre.genre_id,
            name: movieGenre.genre_name
        }
        // add it to the movie.genres array
        movie.genres.push(genre);
    })
    return movies;

}

// return all the movies from the database
router.get('/', (req, res) => {
    const queryText = `SELECT movie_id, title, genre_id, genres.name AS genre_name, description, poster
        FROM genres, junction_table, movies
        WHERE movies.id=junction_table.movie_id AND junction_table.genre_id=genres.id;;`;
    pool.query(queryText)
        .then((result) => {            
            res.send(arrayConverter(result.rows)); 
        })
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