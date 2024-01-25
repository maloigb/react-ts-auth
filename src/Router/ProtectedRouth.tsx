import React, {FC, JSX} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {routePath} from "./config";

const ProtectedRouth: FC<{ children: JSX.Element, path: typeof routePath[keyof typeof routePath], condition: boolean }> = ({
	children,
	condition,
	path
}) => {
	const location = useLocation();

	if (condition) {
		return <Navigate
			to={path}
			state={{from: location}}
			replace
		/>;
	}
	return children;
};

export default ProtectedRouth;
