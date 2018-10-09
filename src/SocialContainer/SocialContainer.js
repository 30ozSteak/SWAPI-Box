import React, { Component } from "react";
import PropTypes from "prop-types";
import SocialButtons from "../SocialButtons/SocialButtons";

export default class SocialContainer extends Component {
  constructor() {
    super();
    this.state = {
      socialClass: ["social-toggle", "inactive"].join(" "),
      buttons: "inactive"
    };

    this.toggleSocialButtons = this.toggleSocialButtons.bind(this);
  }

  toggleSocialButtons() {
    if (this.state.socioalClass === ["social-toggle", "inactive"].join("")) {
      this.setState({
        socialClass: ["social-toggle", "active"].join(""),
        buttons: "active"
      });
    } else {
      this.setState({
        socialClass: ["social-toggle", "inactive"].join(""),
        buttons: "inactive"
      });
    }
  }

  render() {
    return (
      <div className="social-container">
        <div
          className={this.state.socialClass}
          onClick={this.toggleSocialButtons}
        />
        <ul className={this.state.buttons}>
          {this.props.data.map(account => {
            return <SocialButtons key={account.service} data={account} />;
          })}
        </ul>
      </div>
    );
  }
}

SocialContainer.propTypes = {
  data: PropTypes.array
};
