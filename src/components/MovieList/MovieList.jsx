import React, { Component } from "react";
import {connect} from 'react-redux'; 




class MovieList extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        console.log('in get movies');
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })   
    }

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
                <p>In Movie List Component</p>
                <pre>{JSON.stringify(this.props.reduxStore.moviesReducer)}</pre>
                <ul>
                    {this.props.reduxStore.moviesReducer.map(movie => {
                        // return <li>{movie.title}</li> 
                            return (  
                                <div className="table-responsive">
                                <table className="table">
                                    {/* <thead>
                                        <tr>
                                                <th class="col-ms-4">Poster</th>
                                                <th class="col-ms-4">Title</th>
                                                <th class="col-ms-4">Description</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                            <td><img src={movie.poster} alt='' onClick={() => this.handleMovieClick(movie.id)} /></td>
                                            <td className="movieTitle">{movie.title}</td>
                                            <td>{movie.description}</td>
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


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieList);