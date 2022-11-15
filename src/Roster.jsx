import React from "react";
import FullRoster from "./FullRoster";
import Player from "./Player";
import { Switch, Route } from "react-router-dom";

const Roster = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
      </Switch>
    </div>
  );
};

export default Roster;
