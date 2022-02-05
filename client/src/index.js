import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";  

import { createStore , applyMiddleware , compose } from "redux";
import rootReducer from './reducers/rootReducer.js'
import thunk from 'redux-thunk'
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render( 
  <Provider store = {store}>
    <App /> </Provider>,
  document.getElementById("root")
);
