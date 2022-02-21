import React from "react";
import PropTypes from "prop-types";

const Upload = (props) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <label
        class="block mb-2 text-lg font-medium text-gray-900"
        for="cat_image"
      >
        Upload a Cat Image
      </label>
      <input
        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent"
        accept="image/*"
        aria-describedby="select_a_cat_image"
        id="cat_image"
        type="file"
      />
      <div class="mt-1 text-sm text-gray-800" id="cat_image_help">
        Select any .jpg or .png image, ensure it conforms to the basic rules:{" "}
        <br />
        - contains a Cat <br />
        - is appropriate for people of any age to see. <br />- you either own
        the copyright, or the image is free from copyright
      </div>
    </div>
  );
};

Upload.propTypes = {};

export default Upload;
