import React from "react";
import PropTypes from "prop-types";
import { Route, NavLink, Link } from "react-router-dom";

function MenuButtons(props) {
  return (
    <li>
      <NavLink to={props.data.link} />
    </li>
  );
}
export default MenuButtons;

MenuButtons.propTypes = {
  data: PropTypes.object
};
