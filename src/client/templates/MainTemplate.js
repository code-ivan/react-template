import React from "react";
import { renderRoutes } from "react-router-config";

import "../../styles/main.scss";
import Navigation from "../components/Navigation";
import { useSSE } from "use-sse";
import fetch from "node-fetch";

const MainTemplate = ({route}) => {
	const [navigation] = useSSE(() => {
		return fetch(`http://localhost:8181/api/vm/navmenu`).then((res) => res.json());
	}, []);

	return (
	<div className="container">
		<header className="mb-32">
			<h1>Welcome!</h1>
		</header>

		<Navigation navigation={navigation} />
		
		<section>{renderRoutes(route.routes)}</section>
	</div>
	)
};

export default MainTemplate;
