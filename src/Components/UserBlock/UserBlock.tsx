import React from "react";
import {useUser} from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material";
import {Logout} from "@mui/icons-material";
import classNames from "./UserBlock.module.scss";
import {routePath} from "../../Router/config";

const UserBlock = () => {
	const {user, changeUser} = useUser();
	const navigate = useNavigate();

	if (!user.token) {
		return <></>;
	}

	const handleClick = () => {
		changeUser({});
		navigate(routePath.login);
	};
	return (
		<div className={classNames.UserBlock}>
			<p>{user.token}</p>
			<IconButton
				aria-label="exit"
				onClick={handleClick}
			>
				<Logout/>
			</IconButton>
		</div>
	);
};

export default UserBlock;
