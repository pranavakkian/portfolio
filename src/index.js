import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "semantic-ui-css/semantic.min.css";
import App from "./App.jsx";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-124182431-4");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
