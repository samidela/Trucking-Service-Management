import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import { NoMatch } from "./components/noMatch";
import { Layout } from "./components/layout";
import NavigationBar from "./components/navigationBar";
import { Jumbotron } from "./components/jumbotron";
import Dispatch from "./components/Services/dispatch";
import Authority from "./components/Services/authority";
import CabCard from "./components/Services/cabCard";
import CarrierPacket from "./components/Services/carrierPacket";
import Form2290 from "./components/Services/form2290";
import Ifta from "./components/Services/ifta";
import UcrRegistration from "./components/Services/ucrRegistration";
import JobApplication from "./components/FutureDrivers/jobApplication";
import EligibilityCheck from "./components/FutureDrivers/eligibilityCheck";
import BOL from "./components/CurrentDrivers/bol";
import Login from "./components/login/login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route path="/Services/authority" component={Authority} />
            <Route path="/Services/CabCard" component={CabCard} />
            <Route path="/Services/CarrierPacket" component={CarrierPacket} />
            <Route path="/Services/Dispatch" component={Dispatch} />
            <Route path="/Services/form2290" component={Form2290} />
            <Route path="/Services/Ifta" component={Ifta} />
            <Route
              path="/FutureDrivers/JobApplication"
              component={JobApplication}
            />
            <Route
              path="/FutureDrivers/EligibilityChecker"
              component={EligibilityCheck}
            />
            <Route
              path="/Services/UcrRegistration"
              component={UcrRegistration}
            />
            <Route path="/CurrentDrivers/Bol" component={BOL} />
            <Route path="/CurrentDrivers/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
        <footer className="container">
          <p className="float-right">All Rights Reserved</p>
          <p>
            &copy; &middot;{" "}
            <span className="float-left" to="/">
              {" "}
              <span>Gary Trucking LLC 2020 </span>
            </span>{" "}
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
