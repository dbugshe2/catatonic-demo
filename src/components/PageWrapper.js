import React from "react";
import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";

const PageWrapper = (props) => {
  const { children } = props;
  return (
    <ErrorState>
      <div className="px-4">{children ? children : <EmptyState />}</div>
    </ErrorState>
  );
};

export default PageWrapper;
