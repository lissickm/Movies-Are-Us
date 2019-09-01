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
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })  
    }

    addNewMovieData = (event) => {
        console.log('in add new movie data');
        // this.props.history.push('/details');
        
    }

    render() {

        return(
            <div>
                <p>In Movie Edit</p>
                <button onClick={this.handleCancelButton}>Cancel</button>
                
                <p>Enter the movie you wish to edit here</p>
                <p>{JSON.stringify(this.state)}</p>
                <form onSubmit={this.addNewMovieData}>
                    
                    <input type='text' placeholder='title' onChange={(event) => { this.handleNewInputData('title', event) }} />
                    <input type='description' placeholder='description' onChange={(event) => { this.handleNewInputData('description', event) }} />
                    <input type='submit' value='Save Edits' />
                    
                </form>
                
            </div>
        )

    }

}



const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieEdit);