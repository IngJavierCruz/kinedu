import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { indicatorReducer } from '../reducers/indicatorReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    indicator: indicatorReducer
});

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )
);