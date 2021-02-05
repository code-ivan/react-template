import React, { useEffect } from "react";
import Helmet from "react-helmet";
import loadable from "@loadable/component";
import { useAuth } from "../../hooks/useAuth";

const Moment = loadable.lib(() => import("moment"));
const Counter = loadable(() => import(/* webpackPreload: true */ "../../components/Counter"));

const Home = () => {
	const auth = useAuth();
	console.log(auth)
	useEffect(()=>{
		console.log('useEffect: Home')
	},[])

	return (
		<div>
			<Helmet title="Home" />
			<h2>Home</h2>
			<Moment>{(moment) => moment().format("HH:mm")}</Moment>
			<Counter />
			<button onClick={()=>auth.signin()}>
				Sign in
			</button>
		</div>
	);
};

export default Home;
