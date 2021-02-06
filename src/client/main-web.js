// import "core-js";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from "@loadable/component";
import App from "./core/App";

// server side data fetch
import { createBroswerContext } from "use-sse";
const BroswerDataContext = createBroswerContext();

const render = (Component) => {
	const root = document.getElementById("main");
	hydrate(
		<Router>
			<BroswerDataContext>
				<Component />
			</BroswerDataContext>
		</Router>,
		root
	);
};
loadableReady(() => {
	render(App);
});

// webpack Hot Module Replacement API
if (module.hot) {
	// keep in mind - here you are configuring HMR to accept CHILDREN MODULE
	// while `hot` would configure HMR for the CURRENT module
	module.hot.accept("./core/App", () => {
		const NextApp = require("./core/App").default;
		render(NextApp);
	});
}
