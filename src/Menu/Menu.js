import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuButtons from "../MenuButtons/MenuButtons";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuClass: ["menu-button", "inactive"].join(" "),
      buttons: "inactive"
    };
    this.toggleMenuButtons = this.toggleMenuButtons.bind(this);
  }
  toggleMenuButtons() {
    this.state.menuClass === ["menu-button", "inactive"].join(" ")
      ? this.setState({
          menuClass: ["menu-button", "active"].join(" "),
          buttons: "active"
        })
      : this.setState({
          menuClass: ["menu-button", "inactive"].join(" "),
          buttons: "inactive"
        });
  }

  render() {
    return (
      <div className="menu">
        <div
          className={this.state.menuClass}
          onClick={this.toggleMenuButtons}
        />
        <ul className={this.state.buttons}>
          {this.props.data.map(account => {
            return <MenuButtons key={account.service} data={account} />;
          })}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.object
};
