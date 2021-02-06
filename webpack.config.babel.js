import path from "path";
import webpack from "webpack";

import nodeExternals from "webpack-node-externals";
import LoadablePlugin from "@loadable/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DIST_PATH = path.resolve(__dirname, "public/dist");
const NODE_ENV = process.env.NODE_ENV || "development";
const __DEV__ = NODE_ENV === 'development';
const __PROD__ = NODE_ENV !== 'development';

const getConfig = (target) => ({
	name: target,
	context: path.join(__dirname, "src"),
	mode: __PROD__ ?  "production" : "development",
	target,
	entry: {
		babel:'@babel/polyfill',
		...(__DEV__ && target === "web"
			? {hot:[
					"react-hot-loader/patch",
					"webpack-hot-middleware/client?noInfo=false&reload=true&overlay=true"
			  ]}
			: {}),
		main:`./client/main-${target}.js`
	},
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
					MiniCssExtractPlugin.loader,
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
					MiniCssExtractPlugin.loader,
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
		filename: __PROD__ ? "[name]-[chunkhash:8].js" : "[name].js",
		publicPath: `/dist/${target}/`,
		libraryTarget: target === "node" ? "commonjs2" : undefined
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			maxSize: 340000,
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
	},
	plugins: [
		new CleanWebpackPlugin(),
		new LoadablePlugin(),
		new MiniCssExtractPlugin(),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
		...(__DEV__ && target === "web" ? [new webpack.HotModuleReplacementPlugin()] : []),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
			__DEV__,
			__PROD__,
			'__SERVER__':JSON.stringify( target === "node" ),
			'__CLIENT__': JSON.stringify( target === "web" )
		}),
		// new BundleAnalyzerPlugin(),
	]
});

export default [getConfig("web"), getConfig("node")];
