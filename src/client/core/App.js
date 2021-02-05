import React from "react";
import { renderRoutes } from "react-router-config";

import routes from "../../routes";

import "../../styles/main.scss";
import { ProvideAuth } from "../hooks/useAuth";

const App = () => {
	return (
		<ProvideAuth>
		{renderRoutes(routes)}
		</ProvideAuth>
	)
}
	
export default App;
