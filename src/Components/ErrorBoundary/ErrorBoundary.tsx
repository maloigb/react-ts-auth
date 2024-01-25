import React, {ErrorInfo, ReactNode} from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return {hasError: true};
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error(error, info);
	}

	reloadPage() {
		location.reload();
	}

	render() {
		const {hasError} = this.state;
		const {children} = this.props;
		if (hasError) {
			return (
				<div>
					<h1>Что-то пошло не так...</h1>
					<button onClick={() => this.reloadPage()}>Обновить страницу</button>
				</div>
			);
		}
		return children;
	}
}

export default ErrorBoundary;
