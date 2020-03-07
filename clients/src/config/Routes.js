import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "../pages";
import Drawer from "../components/element/Drawer";
import AnggotaState from "../reducer/state/AnggotaState";
import PetugasState from "../reducer/state/PetugasState";
import PeminjamState from "../reducer/state/PeminjamState";
import BukuState from "../reducer/state/BukuState";
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
        <AnggotaState>
          <PetugasState>
            <BukuState>
              <PeminjamState>
                <Switch>
                  <Redirect
                    from="/login"
                    to={this.state.lastPath ? this.state.lastPath : "/"}
                  />
                  <Route exact path="/" component={pages.Home} />
                  <Route exact path="/peminjam" component={pages.Peminjams} />
                  <Route exact path="/petugas" component={pages.Petugases} />
                  <Route exact path="/anggota" component={pages.Anggotas} />
                  <Route exact path="/buku" component={pages.Bukus} />
                  <Route component={pages.Error404} />
                </Switch>
              </PeminjamState>
            </BukuState>
          </PetugasState>
        </AnggotaState>
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
