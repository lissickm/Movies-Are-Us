import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieDetails extends Component {


   render() {
       console.log('here is the history: ', this.props.history);
       

        return(
            <p>In Movie Details</p>
            
            

        )


   } 

}


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(MovieDetails);