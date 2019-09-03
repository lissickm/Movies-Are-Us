const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

function arrayConverter(movieGenreArray) {
    
    let movies = [];

    // make an array of objects with all 14 movies and their information
    // since the data coming back had about 30 rows, sift out the unique movies
    // push the unique movie objects into an empty array
    // push the matching genre array to the respective movie object
    movieGenreArray.forEach(movieGenre => {
        let movie = movies.find(movie => movieGenre.movie_id===movie.id )
        console.log(movie);
        if (movie === undefined) {
            // make a movie and assign it to "movie"
            // fill out the genres later
            movie = {
                id: movieGenre.movie_id,
                poster: movieGenre.poster,
                title: movieGenre.title,
                description: movieGenre.description,
                genres: []
            }
            movies.push(movie);
        }
        // make genre object
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
            // take the query result and convert the array           
            res.send(arrayConverter(result.rows)); 
        })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        })
});

// send put request to change movie information
// no need to send data back, other than a status code
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