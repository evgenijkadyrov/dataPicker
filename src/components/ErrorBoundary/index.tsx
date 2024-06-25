import { Component, ErrorInfo, ReactNode } from "react";

import "./styles.scss";

interface ErrorBoundaryState {
    error: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            error: false,
        };
    }

    static getDerivedStateFromError() {
        return { error: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error: ", error, errorInfo);
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;
        return (
            <div>
                {error ? (
                    <div className="errorWrapper">
                        <div className="heading">Something went wrong &#9785;...</div>
                    </div>
                ) : (
                    children
                )}
            </div>
        );
    }
}
