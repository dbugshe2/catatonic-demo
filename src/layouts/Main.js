import React from "react";
import PageWrapper from "components/PageWrapper";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

export default Main;
