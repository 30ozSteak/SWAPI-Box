import React from "react";
import PropTypes from "prop-types";
import { Route, NavLink, Link } from "react-router-dom";

function MenuButtons(props) {
  return <NavLink to={props.data.link} key={props.key} />;
}
export default MenuButtons;

MenuButtons.propTypes = {
  data: PropTypes.object
};
