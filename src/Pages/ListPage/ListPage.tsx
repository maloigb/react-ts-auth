import {Pagination} from "@mui/material";
import {useItems} from "../../Hooks/useItems";
import {usePagination} from "../../Hooks/usePagination";
import AppLoader from "../../Components/AppLoader/AppLoader";
import ListItems from "../../Components/ListItems/ListItems";
import classNames from "./ListPage.module.scss";
const ListPage = () => {
	const {currentPage, handlePageChange, limit, setLimit} = usePagination({startPage: 1});

	const onItemsSuccess = (totalPages: number) => {
		setLimit(totalPages);
	};
	const {data, isFetching} = useItems({page: currentPage, onItemsSuccess});

	const getContent = () => {
		if (isFetching || !data) {
			return <div className={classNames.ListPageLoader}>
				<AppLoader/>
			</div>;
		}
		return <ListItems items={data.data}/>;
	};
	return (
		<div className={classNames.ListPage}>
			<div className={classNames.ListPageContent}>
				{getContent()}
			</div>
			<div className={classNames.ListPageFooter}>
				<Pagination
					count={limit}
					page={currentPage}
					onChange={(_, page) => handlePageChange(page)}
				/>
			</div>
		</div>
	);
};

export default ListPage;
