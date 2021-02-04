import React from 'react'
import Helmet from 'react-helmet'
import loadable from "@loadable/component";

const Moment = loadable.lib(() => import("moment"));
// import Counter from '../../components/Counter'
const Counter = loadable(() => import(/* webpackPreload: true */ "../../components/Counter"));

const Home = ()=>{
	return (
		<div>
			<Helmet title="Home" />
			<h2>Home 11</h2>
			
			<Moment>{(moment) => moment().format("HH:mm")}</Moment>
			<Counter />
		</div>
	)
}

export default Home