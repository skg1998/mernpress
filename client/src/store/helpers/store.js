import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Reducers from '../reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    Reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);