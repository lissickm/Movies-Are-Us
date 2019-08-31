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
            <p>In Movie List Component</p>
        )


    }


}


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieList);