import React from "react";
import road from "../Assets/road.jpg";
import { Jumbotron, Button } from "react-bootstrap";

export const Home = () => (
  <div className="layout jumbotron jumbotron-fluid container ">
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>
        Our goal at Gary Trucking LLC is to provide our customers with the
        highest quality of service and safety in the trucking industry.
        Excellence in service and safety are company goals. We measure ourselves
        by the high standards of our customers, and value their input. Mutual
        progress towards defined goals is our objective in working with our
        customers.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Home;
