import LoginForm from "../../Components/LoginForm/LoginForm";
import classNames from "./LoginPage.module.scss";
const LoginPage = () => {
	return (
		<div className={classNames.LoginPage}>
			<div className={classNames.LoginPageContainer}>
				<LoginForm/>
			</div>
		</div>
	);
};

export default LoginPage;
