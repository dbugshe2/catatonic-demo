import React, { Component } from "react";
import Button from "./common/Button";

export default class ErrorState extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  handleRefresh = () => {
    window.location.reload(false);
  };

  handleGoHome = () => {
    window.location.href = "home";
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    console.log({ componentError: error, componentErrorDetails: errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, style = {} } = this.props;
    if (hasError || error) {
      return (
        <div
          style={{
            backgroundColor: "#ececec",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: 8,
            padding: 16,
            width: "100%",
            height: "100%",
            ...style,
          }}
        >
          <span className="display-1 text-primary font-weight-bold">OOPS!</span>
          <h2>Sorry, something went wrong</h2>
          <h4>an error has occured</h4>
          <h6>
            Try Refreshing the page, if this doesn't help Go back to the home
            page
          </h6>

          <div>
            <Button onClick={() => this.handleGoHome(error, errorInfo)}>
              Go Back to Home Page
            </Button>
            {/* <Link to="/dashboard/"> */}
            <Button onClick={this.handleRefresh}>Refresh Page</Button>
            {/* </Link> */}
          </div>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error && error.toString()}
            <br />
            {errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    return <>{children}</>;
  }
}
