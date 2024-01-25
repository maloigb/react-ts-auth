import {ItemService} from "../api/services/ItemService/ItemService";
import {useQuery} from "@tanstack/react-query";

interface UseItemsArguments {
	page: number,
	onItemsSuccess: (totalPages: number) => void
}
export const useItems = ({ page, onItemsSuccess }: UseItemsArguments) => {
	return useQuery({
		queryKey: ["items", page],
		queryFn: async () => {
			const { data } = await ItemService.getItems({ page });
			onItemsSuccess(data.total_pages);
			return data;
		},
	});
};
