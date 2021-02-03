import "core-js";
import React from "react";
import { hydrate } from "react-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from "@loadable/component";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

loadableReady(() => {
	const root = document.getElementById("main");
	hydrate(
		<Router>
			<App />
		</Router>,
		root
	);
});
