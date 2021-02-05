import React from "react";
import { renderRoutes } from "react-router-config";
import { Link, useHistory } from "react-router-dom";

import "../../styles/main.scss";
import { useAuth } from "../hooks/useAuth";

const Template = ({ route }) => {
	const { user, signout } = useAuth();
	const history = useHistory();

	const handleSignOut = ()=>{
		signout()
		history.push("/");
	}
	return (
		<div className="container">
			<header className="mb-32">
				<h1>Welcome!</h1>
			</header>
			<nav>
				<button onClick={handleSignOut}>
					Logout
				</button>
				<Link to="/app/about">About</Link>
			</nav>
			{user && <section>{renderRoutes(route.routes)}</section>}
		</div>
	);
};

export default Template;
