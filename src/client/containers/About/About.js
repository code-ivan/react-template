import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import styles from './About.scss'
const About = ()=>{
	// console.log(styles)
	return <Fragment>
		<Helmet title="About" />
		<div className={styles.about}>
			<h2>About</h2>
			<p>Lorem ipsum</p>
		</div>
	</Fragment>
}

export default About