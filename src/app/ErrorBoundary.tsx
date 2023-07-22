import { Component, ErrorInfo, ReactNode } from 'react';
import Alert from '../components/Alert/Alert';

interface IProps {
  children: ReactNode;
}

interface IState {
  errorMsg?: string;
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { errorMsg: '', hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      errorMsg: error.message,
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo.componentStack);
  }

  render() {
    const { errorMsg, hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Alert message={errorMsg} type="error" />;
    }

    return children;
  }
}

export default ErrorBoundary;
