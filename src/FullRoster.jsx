import React from "react";
import { PlayerAPI } from "./PlayerAPI";
import { Link } from "react-router-dom";

const FullRoster = () => {
  const players = PlayerAPI.all();
  const playersListItems = players.map((player) => {
    return (
      <li key={player.number}>
        <Link to={`/roster/${player.number}`}>{player.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <ul>{playersListItems}</ul>
    </div>
  );
};

export default FullRoster;
