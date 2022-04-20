import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PTasmin from "./corosel/PTasmin";
import PTbimbel from "./corosel/PTbimbel";
import PTtaspen from "./corosel/PTtaspen";
import "./Indexcorousel.css";

const Indexcorousel = () => {
  return (
    <Container>
      <Row className="bottomss mx-auto">
        <Col className="">
          <PTtaspen />
        </Col>
        <Col className="">
          <PTasmin />
        </Col>
        <Col className="">
          <PTbimbel />
        </Col>
      </Row>
    </Container>
  );
};

export default Indexcorousel;
