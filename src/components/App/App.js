import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
//import {withRouter} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
      <Router>
        <div className="App">
          <p>Empty Page</p>
          <pre>{JSON.stringify(this.props.reduxState)}</pre>
          <Route exact path="/" component={MovieList}/>
          <Route path="/details" component={MovieDetails}/>
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
