import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Roster from './Roster'
import Schedule from './Schedule'

 const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/roster' component={Roster}></Route>
        <Route path='/schedule' component={Schedule}></Route>
      </Switch>
    </main>
  )
 }

 export default Main;