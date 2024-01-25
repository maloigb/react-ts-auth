import classNames from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
	return (
		<div className={classNames.NotFoundPage}>
			<h1 className={classNames.NotFoundPageTitle}>Страница не найдена :(</h1>
		</div>
	);
};

export default NotFoundPage;
