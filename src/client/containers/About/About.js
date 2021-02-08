import React, { Fragment } from "react";
import Helmet from "react-helmet";
import styles from "./About.scss";
import { useSSE } from "use-sse";
import { fetchModel } from "./actions";

const About = () => {
	const [people] = useSSE(() => {
		return fetchModel('b043df5a')
	}, []);

	return (
		<Fragment>
			<Helmet title="About" />
			<div className={styles.about}>
				<h2>About</h2>
				
				{people && people.length > 0 && (
					<div>
						{people.map((p, i) => (
							<div key={i}>
								<h3>{p.name}</h3>
								<p>{p.city}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default About;
