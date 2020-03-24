import React from "react";

export default class BoardPage extends React.Component {
  render() {
    return (
      <main id="board_page">
        <div className="card-wrapper">
          <div className="card left" />
          <div className="card center" />
          <div className="card right" />
        </div>
        <div className="button-wrapper">
          <div className="button" />
        </div>
      </main>
    );
  }
}
