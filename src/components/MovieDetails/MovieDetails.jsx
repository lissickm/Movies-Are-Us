import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieDetails extends Component {


   render() {
       
       let movieIdToRender = this.props.reduxStore.clickedMovieIdReducer
       console.log(this.props.reduxStore.clickedMovieIdReducer);

       const movieArrayToFilter = this.props.reduxStore.moviesReducer
       const clickedMovieArray = movieArrayToFilter.filter(movie => movie.id === movieIdToRender )
       console.log(clickedMovieArray);
       

        return(
            <div>
            <p>In Movie Details</p>
            <pre>{JSON.stringify(clickedMovieArray[0])}</pre>
            <pre>{movieIdToRender}</pre>

            <pre>
                {clickedMovieArray.map(movie => {
                   return(<div>
                       <h1>{movie.title}</h1>
                        <div>{movie.description}</div>
                        </div>)
                })}
            </pre>
            </div>

            
            

        )


   } 

}


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieDetails);