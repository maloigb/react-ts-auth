import {FC} from "react";
import classNames from "./ListItems.module.scss";
import ListItem, {ListItemProps} from "../ListItem/ListItem";

interface ListItemsProps {
	items: ListItemProps[];
}

const ListItems: FC<ListItemsProps> = ({items}) => {
	return (
		<ul className={classNames.ListItems}>
			{items.map(item => (
				<li
					key={item.id}
					className={classNames.ListItem}
				>
					<ListItem
						item={item}
					/>

				</li>))}
		</ul>
	);
};

export default ListItems;
