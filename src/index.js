import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('UPDATE_MOVIE_DATA', fetchMovieEdits);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store the id of the movie clicked on the MovieList component
const clickedMovieIdReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// generator function to receive FETCHMOVIES action
function* fetchMovies(action) {
    console.log('the action in fetchMovies: ', action);
    try {
        let response = yield axios.get('/api/movie');
        console.log('saga response: ', response.data);
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })   
    } catch (error) {
        console.log('error in fetch: ', error);    
    } 
}

// generator function to receive UPDATE MOVIE DATA action
function* fetchMovieEdits(action) {
    console.log('the action in fetchMovieEdits: ', action);
    try {
        let response = yield axios.put('/api/movie', action.payload);
        console.log('saga response: ', response);
        yield put({
            type: 'FETCH_MOVIES'
        })
    } catch (error) {
        console.log('error in fetch: ', error);
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        clickedMovieIdReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
