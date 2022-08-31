import * as React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./assets/css/global.css";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
