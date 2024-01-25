import {FC, JSX, useMemo} from "react";
import {useUser} from "../../Hooks/useUser";
import {linkConfig} from "./constants";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classNames from "././AppLayout.module.scss";
import ServiceBlock from "../../Components/ServiceBlock/ServiceBlock";
const AppLayout: FC<{ children: JSX.Element }> = ({children}) => {
	const {user} = useUser();

	const sideBarLinks = useMemo(() => {
		if (!user.token) {
			return [];
		}
		return linkConfig;
	}, [user]);

	return (
		<div className={classNames.AppLayout}>
			<main className={classNames.AppLayoutMain}>
				<aside className={classNames.AppLayoutSide}>
					<Sidebar
						links={sideBarLinks}
					/>
				</aside>
				<div className={classNames.AppLayoutMainContent}>
					<div className={classNames.AppLayoutServiceBlock}>
						<ServiceBlock/>
					</div>
					<div className={classNames.AppLayoutContent}>
						{children}
					</div>
				</div>
			</main>
		</div>
	);
};

export default AppLayout;
