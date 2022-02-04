import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"; 
import {createStore ,applyMiddleware ,compose} from 'redux'
import rootReducer from "./reducers/rootReducer.js";
import Provider from "react-redux";
import thunk from 'redux-thunk'
const store = createStore(rootReducer,compose(applyMiddleware(thunk)))


ReactDOM.render( 
  <Provider store = {store}>
    <App />
     </Provider>
  ,
  document.getElementById("root")
);
