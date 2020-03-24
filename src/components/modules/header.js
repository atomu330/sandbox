import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="left">user@user.com</div>
        <div className="right">Search</div>
      </header>
    );
  }
}
