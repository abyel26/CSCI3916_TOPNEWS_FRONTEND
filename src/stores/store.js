import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import newsReducer from "../reducers/newsReducer";
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = createStore(
    combineReducers( {
        auth: authReducer,
        news: newsReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;