import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-coffee-background px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-serif font-bold text-coffee-text mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-coffee-text/70 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="mb-6 text-left bg-coffee-secondary/30 p-4 rounded-lg">
                <summary className="cursor-pointer text-coffee-text font-medium mb-2">
                  Error Details
                </summary>
                <pre className="text-xs text-coffee-text/60 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-coffee-primary text-white rounded-full font-medium hover:bg-coffee-primary/90 transition-all"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-coffee-secondary text-coffee-text rounded-full font-medium hover:bg-coffee-secondary/80 transition-all"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

