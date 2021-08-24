import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";

const authService = new AuthService();
const imageUploader = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
