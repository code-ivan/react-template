import loadable from '@loadable/component'

const Home = loadable(() => import('../client/containers/Home'))
const About = loadable(() => import('../client/containers/About'))

const routes = [
		{
			component: Home,
			path: "/",
			exact: true
		},
		{
			component: About,
			path: "/about",
			exact: true,
			// loadData: () => ({type:'FETCH_ABOUT', payload: {about:'Data about'}})
		}
];

export default routes