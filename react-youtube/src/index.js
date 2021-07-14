import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

const youtube = new Youtube("asd");

ReactDOM.render(
  <React.StrictMode>
    <App key={API_KEY} />
  </React.StrictMode>,
  document.getElementById("root")
);
