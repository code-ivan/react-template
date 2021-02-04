import React from 'react'
const Html = ({ extractor, content, helmet }) => {
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
				<div id="main" dangerouslySetInnerHTML={{ __html: content }} />

				{extractor.getScriptElements()}
			</body>
		</html>
	);
};

export default Html;
