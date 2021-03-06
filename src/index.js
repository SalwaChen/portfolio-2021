import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
export { default as Navbar } from "./components/Navbar.js";
export { default as Home } from "./components/pages/Home";
export { default as Work } from "./components/pages/Work";
export { default as About } from "./components/pages/About";
export { default as Contact } from "./components/pages/Contact";
export { default as Footer } from "./components/Footer.js";
export { default as SideNavbar } from "./components/SideNavbar.js";

ReactDOM.render(<App />, document.getElementById("root"));
