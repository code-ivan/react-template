import loadable from "@loadable/component";

const Home = loadable(() => import("../client/containers/Home" /* webpackChunkName: "home" */));
const About = loadable(() => import("../client/containers/About" /* webpackChunkName: "about" */));

const routes = [
	{
		component: Home,
		path: "/",
		exact: true
	},
	{
		component: About,
		path: "/about",
		exact: true
		// loadData: () => ({type:'FETCH_ABOUT', payload: {about:'Data about'}})
	}
];

export default routes;
