import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
// import customFetch from "./utils/customFetch.js";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// const { data } = await customFetch.get("/test");
// console.log(data);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" autoClose={3000} />
  </React.StrictMode>
);
