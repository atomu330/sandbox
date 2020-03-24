import React from "react";

export default class Header extends React.Component {
  const { position } = this.props;

  render() {
    return (
      <div className="card {position}">
        <div className="left">user@user.com</div>
        <div className="right">Search</div>
      </div>
    );
  }
}
