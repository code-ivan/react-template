import React from 'react'
import Helmet from 'react-helmet'

import Counter from '../../components/Counter'

const Home = ()=>{
	return (
		<div>
			<Helmet title="Home" />
			<h2>Home</h2>
			<Counter />
		</div>
	)
}

export default Home