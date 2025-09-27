import React, { Component } from "react";

export default class ClubInfo extends Component {
  render() {
    const { name, city, founded, emblem } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>City: {city}</p>
        <p>Data: {founded}</p>
        <img src={emblem} alt="Герб клубу" />
      </div>
    );
  }
}
