import {FC, useMemo, useState, ReactNode} from "react";
import {UserContext} from "./UserContext";
import {LOCAL_STORAGE_USER_KEY} from "./constants";
import {User} from "../../Model/User";


const defaultUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "{}");
const UserProvider: FC<{ children: ReactNode }> = ({children}) => {
	const [user, setUser] = useState<User>(defaultUser);

	const defaultProps = useMemo(() => ({
		user,
		setUser
	}), [user]);
	return (
		<UserContext.Provider value={defaultProps}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
