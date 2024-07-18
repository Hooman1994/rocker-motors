import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./index.scss";
import ResponsiveLayout from "./ResponsiveLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveLayout />
    </BrowserRouter>
  </React.StrictMode>
);
