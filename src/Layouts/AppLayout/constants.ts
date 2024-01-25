import {routePath} from "../../Router/config";

export type AppLink = {
	description: string,
	to: string
}
export const linkConfig: AppLink[] = [
	{
		to: routePath.index,
		description: "Страница с приветствием"
	},
	{
		to: routePath.list,
		description: "Страница со списком"
	}
];
