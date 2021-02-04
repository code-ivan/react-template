import path from "path";
import webpack from "webpack";

import nodeExternals from "webpack-node-externals";
import LoadablePlugin from "@loadable/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DIST_PATH = path.resolve(__dirname, "public/dist");
const production = process.env.NODE_ENV === "production";
const development = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const cssLoader = (target) =>
	development && target == "web"
		? [
				{
					loader: "style-loader"
				}
		  ]
		: [MiniCssExtractPlugin.loader];

const getConfig = (target) => ({
	name: target,
	context: path.join(__dirname, "src"),
	mode: development ? "development" : "production",
	target,
	entry: [
		...(development && target === "web"
			? [
					"react-hot-loader/patch",
					"webpack-hot-middleware/client?noInfo=false&reload=true&overlay=true"
			  ]
			: []),
		`./client/main-${target}.js`
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						caller: { target }
					}
				}
			},
			// design sytem
			{
				test: /\.scss$|\.css$/,
				include: path.join(__dirname, "src/styles/main.scss"),
				use: [
					...cssLoader(target),
					{
						loader: "css-loader",
						options: {
							localIdentName: "[local]",
							modules: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			// all other styles
			{
				test: /\.scss$|\.css$/,
				exclude: path.join(__dirname, "src/styles/main.scss"),
				use: [
					...cssLoader(target),
					{
						loader: "css-loader",
						options: {
							localIdentName: "[name]_[local]_[hash:base64:5]",
							modules: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	externals: target === "node" ? ["@loadable/component", nodeExternals()] : undefined,
	output: {
		path: path.join(DIST_PATH, target),
		filename: production ? "[name]-[chunkhash:8].js" : "[name].js",
		publicPath: `/dist/${target}/`,
		libraryTarget: target === "node" ? "commonjs2" : undefined
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
		// splitChunks: {
		// 	cacheGroups: {
		// 		commons: {
		// 			test: /[\\/]node_modules[\\/]/,
		// 			name: "vendors",
		// 			chunks: "all",
		// 		},
		// 	},
		// },
	},
	plugins: [
		new LoadablePlugin(),
		new MiniCssExtractPlugin(),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
		...(development && target === "web" ? [new webpack.HotModuleReplacementPlugin()] : [])
		// new BundleAnalyzerPlugin(),
	]
});

export default [getConfig("web"), getConfig("node")];
