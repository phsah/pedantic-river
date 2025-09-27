import React, { Component } from "react";

export default class Bages extends Component {
  render() {
    const { medals, cups, goals } = this.props;
    return (
      <div>
        <h2>Bages</h2>
        <ul>
          <li>Medals: {medals}</li>
          <li>Trophes: {cups}</li>
          <li>Goals: {goals}</li>
        </ul>
      </div>
    );
  }
}
