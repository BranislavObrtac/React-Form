import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

// styles
import "./app/App.scss";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
