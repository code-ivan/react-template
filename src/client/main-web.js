import "core-js";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from "@loadable/component";

// TODO: react-redux
// import { Provider } from 'react-redux'
// import configureStore from './store';
// const store = configureStore(window.__INITIAL_STATE__)
// hydrate(<Provider store={store}>...</Provider>

import App from "./core/App";

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
	module.hot.accept('./core/App', () => {
	  const NextApp = require('./core/App').default
	  render(NextApp);
	});
  }