import "./styles.css";
import InfoOfClub from "./components/InfoOfClub";
import Bages from "./components/Bages";
import Team from "./components/Team";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    const players = [
      { name: "Olex", position: "Fighter" },
      { name: "Igor", position: "Defender" },
      { name: "Max", position: "Defender" },
    ];

    return (
      <div className="max-w-xl mx-auto mt-6 font-sans">
        <InfoOfClub
          name="FightersOfKyiv"
          city="Kyiv"
          founded="1234"
          emblem=""
        />
        <Bages medals={25} cups={15} goals={3200} />
        <Team players={players} />
      </div>
    );
  }
}
