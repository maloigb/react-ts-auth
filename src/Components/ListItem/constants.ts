import {ListItemProps} from "./ListItem";

interface RowConfig {
	name: keyof ListItemProps,
	description: string
}

export const listConfig: RowConfig[] = [
	{
		name: "id",
		description: "ID"
	},
	{
		name: "color",
		description: "Color"
	},
	{
		name: "name",
		description: "Name"
	},
	{
		name: "pantone_value",
		description: "Pantone Value"
	},
	{
		name: "year",
		description: "Year"
	}
];
