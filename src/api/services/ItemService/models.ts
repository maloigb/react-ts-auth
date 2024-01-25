export interface Item {
	id: number,
	color: string,
	name: string,
	pantone_value: string,
	year: number
}

export interface GetItems {
	data: Item[],
	page: number,
	total_pages: number
}
