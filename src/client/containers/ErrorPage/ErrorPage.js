import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = ({ staticContext }) => {
	if(staticContext)
		staticContext.status = 404;
	return (
		<div>
			<Helmet title="Error" />
			<h2>Error</h2>
			<Link to="/" className="mr-8">
				Home
			</Link>
			<Link to="/about">About</Link>
		</div>
	);
};

export default ErrorPage;
