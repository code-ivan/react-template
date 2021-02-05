import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";

import routes from "../../routes";
import { useDispatch } from "react-redux";
export const fetchData = (location, { dispatch }) => {
	const branch = matchRoutes(routes, location.pathname);
	const promises = [
		// ...__SERVER__ ? [dispatch({type:'INITIAL_FETCH'})] : [],
		...branch.map(({ route, match }) => {
			if (route.loadData) {
				return dispatch(route.loadData());
			}
		})
	]
	
	return Promise.all(promises)
};

const RouteDataLoader = ({ children, location }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if(__CLIENT__) 
			fetchData(location, { dispatch });
	}, [location]);

	return children;
};

export default withRouter(RouteDataLoader);
