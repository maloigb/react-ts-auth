import {RouteProps} from "react-router-dom";
import GreetingPage from "../Pages/GreetingPage/GreetingPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ListPage from "../Pages/ListPage/ListPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

export type AuthRouterProps = RouteProps & {
	authOnly?: boolean;
	guestOnly?: boolean;
}
export enum AppRoutes {
	INDEX = "index",
	LOGIN = "login",
	LIST = "list",
	NOT_FOUND = "notFound"
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.INDEX]: "/",
	[AppRoutes.LOGIN]: "/login",
	[AppRoutes.LIST]: "/list",
	[AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, AuthRouterProps> = {
	[AppRoutes.INDEX]: {
		path: routePath.index,
		element: <GreetingPage />,
		authOnly: true
	},
	[AppRoutes.LOGIN]: {
		path: routePath.login,
		element: <LoginPage />,
		guestOnly: true
	},
	[AppRoutes.LIST]: {
		path: routePath.list,
		element: <ListPage />,
		authOnly: true
	},
	[AppRoutes.NOT_FOUND]: {
		path: routePath.notFound,
		element: <NotFoundPage />
	}
};
