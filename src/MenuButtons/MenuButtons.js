import React from "react";
import PropTypes from "prop-types";

function MenuButtons(props) {
  return (
    <li>
      <a href={props.data.link} />
    </li>
  );
}
export default MenuButtons;

MenuButtons.propTypes = {
  data: PropTypes.object
};
