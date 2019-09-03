import React, { Component } from "react";
import {connect} from 'react-redux'; 




class MovieList extends Component {

    // render the movies right away
    componentDidMount() {
        this.getMovies();
    }

    // function to dispatch an action to fetch movies
    getMovies() {
        console.log('in get movies');
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })   
    }

    // function to dispatch an action to get details and route to details page
    handleMovieClick = (id) => {
        console.log('in handle movie click');
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
      
        this.props.history.push('/details');

    }

    render() {

        return(
            <div>
                {/* <pre>{JSON.stringify(this.props.reduxStore.moviesReducer)}</pre> */}
                <h3>*Please click on a movie poster below to view or edit additional information.</h3>
                <ul>
                    {this.props.reduxStore.moviesReducer.map(movie => {
                        // return <li>{movie.title}</li> 
                            return (  
                                <div className="table-responsive">
                                <table className="table">
                                    {/* <thead>
                                        <tr>
                                                <th class="col-md-6">Poster</th>
                                                <th class="col-md-4">Title</th>
                                                <th class="col-md-2">Description</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                            <td className="image"><img src={movie.poster} alt='' onClick={() => this.handleMovieClick(movie.id)} /></td>
                                            <td className="movieTitle">{movie.title}</td>
                                            <td className="description">{movie.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div> 
                            )       
                    })}
                </ul>
            </div >
        )
    }
}

// make redux store available
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieList);