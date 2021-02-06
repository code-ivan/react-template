import React, { useEffect } from "react";
import Helmet from "react-helmet";
import loadable from "@loadable/component";

const Moment = loadable.lib(() => import("moment"));
// const Counter = loadable(() => import(/* webpackPreload: true */ "../../components/Counter"));

const Home = () => {
	useEffect(()=>{
		console.log('useEffect: Home')
	},[])

	return (
		<div>
			<Helmet title="Home" />
			<h2>Home</h2>
			<Moment>{(moment) => moment().format("HH:mm")}</Moment>
		</div>
	);
};

export default Home;
