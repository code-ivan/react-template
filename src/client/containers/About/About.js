import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'

import styles from './About.scss'
const About = ()=>{
	const data = useSelector(state=>state.app.about)
	// console.log(styles)
	return <Fragment>
		<Helmet title="About" />
		<div className={styles.about}>
			<h2>About</h2>
			<p>Lorem ipsum</p>
			<p>{data}</p>
		</div>
	</Fragment>
}

export default About