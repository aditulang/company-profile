import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PTpln from "./corosel/PTpln";
import PTenesis from "./corosel/PTenesis";
import PTmarketama from "./corosel/PTmarketama";
import "./Indexcorousel.css";

const Indexcorousel1 = () => {
  return (
    <Container>
      <Row className="bottomss mx-auto">
        <Col className="">
          <PTpln />
        </Col>
        <Col className="">
          <PTenesis />
        </Col>
        <Col className="">
          <PTmarketama />
        </Col>
      </Row>
    </Container>
  );
};

export default Indexcorousel1;
