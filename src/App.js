import React from 'react'
import { compose } from 'redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import reducers from './reducers' // Or wherever you keep your reducers
import CoreLayout from './layouts/CoreLayout';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  composeEnhancers(applyMiddleware(middleware, thunk))
)

// Now you can dispatch navigation actions from anywhere!
//store.dispatch(push('/Fixtures'))

export default () => (
  <div className="App">
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <CoreLayout/>
      </ConnectedRouter>
    </Provider>
  </div>
)