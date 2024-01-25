import { useCallback, useState } from "react";

interface UsePaginationArguments {
  startPage: number;
  maxPage?: number;
}

export const usePagination = ({
	startPage,
	maxPage = 1,
}: UsePaginationArguments) => {
	const [currentPage, setCurrentPage] = useState(startPage);
	const [limit, setLimit] = useState(maxPage);

	const handlePageChange = useCallback((page: number) => {
		setCurrentPage(page);
	}, []);

	return {
		currentPage,
		setLimit,
		limit,
		handlePageChange,
	};
};
