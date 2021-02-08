import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ({navigation}) => {
	
	return (
		<nav>
			<Link to="/" className="mr-8">
				Home
			</Link>
			<Link to="/about">About</Link>

			<Link to="/error">Error</Link>
			{/* {navigation && navigation.length > 0 && navigation.filter(n=>n.type =='type-finance').map((n, i)=>(
			<p key={i}>
				{n.title} <small>{n.url}</small>
			</p>
			))} */}
		</nav>
	)
}

export default Navigation