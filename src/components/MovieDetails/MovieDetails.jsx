import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieDetails extends Component {

    handleBackButton = (id) => {
        console.log('in handle back button');
        this.props.history.push('/');
    }

    handleEditButton = (id) => {
        console.log('in handle edit button');
        this.props.history.push('/edit');
    }


   render() {
       

       let movieIdToRender = this.props.reduxStore.clickedMovieIdReducer;
       console.log(this.props.reduxStore.clickedMovieIdReducer);

       const movieArrayToFilter = this.props.reduxStore.moviesReducer;
       const clickedMovieArray = movieArrayToFilter.filter(movie => movie.id === movieIdToRender )
       console.log(clickedMovieArray);

       
       
        if (clickedMovieArray !== undefined && clickedMovieArray.length > 0) {
            const movie = clickedMovieArray[0];
            return (
            <div>
              <p>In Movie Details</p>
               
            <div>
                       <button className= "button btn btn-secondary" onClick={() => this.handleBackButton(movie.id)}>Back To List</button>
                       <br/>
                       <button class="button btn btn-secondary" onClick={() => this.handleEditButton(movie.id)}>Edit</button>
                       <h1>{movie.title}</h1>
                        <div>{movie.description}</div>
                        <br/>
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
            
            </div>)
        } else {
            return (<p> your mama</p>)
        }
                
   } 

}


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieDetails);