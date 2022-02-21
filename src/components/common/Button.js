import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { type, children, text } = props;
  return <button type={type || "button"}>{text ? text : children}</button>;
};

Button.propTypes = {};

export default Button;
