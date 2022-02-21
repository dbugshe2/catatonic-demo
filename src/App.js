import React from "react";
import { useRoutes } from "react-router-dom";
import indexRoutes from "routes";

const App = () => {
  let app = useRoutes(indexRoutes);
  return <>{app}</>;
};

export default App;
