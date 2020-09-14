import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import truckImage from "../Assets/truckimage.jpg";

const Styles = styled.div`
  .jumbo {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${truckImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ffff;
    min-height: 200px;
    position: relative;
    z-index: 2;
    font-weight: 130px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.9;
    position: absolute;
    margin-top: 0;
    margin-left: 0;
    bottom: 0;
    margin-right: 0;
    z-index: 2;
    min-height: 300px;
    font-color: black;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo red form layout font-size:40px ">
      <Container className="">
        <div className="row">
          <div className="col-lg-4">
            <a
              href="/FutureDrivers/jobApplication"
              className="home-h1 badge badge-pill badge-success"
            >
              Apply
            </a>
            <p style={{ fontSize: "19px" }} className="container pl-4 pt-3">
              Gary Trucking LLC is constantly looking for talented individuals
              that can deliver the goods our customers need. If you are looking
              for an exciting opportunity with a company that's clearly going
              places. <strong>JOIN US.</strong>
            </p>
          </div>
          <div className="col-lg-4">
            <a
              href="/services/authority"
              className="home-h1 badge badge-pill badge-success"
            >
              Get YOUR Authority
            </a>
            <ul style={{ fontSize: "17px" }} className="container pl-4 pt-3">
              <li>
                Run under your own MC number - we’ll take care of all the
                paperwork.
              </li>
              <li>
                We’ll file your federal and state permits, so you don’t have to
                worry about what step is next.
              </li>
              <li>
                Get guidance through the whole process, even after you’re up and
                running.
              </li>
              <li>
                Avoid delays by letting the experts take care of the legal
                stuff.
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <a
              href="/contact"
              className="home-h1 badge badge-pill badge-success"
            >
              Contact Us
            </a>
            <ul style={{ fontSize: "18px" }} className="container pl-4 pt-3 ">
              Call - (469) 602-15722
              <br />
              Email - Garytruckingllc@yahoo.com
              <br />
              Our office is located at:
              <br />
              <p
                style={{ color: "#ffdf", fontSize: "22px" }}
                className="float-center pl-4"
              >
                9304 Forest Ln S141
                <br />
                Garland, TX 75231
              </p>
            </ul>
          </div>
        </div>
      </Container>
    </Jumbo>
  </Styles>
);
