import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
//import {withRouter} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';
import './bootstrap copy.css';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
      <Router>
        <div className="App">
          <div className="jumbotron" id="mainjumbo">
            <h1>Movies Are Us!</h1>
          </div>
          
          <pre>{JSON.stringify(this.props.reduxState)}</pre>
          <Route exact path="/" component={MovieList}/>
          <Route path="/details" component={MovieDetails}/>
          <Route path="/edit" component={MovieEdit}/>
        </div>
      </Router>
      </div >
    );
  }
}

const mapStateToProps = store => ({
  store,
});

export default connect(mapStateToProps)(App);
