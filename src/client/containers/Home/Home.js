import React from "react";
import Helmet from "react-helmet";
import loadable from "@loadable/component";
import { Link } from "react-router-dom";

const Moment = loadable.lib(() => import("moment"));
const Counter = loadable(() => import(/* webpackPreload: true */ "../../components/Counter"));

const Home = () => {
	return (
		<div className="container">
			<Helmet title="Home" />
			<h2>Home</h2>
			<p><Link to="/app">Login</Link></p>
			<Moment>{(moment) => moment().format("HH:mm")}</Moment>
			<Counter />
		</div>
	);
};

export default Home;
