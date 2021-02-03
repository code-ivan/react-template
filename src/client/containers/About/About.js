import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import loadable from "@loadable/component";

import styles from './About.scss'
const C = loadable(() => import(/* webpackPreload: true */ "../../letters/C"));
const About = ()=>{
	// console.log(styles)
	return <Fragment>
		<Helmet title="About" />
		<div className={styles.about}>
			<h2>About</h2>
			<C />
		</div>
	</Fragment>
}

export default About