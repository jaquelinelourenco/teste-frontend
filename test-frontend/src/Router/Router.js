import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Usuario from "../Components/Usuario/Usuario";
import Repositorios from "../Components/Repositorios/Repositorios";
import Starred from "../Components/Starred/Starred";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/busca" />
          </Route>

          <Route path="/busca/:username?" component={Usuario} />
          <Route path="/repos/:username" component={Repositorios} />
          <Route path="/starred/:username" component={Starred} />
        </Switch>
      </BrowserRouter>
    );
  }
}
