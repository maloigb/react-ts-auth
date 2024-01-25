import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import UserProvider from "./Context/User/UserProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<UserProvider>
						<App/>
					</UserProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</ErrorBoundary>
	</React.StrictMode>
);
