import React, { useState } from "react";
import PropTypes from "prop-types";
import EmptyState from "components/EmptyState";

const Home = (props) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  return (
    <div className="flex flex-col px-4">
      <h3 className="text-3xl font-light">Home</h3>
      <div>{uploadedImages.length > 0 ? "we have cats" : <EmptyState />}</div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
