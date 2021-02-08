import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { useSSE } from "use-sse";
import fetch from "node-fetch";

import routes from "../../routes";

import "../../styles/main.scss";

const App = () => {
	return (renderRoutes(routes))
};

export default App;
