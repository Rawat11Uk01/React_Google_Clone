import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// import * as serviceWorker from './serviceWorker'
// import reducer, { initialState } from "./UseContext/Reducer";
// import { StateProvider } from "./UseContext/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
