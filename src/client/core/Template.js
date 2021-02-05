import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";


import "../../styles/main.scss";

const Template = ({route}) => (
	<div className="container">
		<header className="mb-32">
			<h1>Welcome!</h1>
		</header>
		<nav>
			<Link to="/app" className="mr-8">
				Home
			</Link>
			<Link to="/app/about">About</Link>
		</nav>
		<section>{renderRoutes(route.routes)}</section>
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

export default Template;
