import path from "path";
import React from "react";
import Helmet from "react-helmet";
import { StaticRouter } from "react-router-dom";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
// loadable
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
// redux
import { Provider } from "react-redux";

import Html from "./Html";
const nodeStats = path.resolve(__dirname, "../../public/dist/node/loadable-stats.json");
const webStats = path.resolve(__dirname, "../../public/dist/web/loadable-stats.json");
import { createServerContext } from "use-sse";
const renderRoute = async (req, res) => {
	let context = {};
	const nodeExtractor = new ChunkExtractor({
		statsFile: nodeStats,
		outputPath: path.resolve("public/dist/node")
	});
	const { default: App } = nodeExtractor.requireEntrypoint();

	const webExtractor = new ChunkExtractor({
		statsFile: webStats,
		outputPath: path.resolve("public/dist/web")
	});
	
	const { ServerDataContext, resolveData } = createServerContext();
	renderToString(
		<ChunkExtractorManager extractor={webExtractor}>
			<StaticRouter location={req.url} context={context}>
				<ServerDataContext>
					<App />
				</ServerDataContext>
			</StaticRouter>
		</ChunkExtractorManager>
	);

	const data = await resolveData();

	const content = renderToStaticMarkup(
		<ChunkExtractorManager extractor={webExtractor}>
			<StaticRouter location={req.url} context={context}>
				<ServerDataContext>
					<App />
				</ServerDataContext>
			</StaticRouter>
		</ChunkExtractorManager>
	);

	const helmet = Helmet.rewind();
	
	res.set("content-type", "text/html");
	res.send(
		"<!DOCTYPE html>" +
			renderToString(
				<Html
					{...{
						extractor: webExtractor,
						content,
						helmet,
						initial_state: data.toJSON()
					}}
				/>
			)
	);
	// })
};

export default renderRoute;
