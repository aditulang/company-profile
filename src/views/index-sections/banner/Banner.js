import React from "react";

// reactstrap components
import { Container, Row, Col, Button, Modal, ModalBody } from "reactstrap";
import "./Bannner.css";

// core components

function Banner() {
  const [modal1, setModal1] = React.useState(false);
  return (
    <>
      <div className="section section-banner">
        <Container>
          <Row>
            <Col className="" xs="6">
              <div>
                <img
                  alt="..."
                  height="250px"
                  src={require("assets/img/logo1.png").default}
                ></img>
              </div>

              <Button
                color="info"
                className="buttons"
                type="button"
                onClick={() => setModal1(true)}
              >
                ABAOUTUS!
              </Button>
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Tentang Kami</h4>
                </div>
                <ModalBody>
                  <p> Kami lebih utama bergerak di bidang software house </p>
                  <p> - Kami Berdiri tahun 2014 </p>
                  <p>
                    {" "}
                    - Kami memiliki pengalaman dalam 7 tahun bekerjasama dengan
                    client kami{" "}
                  </p>
                  <p> - Memiliki team yang solid dan berpengalaman </p>
                  <p> - Memiliki Budaya Kerja yang baik </p>
                  <p> - Kantor kami berlokasi di Bekasi Jawa Barat </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    yeah
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>

            <Col className="paragraft" xs="6">
              <div>
                <h1>IT Solution</h1>
                <p>Software House</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Banner;
