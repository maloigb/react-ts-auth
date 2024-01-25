import {useContext} from "react";
import {UserContext, UserContextProps} from "../Context/User/UserContext";
import {User} from "../Model/User";
import {LOCAL_STORAGE_USER_KEY} from "../Context/User/constants";

interface useUserResult {
	user: User;
	changeUser: (user: User) => void;
}

export const useUser = (): useUserResult => {
	const {user, setUser} = useContext(UserContext) as Required<UserContextProps>;

	const changeUser = (user: User) => {
		setUser(user);
		localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
	};

	return {
		user,
		changeUser
	};
};
