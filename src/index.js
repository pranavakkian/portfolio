import React from "react";
import AdSense from "react-adsense";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "semantic-ui-css/semantic.min.css";
import App from "./App.jsx";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-124182431-4");
ReactGA.pageview(window.location.pathname + window.location.search);

<AdSense.Google
  client="ca-pub-6964520538689912"
  slot="7806394673"
  style={{ display: "block" }}
  format="auto"
  responsive="true"
  layoutKey="-gw-1+2a-9x+5c"
/>;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
