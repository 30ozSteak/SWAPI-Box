import React from "react";
import PropTypes from "prop-types";

function MenuButtons(props) {
  return (
    <li>
      <a href={props.data.link}>
        <i className={`fa fa-${props.data.service}`} />
      </a>
    </li>
  );
}
export default MenuButtons;

MenuButtons.propTypes = {
  data: PropTypes.array
};
