import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieDetails extends Component {

    // function to route back to movie list
    handleBackButton = (id) => {
        console.log('in handle back button');
        this.props.history.push('/');
    }

    // function to route to the edit page
    handleEditButton = (id) => {
        console.log('in handle edit button');
        this.props.history.push('/edit');
    }


    render() {

        // get the id of the movie clicked from the reducer
        let movieIdToRender = this.props.reduxStore.clickedMovieIdReducer;
        console.log(this.props.reduxStore.clickedMovieIdReducer);
        // get the array of movies from the movies reducer
        const movieArrayToFilter = this.props.reduxStore.moviesReducer;

        // find where the movie clicked matches the movie in the reducer
        const clickedMovieArray = movieArrayToFilter.filter(movie => movie.id === movieIdToRender)
        console.log(clickedMovieArray);

        // tried to avoid having to map over an array of 1 object
        // i tried to map twice and that didn't go down well
        if (clickedMovieArray !== undefined && clickedMovieArray.length > 0) {
            const movie = clickedMovieArray[0];
            return (
                <div>
                    <div>
                        <button id="detailButton" className="button btn btn-secondary" onClick={() => this.handleBackButton(movie.id)}>Back To List</button>
                        <br />
                        <br />
                        <button className="button btn btn-secondary" onClick={() => this.handleEditButton(movie.id)}>Edit</button>
                        <div className="detailsBody">
                            <h1>{movie.title}</h1>
                            <div className="description">{movie.description}</div>
                            <br />

                            {/* since there are multiple genres, map over the genre array from the movie object */}
                            <ul>
                                {movie.genres.map(genre => {
                                    return (
                                        <li>
                                            {genre.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>)
        } else {
            return (<h1>Error: Please hit the back arrow to return to the previous screen</h1>)
        }

    }

}


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieDetails);