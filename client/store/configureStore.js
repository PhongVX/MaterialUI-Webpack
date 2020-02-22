import {createStore, compose, applyMiddleware} from 'redux'
import createReducer from '../reducers'
import thunk from 'redux-thunk'
import employeeReducer from '../reducers/employeeReducer.js'

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHostReload:false
  }):compose

const configureStore = () =>{
    const middlewares = [
        thunk
    ]
    const enhencers = [
        applyMiddleware(...middlewares)
    ]

    const store = createStore(createReducer(),composeEnhancers(...enhencers))
    store.asyncReducers = {employee_2:employeeReducer}
    
    store.replaceReducer(createReducer(store.asyncReducers));
    // Create an object for any later reducers
    // store.asyncReducers = {}
    
    // store.injectReducer = (key, reducer) => {
    //     // Updates the aysncReducers object. This ensures we don't remove any old
    //     // reducers when adding new ones.
    //     store.asyncReducers[key] = reducer;
    //     // This is the key part: replaceReducer updates the reducer
    //     // See rootReducer.createReducer for more details, but it returns a function.
    //     store.replaceReducer(createReducer(store.asyncReducers));
    //     return store;
    // };



    return store
}

export default configureStore