import {ReactElement, Suspense, useCallback} from "react";
import {Route, Routes} from "react-router-dom";
import {AuthRouterProps, routeConfig, routePath} from "./config";
import ProtectedRouth from "./ProtectedRouth";
import AppLoader from "../Components/AppLoader/AppLoader";
import {useUser} from "../Hooks/useUser";

const AppRouter = () => {
	const {user} = useUser();
	const getElement = useCallback((route: AuthRouterProps, element: ReactElement) => {
		if (route.authOnly) {
			return <ProtectedRouth path={routePath.login} condition={!user.token}>{element}</ProtectedRouth>;
		} else if (route.guestOnly) {
			return <ProtectedRouth path={routePath.index} condition={!!user.token}>{element}</ProtectedRouth>;
		}
		return route.element;
	}, [user]);
	const renderWithWrapper = useCallback((route: AuthRouterProps) => {
		const element = (
			<Suspense fallback={<AppLoader/>}>
				{route.element}
			</Suspense>
		);
		return <Route
			key={route.path}
			path={route.path}
			element={(
				<Suspense fallback={<AppLoader/>}>
					{getElement(route, element)}
				</Suspense>
			)}
		/>;
	}, [user]);
	return (
		<Suspense fallback={<AppLoader/>}>
			<Routes>
				{Object.values(routeConfig).map(renderWithWrapper)}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
