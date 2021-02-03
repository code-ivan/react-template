import "core-js";
import React from "react";
import { hydrate } from "react-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from "@loadable/component";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const render = (Component) =>{
	const root = document.getElementById("main");
	hydrate(
		<Router>
			<Component />
		</Router>,
		root
	);
}
loadableReady(() => {
	render(App)
});

// webpack Hot Module Replacement API
if (module.hot) {
	// keep in mind - here you are configuring HMR to accept CHILDREN MODULE
	// while `hot` would configure HMR for the CURRENT module
	module.hot.accept('./App', () => {
	  const NextApp = require('./App').default
	  render(NextApp);
	});
  }