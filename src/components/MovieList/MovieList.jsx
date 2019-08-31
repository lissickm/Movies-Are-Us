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

    render() {



        return(
            <div>
                <p>In Movie List Component</p>
                <pre>{JSON.stringify(this.props.reduxStore.moviesReducer)}</pre>
                <ul>
                    {this.props.reduxStore.moviesReducer.map(movie => {
                        // return <li>{movie.title}</li> 
                            return (   
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img alt={movie.id} src={movie.poster} /></td>
                                            <td>{movie.title}</td>
                                            <td>{movie.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
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