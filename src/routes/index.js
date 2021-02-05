import loadable from "@loadable/component";

const Template = loadable(() => import("../client/core/Template"));
const Home = loadable(() => import("../client/containers/Home"));
const Login = loadable(() => import("../client/containers/Login"));
const About = loadable(() => import("../client/containers/About"));

const ErrorPage = loadable(() => import("../client/containers/ErrorPage"));

const routes = [
	{
		component: Home,
		path: "/",
		exact: true
	},
	{
		component: Login,
		path: "/app",
		exact: true
	},
	{
		component: Template,
		path: "/app",
		routes: [
			{
				component: About,
				path: "/app/about",
				exact: true
			},
			{
				component: ErrorPage
			}
		]
	},
	{
		component: ErrorPage
	}
];

export default routes;
