import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Empty Page</p>
          <pre>{JSON.stringify(this.props.reduxState)}</pre>
          <Route exact path="/" component={MovieList}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => ({
  store,
});

export default connect(mapStateToProps)(App);
