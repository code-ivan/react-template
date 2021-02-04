import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

import routes from "../../routes";

import "../../styles/main.scss";

const App = () => (
	<div className="container">
		<header className="mb-32">
			<h1>Welcome!</h1>
		</header>
		<nav>
			<Link to="/" className="mr-8">
				Home
			</Link>
			<Link to="/about">About</Link>
		</nav>
		<section>{renderRoutes(routes)}</section>
		{/* <A />
		<br />
		<B />
		<br />
		<X letter="A" />
		<br />
		<X letter="F" />
		<br />
		<E />
		<br />
		<GClient prefix="ssr: false" />
		<br />
		<GServer prefix="ssr: true" />
		<br />
		<Sub letter="Z" />
		<br />
		<RootSub letter="Y" />
		<br /> */}
	</div>
);

export default App;
