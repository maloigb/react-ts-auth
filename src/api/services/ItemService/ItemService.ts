import {apiInstance} from "../../index";
import {AxiosResponse} from "axios";
import {GetItems} from "./models";
export const ItemService = {
	getItems: (params: { page: number }): Promise<AxiosResponse<GetItems>> => {
		return apiInstance.get("/items", {
			params
		});
	}
};
