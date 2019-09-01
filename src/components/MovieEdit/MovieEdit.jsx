import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieEdit extends Component {

    handleCancelButton = (id) => {
        console.log('in handle cancel button');
        this.props.history.push('/details');
    }

    handleSaveButton = (id) => {
        console.log('in handle back button');
        this.props.history.push('/details');
    }

    render() {

        return(
            <div>
                <p>In Movie Edit</p>
                <button onClick={this.handleCancelButton}>Cancel</button>
                <button onClick={this.handleSaveButton}>Save</button>
            </div>
        )

    }

}



const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieEdit);