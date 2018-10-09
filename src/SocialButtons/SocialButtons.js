import React from "react";
import PropTypes from "prop-types";

function SocialButtons(props) {
  return (
    <li>
      <a href={props.data.link} target="_blank">
        <i className={`fa fa-${props.data.service}`} />
      </a>
    </li>
  );
}
export default SocialButtons;

SocialButtons.propTypes = {
  data: PropTypes.array
};
