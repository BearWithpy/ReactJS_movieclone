import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* StrictMode - when rendering it goes twice  */}
    <App />
  </React.StrictMode>,
  document.getElementById("potato")
);
