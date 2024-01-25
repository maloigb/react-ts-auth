import {FC} from "react";
import classNames from "./ListItem.module.scss";
import {listConfig} from "./constants";
export interface ListItemProps {
	id: number,
	color: string,
	name: string,
	pantone_value: string,
	year: number
}
const ListItem: FC<{ item: ListItemProps }> = ({ item }) => {
	return (
		<dl className={classNames.ListItem}>
			{listConfig.map(config => (
				<div
					key={config.name}
					className={classNames.ListItemRow}
				>
					<dt className={classNames.ListItemTerm}>
						{config.description}:
					</dt>
					<dd>{item[config.name]}</dd>
				</div>
			))}
		</dl>
	);
};

export default ListItem;
