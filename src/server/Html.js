import React from 'react'
const getInitialState = state => {
	const json = JSON.stringify(state).replace(/</g, '\\u003c')
	return `window.__INITIAL_STATE__=${json}`
}

const Html = ({ extractor, content, helmet, initial_state }) => {
	return (
		<html>
			<head>
				<meta charSet="UTF-8" />
				{helmet && helmet.title.toComponent()}
				{helmet && helmet.meta.toComponent()}
				{helmet && helmet.link.toComponent()}

				{extractor.getLinkElements()}
				{extractor.getStyleElements()}
			</head>
			<body>
				<div id="main" />

				<script dangerouslySetInnerHTML={{ __html: getInitialState(initial_state) }} />
				{extractor.getScriptElements()}
			</body>
		</html>
	);
};

export default Html;
