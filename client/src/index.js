import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers/rootReducer";
// import { createStore, applyMiddleware, compose } from "redux"; 
// const store = createStore(reducers, compose(applyMiddleware(thunk))); 

ReactDOM.render(
  // <Provider store={store}  >
    <App />
  //  </Provider>
  ,
  document.getElementById("root")
);
