import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuButtons from "../MenuButtons/MenuButtons";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      buttonState: ""
    };
  }

  toggleActive = () => {
    this.state.buttonState === ""
      ? this.setState({ buttonState: "active" })
      : this.setState({ buttonState: "" });
  };

  render() {
    return (
      <div className="menu">
        <div className="menu-button" onClick={this.toggleActive}>
          <ul className={this.state.buttonState}>
            {this.props.data.map(swRoutes => {
              return <MenuButtons key={swRoutes.swLink} data={swRoutes} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array
};
