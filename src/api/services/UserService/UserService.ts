import {AxiosResponse} from "axios";
import {apiInstance} from "../../index";
import {SignIn} from "./models";
export const UserService = {
	signIn: (username: string, password: string): Promise<AxiosResponse<SignIn>> => {
		return apiInstance.post("/login", {username, password});
	}
};
