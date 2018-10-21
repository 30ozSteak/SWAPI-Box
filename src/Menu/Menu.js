import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import { Route, NavLink, Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
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
            <div>
              <NavLink to="/people" onClick={this.props.handlePeopleLink} />
              <NavLink to="/planets" onClick={this.props.handlePlanetLink} />
              <NavLink to="/vehicles" onClick={this.props.handleVehicleLink} />
              <NavLink to="favorites" />
              <div className="numFaves" />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array
};
