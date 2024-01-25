import {FC} from "react";
import {NavLink} from "react-router-dom";
import classNames from "./Sidebar.module.scss";
type SidebarLink = {
	description: string,
	to: string
}

interface SidebarProps {
	links: SidebarLink[];
}

const Sidebar: FC<SidebarProps> = ({links}) => {
	const getClassName = ({ isActive }: { isActive: boolean }) => {
		const defaultClass = classNames.SideBarNavLink;
		const activeClass = classNames.SideBarNavLinkActive;

		if (isActive) {
			return defaultClass + " " + activeClass;
		}
		return defaultClass;

	};
	return (
		<div className={classNames.Sidebar}>
			<nav className={classNames.SideBarNav}>
				<ul className={classNames.SideBarNavList}>
					{links.map((link) => (
						<li
							key={link.to}
						>
							<NavLink
								to={link.to}
								className={getClassName}
							>
								{link.description}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
