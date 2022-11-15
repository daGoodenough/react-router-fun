import React from "react";
import { PlayerAPI } from "./PlayerAPI";
import { Link } from "react-router-dom";
import Roster from "./Roster";

const Player = (props) => {
  const player = PlayerAPI.get(parseInt(props.match.params.number));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <h1>
        {player.name} #{player.number}
      </h1>
      <h2>Postion: {player.position}</h2>
      <Link to={"/roster"} component={Roster}>
        Back
      </Link>
    </div>
  );
};

export default Player;
