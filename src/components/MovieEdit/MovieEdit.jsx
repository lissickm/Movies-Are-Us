import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieEdit extends Component {

    state = {
        id: 0,
        title: '',
        description: ''
    }

    handleCancelButton = (id) => {
        console.log('in handle cancel button');
        this.props.history.push('/details');
    }

    handleNewInputData = (propertyName, event) => {
        console.log('in handle new input data');
        let movieIdToEdit = this.props.reduxStore.clickedMovieIdReducer;
        this.setState({
            ...this.state, 
            id: movieIdToEdit,
            [propertyName]: event.target.value
        })
        
    }

    addNewMovieData = (event) => {
        console.log('in add new movie data');
        this.props.dispatch({
            type: 'UPDATE_MOVIE_DATA',
            payload: this.state
        })
        this.props.history.push('/details');
        
    }

    render() {

        return(
            <div>
                
                {/* <pre>{JSON.stringify(this.props.reduxStore.clickedMovieIdReducer)}</pre> */}
                <button className="button btn btn-secondary" onClick={this.handleCancelButton}>Cancel</button>
                {/* <p>{JSON.stringify(this.state)}</p> */}
                <h3>Enter the movie information you wish to edit here.</h3>
                
                <form onSubmit={this.addNewMovieData}>
                    
                    <input type='text' placeholder='title' onChange={(event) => { this.handleNewInputData('title', event) }} />
                    <br/>
                    <br/>
                    <input type='description' placeholder='description' onChange={(event) => { this.handleNewInputData('description', event) }} />
                    <br/>
                    <br/>
                    <button id="saveEditButton" className="button btn btn-secondary" type='submit'>Save Edits</button>
                    
                </form>
                
            </div>
        )

    }

}



const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieEdit);