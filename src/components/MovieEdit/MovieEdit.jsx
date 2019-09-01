import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieEdit extends Component {

    handleCancelButton = (id) => {
        console.log('in handle cancel button');
        // this.props.history.push('/');
    }

    handleSaveButton = (id) => {
        console.log('in handle back button');
        // this.props.history.push('/');
    }

    render() {

        return(
            <div>
                <p>In Movie Edit</p>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        )

    }

}



const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieEdit);