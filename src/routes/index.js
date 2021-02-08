import loadable from "@loadable/component";
// templates
const MainTemplate = loadable(() => import(/* webpackChunkName: "mainTemplate" */ "../client/templates/MainTemplate"));

// pages
const Home = loadable(() => import(/* webpackChunkName: "home" */ "../client/containers/Home"));
const About = loadable(() => import(/* webpackChunkName: "about" */ "../client/containers/About"));

const ErrorPage = loadable(() => import(/* webpackChunkName: "Error" */ "../client/containers/ErrorPage"));

const routes = [
	{
		component: ErrorPage,
		path: '/error',
		status: 404
	},
	{
		component: MainTemplate,
		path: "/",
		routes:[
			{
				component: Home,
				path: "/",
				exact: true
			},
			{
				component: About,
				path: "/about",
				exact: true
			},
			{
				component: ErrorPage,
				status: 404
			}
		]
	},
	{
		component: ErrorPage,
		status: 404
	}
];

export default routes;
