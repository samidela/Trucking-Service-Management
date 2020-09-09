import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Form, NavbarBrand } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="header container-fluid">
          <div className=" header-title text-white text-center  w3-black w3-center w3-allerta">
            <NavbarBrand className="w3-xxxlarge">
              <Link to="/">
                {" "}
                <span className="header-title text-white">
                  Gary Trucking LLC
                </span>
              </Link>
            </NavbarBrand>
          </div>
        </div>
        <Navbar bg="light" expand="lg" className="justify-content-between ">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="pl-5"
              >
                <NavDropdown.Item href="/Services/biennial">
                  Biennial
                </NavDropdown.Item>
                <NavDropdown.Item href="/Services/cabcard">
                  Cab Card
                </NavDropdown.Item>
                <NavDropdown.Item href="/Services/carrierPacket">
                  Carrier Packet
                </NavDropdown.Item>
                <NavDropdown.Item href="/Services/dispatch">
                  Dispatch
                </NavDropdown.Item>
                <NavDropdown.Item href="/Services/form2290">
                  form 2290
                </NavDropdown.Item>
                <NavDropdown.Item href="/Services/ifta">Ifta</NavDropdown.Item>
                <NavDropdown.Item href="/Services/ucrRegistration">
                  Ucr Registration
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Current Driver"
                id="basic-nav-dropdown"
                className="pl-5"
              >
                <NavDropdown.Item href="/CurrentDrivers/bol">
                  BOL Uploader
                </NavDropdown.Item>
                <NavDropdown.Item href="/CurrentDrivers/login">
                  Login
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Future Driver"
                id="basic-nav-dropdown"
                className="pl-5"
              >
                <NavDropdown.Item href="/FutureDrivers/EligibilityChecker">
                  Eligibility
                </NavDropdown.Item>
                <NavDropdown.Item href="/FutureDrivers/jobApplication">
                  Job Application
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Link to="/CurrentDrivers/login" className="btn btn-success">
                Login
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
