import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TreeProvider } from "./context/TreeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <TreeProvider>
          <App />
      </TreeProvider>
  </React.StrictMode>
);
