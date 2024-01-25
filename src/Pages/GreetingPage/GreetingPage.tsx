import classNames from "./GreetingPage.module.scss";
const GreetingPage = () => {
	return (
		<div className={classNames.GreetingPage}>
			<h1 className={classNames.GreetingPageTitle}>Приветствуем на портале!</h1>
		</div>
	);
};

export default GreetingPage;
