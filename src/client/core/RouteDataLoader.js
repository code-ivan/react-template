import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";

import routes from "../../routes";
const RouteDataLoader = ({ children, location }) => {
	useEffect(() => {
		const branch = matchRoutes(routes, location.pathname);
		branch.forEach(({ route, match }) => {
			if (route.loadData) {
				console.log("Fetch Data.");
				route.loadData()
				// this.props.dispatch(route.loadData(match))
			}
		});
	}, [location]);

	return children;
};

export default withRouter(RouteDataLoader);
