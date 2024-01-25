import axios from "axios";

export const apiInstance = axios.create({
	baseURL: "https://reqres.in/api"
});
