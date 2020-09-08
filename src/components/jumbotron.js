import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import truckImage from "../Assets/truckimage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${truckImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    min-height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    min-height: 200px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Truck with Us pls</p>
      </Container>
    </Jumbo>
  </Styles>
);
