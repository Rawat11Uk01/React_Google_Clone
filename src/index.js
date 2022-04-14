import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer from "./googlecontext/reducer";
import { StateProvider } from "./googlecontext/StateProvider";
import { initialState } from "./googlecontext/reducer";
import Reducer from "./googlecontext/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter initialState={initialState} reducer={Reducer}>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>

);
