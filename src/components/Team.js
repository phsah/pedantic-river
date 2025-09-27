import React, { Component } from "react";

export default class Team extends Component {
  render() {
    const { players } = this.props;
    return (
      <div>
        <h2>Team</h2>
        <ol>
          {players.map((p, i) => (
            <li key={i}>
              {p.name} – {p.position}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
