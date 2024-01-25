import {createContext} from "react";
import {User} from "../../Model/User";

export interface UserContextProps {
	user?: User,
	setUser?: (user: User) => void
}

export const UserContext = createContext<UserContextProps>({});

