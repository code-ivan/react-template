import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import { useAuth } from '../../hooks/useAuth'

import styles from './About.scss'
const About = ()=>{
	const data = useSelector(state=>state.app.about)
	const {user} = useAuth();
	
	return <Fragment>
		<Helmet title="About" />
		<div className={styles.about}>
			<h2>About</h2>
			<p>Lorem ipsum</p>
			{user && user.name &&
			<div>
			Logged in {user.name}
			</div>}
			<p>{data}</p>
		</div>
	</Fragment>
}

export default About