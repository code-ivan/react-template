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
			loadData: () => console.log('load data /about page')
		}
];

export default routes