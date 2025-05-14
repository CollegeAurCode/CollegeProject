import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

import "./index.css";

import AppContextProvider from "./Context/AppContext";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <AppContextProvider>  
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </Provider>
</React.StrictMode>
);



