import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="bg-info text-white text-center p-2">
            <h4>Gary Trucking LLC</h4>
          </div>
        </div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Services" id="basic-nav-dropdown">
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
              <NavDropdown title="Current Driver" id="basic-nav-dropdown">
                <NavDropdown.Item href="/CurrentDrivers/bol">
                  BOL Uploader
                </NavDropdown.Item>
                <NavDropdown.Item href="/CurrentDrivers/login">
                  Login
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Future Driver" id="basic-nav-dropdown">
                <NavDropdown.Item href="/FutureDrivers/EligibilityChecker">
                  Eligibility
                </NavDropdown.Item>
                <NavDropdown.Item href="/FutureDrivers/jobApplication">
                  Job Application
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Link to="/login" className="btn btn-success">
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
