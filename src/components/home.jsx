import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export const Home = () => (
  <div className="layout j container ">
    <Jumbotron>
      <h1>Come Work With Us!</h1>
      <p>
        Our goal at Gary Trucking LLC is to provide our customers with the
        highest quality of service and safety in the trucking industry.
        Excellence in service and safety are company goals. We measure ourselves
        by the high standards of our customers, and value their input. Mutual
        progress towards defined goals is our objective in working with our 
        .
      </p>
      <p>
        <Button href="/FutureDrivers/EligibilityChecker"variant="primary">Check if you are Eligible</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Home;
