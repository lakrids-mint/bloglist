import store from "./store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
renderApp();
store.subscribe(() => {
  const storeNow = store.getState();
  console.log("this is index.js, current status of store: ", storeNow);
});
