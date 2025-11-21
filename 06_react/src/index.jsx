import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/**
 * esbuild
 * vite alternate webpack parcel snowpack
 * HMR -> Hot Module Replacement, a development technique that updates modules in a running application without a full page reload
 * npm i --save-dev vite @vitejs/plugin-react
 */
