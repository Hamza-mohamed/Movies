import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer, useContext } from "react";

import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/solid.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
          <App />
  // </React.StrictMode>
);
