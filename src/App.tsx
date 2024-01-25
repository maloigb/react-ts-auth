import classNames from "./App.module.scss";
import AppRouter from "./Router/AppRouter";
import AppLayout from "./Layouts/AppLayout/AppLayout";

function App() {
	return (
		<div className={classNames.App}>
			<AppLayout>
				<AppRouter/>
			</AppLayout>
		</div>
	);
}

export default App;
