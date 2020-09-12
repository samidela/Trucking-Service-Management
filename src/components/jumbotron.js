import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import truckImage from "../Assets/truckimage.jpg";

const Styles = styled.div`
  .jumbo {
    background-color: aliceblue;
    
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
     url(${truckImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ffff;
    min-height: 300px;
    position: relative;
    z-index: -2;
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
    z-index: -1;
    min-height: 300px;
    font-color: black;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo red form layout font-size:40px ">
      <Container className="">
        <div class="row">
          <div class="col-lg-4">
            <a href="/JobApplication"className="home-h1 badge badge-pill badge-success">Apply</a>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
          </div>
          <div class="col-lg-4">
            <h2 className="home-h1 badge badge-pill badge-success">
              Get Authority
            </h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
          </div>
          <div class="col-lg-4">
            <h2 className="home-h1 badge badge-pill badge-success">
              Contact Us
            </h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>
      </Container>
    </Jumbo>
  </Styles>
);
