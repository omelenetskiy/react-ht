import React, { Component } from 'react';

type Props = {
  children?: React.Node,
};

type State = {
  hasError: boolean,
};

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static defaultProps = {
    children: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
