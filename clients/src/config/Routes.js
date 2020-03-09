import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "../pages";
import Drawer from "../components/element/Drawer";
export class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      lastPath: ""
    };
  }

  componentDidMount() {
    const login = localStorage.getItem("Login");
    const lastPath = localStorage.getItem("lastPath");
    if (login) {
      if (login === "true") {
        if (lastPath) {
          this.setState({
            isLoggedIn: true,
            lastPath: lastPath
          });
        } else {
          this.setState({
            isLoggedIn: true
          });
        }
      }
    }
  }

  _RenderApp() {
    return (
      <Drawer history={this.props.history}>
        <pages.PEMINJAM.Actions>
          <pages.ANGGOTA.Actions>
            <pages.PETUGAS.Actions>
              <pages.BUKU.Actions>
                <Switch>
                  <Redirect
                    from="/login"
                    to={this.state.lastPath ? this.state.lastPath : "/"}
                  />
                  <Route exact path="/" component={pages.Home} />
                  <Route
                    exact
                    path="/peminjam"
                    component={pages.PEMINJAM.Component}
                  />
                  <Route
                    exact
                    path="/petugas"
                    component={pages.PETUGAS.Component}
                  />
                  <Route
                    exact
                    path="/anggota"
                    component={pages.ANGGOTA.Component}
                  />
                  <Route exact path="/buku" component={pages.BUKU.Component} />
                  <Route component={pages.Error404} />
                </Switch>
              </pages.BUKU.Actions>
            </pages.PETUGAS.Actions>
          </pages.ANGGOTA.Actions>
        </pages.PEMINJAM.Actions>
      </Drawer>
    );
  }

  _RenderLogin() {
    return (
      <Switch>
        <Route exact path="/login" component={pages.Login} />
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isLoggedIn ? this._RenderApp() : this._RenderLogin()}
      </BrowserRouter>
    );
  }
}

export default Routes;
