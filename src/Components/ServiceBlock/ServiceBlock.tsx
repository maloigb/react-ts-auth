import {Language, PlayArrow} from "@mui/icons-material";
import classNames from "./ServiceBlock.module.scss";
import UserBlock from "../UserBlock/UserBlock";

const ServiceBlock = () => {
	return (
		<div className={classNames.ServiceBlock}>
			<p className={classNames.ServiceBlockLanguage}>
				<Language/>
				<span>Русский</span>
				<PlayArrow/>
			</p>
			<UserBlock/>
		</div>
	);
};

export default ServiceBlock;
